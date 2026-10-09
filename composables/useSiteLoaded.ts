import { ref } from 'vue';

const isSiteLoaded = ref(false);

export function useSiteLoaded() {
  const setSiteLoaded = () => {
    isSiteLoaded.value = true;
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('site-unveiled'));
    }
  };

  return {
    isSiteLoaded,
    setSiteLoaded
  };
}
