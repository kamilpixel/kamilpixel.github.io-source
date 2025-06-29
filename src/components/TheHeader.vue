<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden md:block">
            <div class="flex space-x-4">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</RouterLink
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            @click="toggleTheme"
            data-test-id="toggleThemeButton"
            type="button"
            class="cursor-pointer relative rounded-full bg-gray-900 p-1 text-gray-400 hover:text-white focus:ring-2 focus:gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">Toggle theme</span>
            <SunIcon v-if="themeStore.isLight" class="size-6" aria-hidden="true" />
            <MoonIcon v-else class="size-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="template">
          <RouterLink
            :to="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</RouterLink
          >
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, MoonIcon, XMarkIcon, SunIcon } from '@heroicons/vue/24/outline';
import { useThemeStore } from '@/stores/themeStore';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const navigation = computed(() => [
  // Check current route by name, if match set current to true
  { name: 'Portfolio', href: '/', current: route.name === 'portfolio' },
  { name: 'About', href: '/about', current: route.name === 'about' },
]);

// Use themeStore to toggle theme
const themeStore = useThemeStore();
const toggleTheme = () => {
  themeStore.toggleTheme();
  if (!themeStore.isLight) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
};
</script>
