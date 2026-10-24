import { Injectable, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { CodelabPage } from '../models/codelab-page.model';
import { CODELAB_PAGES } from '../data/codelab-pages.data';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  readonly pages = signal<CodelabPage[]>(CODELAB_PAGES);
  readonly currentUrl = signal<string>('/introduction');
  readonly isMobileNavOpen = signal<boolean>(false);

  readonly currentPage = computed<CodelabPage>(() => {
    const rawPath = this.currentUrl().replace(/^\//, '').split(/[?#]/)[0];
    const found = this.pages().find((p) => p.path === rawPath);
    return found ?? this.pages()[0];
  });

  readonly currentIndex = computed<number>(() => {
    const current = this.currentPage();
    return this.pages().findIndex((p) => p.path === current.path);
  });

  readonly previousPage = computed<CodelabPage | null>(() => {
    const index = this.currentIndex();
    return index > 0 ? this.pages()[index - 1] : null;
  });

  readonly nextPage = computed<CodelabPage | null>(() => {
    const index = this.currentIndex();
    return index < this.pages().length - 1 ? this.pages()[index + 1] : null;
  });

  readonly progressPercent = computed<number>(() => {
    const index = this.currentIndex();
    const total = this.pages().length;
    return Math.round(((index + 1) / total) * 100);
  });

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentUrl.set(event.urlAfterRedirects || event.url);
        this.updateSeo(this.currentPage());
        this.isMobileNavOpen.set(false);
      });
  }

  toggleMobileNav(): void {
    this.isMobileNavOpen.update((v) => !v);
  }

  closeMobileNav(): void {
    this.isMobileNavOpen.set(false);
  }

  goToNext(): void {
    const next = this.nextPage();
    if (next) {
      this.router.navigate(['/', next.path]);
    }
  }

  goToPrevious(): void {
    const prev = this.previousPage();
    if (prev) {
      this.router.navigate(['/', prev.path]);
    }
  }

  private updateSeo(page: CodelabPage): void {
    const fullTitle = `${page.title} · AI Coding Lab`;
    this.titleService.setTitle(fullTitle);
    this.metaService.updateTag({
      name: 'description',
      content: page.description,
    });
  }
}
