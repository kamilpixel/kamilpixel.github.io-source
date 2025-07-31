// composables/useSanitizedHtml.ts

import { computed } from 'vue';
import type { ComputedRef, Ref } from 'vue';

export function useSanitizedHtml(rawHtmlRef: Ref<string | undefined | null>): {
  sanitizedHtml: ComputedRef<string>;
} {
  const sanitizeHTML = (htmlString: string): string => {
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim();

    // Remove <script> tags
    const scripts = template.content.querySelectorAll('script');
    scripts.forEach((script) => script.remove());

    // Remove dangerous attributes
    const elements = template.content.querySelectorAll('*');
    for (const el of elements) {
      for (const attr of Array.from(el.attributes)) {
        const name = attr.name.toLowerCase();
        const value = attr.value.toLowerCase();
        if (name.startsWith('on') || value.startsWith('javascript:')) {
          el.removeAttribute(attr.name);
        }
      }
    }

    return template.innerHTML;
  };

  const sanitizedHtml = computed(() => {
    const raw = rawHtmlRef.value ?? '';
    return sanitizeHTML(raw);
  });

  return { sanitizedHtml };
}
