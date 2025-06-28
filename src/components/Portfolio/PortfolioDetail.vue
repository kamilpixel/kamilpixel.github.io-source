<template>
  <TransitionRoot as="template" :show="portfolioStore.isOpenModal">
    <Dialog class="relative z-10" @close="portfolioStore.closeModal()">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center md:p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="bg-white dark:bg-gray-800 relative transform overflow-hidden md:rounded-lg text-left shadow-xl transition-all w-full"
            >
              <div class="p-4">
                <!-- Top close button -->
                <button
                  type="button"
                  class="cursor-pointer ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500"
                  @click="portfolioStore.closeModal()"
                >
                  <XMarkIcon
                    class="h-6 w-6 text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200"
                    aria-hidden="true"
                  />
                </button>

                <!-- Main portfolio content -->
                <div class="overflow-hidden py-24 sm:py-32">
                  <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                      class="mx-auto max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none"
                    >
                      <!-- Text content -->
                      <div class="lg:pt-4 lg:pr-8 md:pb-4">
                        <div class="w-full">
                          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-4">
                            <div>
                              <h2
                                class="text-base/7 font-semibold text-indigo-600 dark:text-indigo-500"
                              >
                                {{ portfolioStore.selectedPortfolioItem?.project_type }}
                              </h2>
                              <p
                                class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-gray-200 sm:text-5xl"
                              >
                                {{ portfolioStore.selectedPortfolioItem?.project_title }}
                              </p>
                              <p class="mt-6 text-lg text-gray-600 dark:text-gray-400">
                                {{ portfolioStore.selectedPortfolioItem?.project_description }}
                              </p>
                            </div>
                            <dl
                              class="max-w-xl space-y-8 md:space-y-4 text-base/7 text-gray-600 lg:max-w-none"
                            >
                              <div
                                v-for="feature in features"
                                :key="feature.name"
                                class="relative pl-9"
                              >
                                <dt class="inline font-semibold text-gray-900 dark:text-gray-200">
                                  <component
                                    :is="feature.icon"
                                    class="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-500"
                                    aria-hidden="true"
                                  />
                                  {{ feature.name }}
                                </dt>
                                <dd class="pl-2 inline dark:text-gray-400">
                                  {{ feature.description }}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <!-- Screenshot content -->
                      <div class="flex justify-center items-center">
                        <div class="w-full">
                          <img
                            :src="portfolioStore.selectedPortfolioItem?.project_screenshot"
                            :alt="portfolioStore.selectedPortfolioItem?.project_title"
                            class="w-full h-auto object-contain rounded-lg mb-4 ring-1 ring-slate-300 dark:ring-slate-700 dark:ring-slate-400"
                          />
                          <p
                            class="text-xs text-gray-400 dark:text-gray-500 text-center mt-4 italic"
                          >
                            All logos and content belong to their original owners.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Bottom close button -->
              <div
                class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-slate-300 dark:border-slate-600"
              >
                <button
                  type="button"
                  class="cursor-pointer inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                  @click="portfolioStore.closeModal()"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { Square3Stack3DIcon, UserGroupIcon, UserIcon } from '@heroicons/vue/20/solid';
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore();

const features = computed(() => [
  {
    name: 'Tech stack',
    description: portfolioStore.selectedPortfolioItem?.project_tech_stack,
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Team',
    description: portfolioStore.selectedPortfolioItem?.project_team,
    icon: UserGroupIcon,
  },
  {
    name: 'Role',
    description: portfolioStore.selectedPortfolioItem?.project_role,
    icon: UserIcon,
  },
]);
</script>
