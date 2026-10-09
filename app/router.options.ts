import type { RouterConfig } from '@nuxt/schema';

// Router options for reliable scroll restoration and top-of-page navigation
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();

    // 1. Browser back/forward button history navigation
    if (savedPosition) {
      return new Promise((resolve) => {
        nuxtApp.hook('page:finish', () => {
          setTimeout(() => {
            resolve(savedPosition);
          }, 60);
        });
      });
    }

    // 2. Hash anchor navigation (e.g. #contact)
    if (to.hash) {
      return new Promise((resolve) => {
        nuxtApp.hook('page:finish', () => {
          setTimeout(() => {
            const el = document.querySelector(to.hash);
            if (el) {
              resolve({
                el: to.hash,
                top: 0,
                behavior: 'smooth'
              });
            } else {
              resolve({ top: 0, left: 0 });
            }
          }, 80);
        });
      });
    }

    // 3. If exact same route and no hash, do nothing
    if (to.path === from.path && to.hash === from.hash) {
      return false;
    }

    // 4. Default: Always start smoothly and reliably from the top of the page
    return new Promise((resolve) => {
      nuxtApp.hook('page:finish', () => {
        resolve({ top: 0, left: 0 });
      });
    });
  }
};
