import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import PortfolioDetail from './PortfolioDetail.vue';

describe('PortfolioDetail.vue component', () => {
  test('renders properly', () => {
    const wrapper = mount(PortfolioDetail, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: true,
          }),
        ],
      },
    });
    expect(wrapper.findComponent(PortfolioDetail).exists()).toBeTruthy();
  });

  test('returns correct features from selectedPortfolioItem', async () => {
    const testItem = {
      project_tech_stack: 'Vue, TypeScript',
      project_team: 'Web Designer, Product Owner',
      project_role: 'Web Designer',
    };

    const wrapper = mount(PortfolioDetail, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              portfolio: {
                selectedPortfolioItem: testItem,
              },
            },
          }),
        ],
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const features = (wrapper.vm as any).features;
    expect(features[0].description).toBe('Vue, TypeScript');
    expect(features[1].description).toBe('Web Designer, Product Owner');
    expect(features[2].description).toBe('Web Designer');
  });
});
