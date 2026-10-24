export const SETUP_PROMPT_SNIPPET = `Crée une application Angular nommée PesaFlow avec SSR, Router et SCSS pour le style.

Ensuite, dans le dossier du projet, exécute ces commandes dans l’ordre :

1. Installe les skills au niveau du projet :
   npx skills add https://github.com/angular/skills
   npx skills add firebase/agent-skills --agent=antigravity
   npx skills add GoogleChrome/modern-web-guidance
2. Ajoute AngularFire :
   ng add @angular/fire@next
3. Ajoute Angular Material :
   ng add @angular/material

À la fin, vérifie que le projet compile et résume ce qui a été installé. Ne modifie rien d’autre et n’écris pas encore de code applicatif.`;
