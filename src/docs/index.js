import { bootstrap } from '@xinix/xin';
import './scss/docs.scss';

(async function () {
  bootstrap({
    // 'customElements.version': 'v0',
    'view.loaders': [
      {
        test: /^x-/,
        load (view) {
          return import(`./views/${view.name}`);
        },
      },
    ],
  });

  await import('./components/x-app');

  document.addEventListener('started', () => {
    setTimeout(() => {
      document.body.removeAttribute('unresolved');
    }, 100);
  });
})();