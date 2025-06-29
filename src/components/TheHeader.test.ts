import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import TheHeader from './TheHeader.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { useThemeStore } from '@/stores/themeStore';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'portfolio', component: { template: '<div></div>' } },
    { path: '/about', name: 'about', component: { template: '<div></div>' } },
  ],
});

describe('TheHeader.vue component', () => {
  test('renders properly', async () => {
    router.push({ name: 'portfolio' });
    await router.isReady();
    const wrapper = mount(TheHeader, {
      global: {
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: true,
          }),
        ],
      },
    });

    expect(wrapper.findComponent(TheHeader).exists()).toBeTruthy();
  });

  test('toggles `isLight` value in the store', async () => {
    const wrapper = mount(TheHeader, {
      global: {
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
          }),
        ],
      },
    });
    const themeStore = useThemeStore();
    themeStore.isLight = true;
    expect(themeStore.isLight).toBe(true);
    await wrapper.find('[data-test-id="toggleThemeButton"]').trigger('click');
    expect(themeStore.isLight).toBe(false);
  });
});
