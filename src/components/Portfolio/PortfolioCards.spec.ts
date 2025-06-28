import { describe, it, expect, vi } from 'vitest'; // ✅ Import vi!
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import PortfolioCards from './PortfolioCards.vue';
import type { PortfolioItem } from '@/types/portfolio';

describe('PortfolioCards', () => {
  it('renders properly', () => {
    const wrapper = mount(PortfolioCards, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: true,
          }),
        ],
      },
      props: {
        item: {
          project_title: 'Test Project',
          project_type: 'Frontend Development',
          project_tech_stack: 'Vue.js, TypeScript',
          project_role: 'Solo',
          project_team: 'Frontend Developers, Product Owners',
          project_description: 'This is description of the test project.',
          project_thumbnail: 'https://example.com/thumbnail.jpg',
          project_screenshot: 'https://example.com/screenshot.jpg',
          project_visible: true,
        } as PortfolioItem,
      },
    });

    expect(wrapper.findComponent(PortfolioCards).exists()).toBeTruthy();
  });
});
