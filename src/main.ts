import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
document.addEventListener('DOMContentLoaded', () => {
  let buble = document.getElementById('buble') as HTMLDivElement;
  let body = document.body;
  let cards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;
  buble.addEventListener('click', () => {
    if (!body.classList.contains('dark')) {
      body.classList.add('dark');
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('darkcard');
        buble.classList.add('light');
      }
    } else {
      body.classList.remove('dark');
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('darkcard');
      }
      buble.classList.remove('light');
    }
  });
});
