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
              class="relative transform overflow-hidden md:rounded-lg bg-white text-left shadow-xl transition-all w-full"
            >
              <div class="bg-white p-4">
                <!-- Top close button -->
                <button
                  type="button"
                  class="cursor-pointer ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
                  @click="portfolioStore.closeModal()"
                >
                  <XMarkIcon class="h-6 w-6 text-slate-600 hover:text-slate-700" aria-hidden="true" />
                </button>

                <!-- Main portfolio content -->
                <div class="overflow-hidden bg-white py-24 sm:py-32">
                  <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
                    >
                      <!-- Text content -->
                      <div class="lg:pt-4 lg:pr-8">
                        <div class="lg:max-w-lg">
                          <h2 class="text-base/7 font-semibold text-indigo-600">
                            {{ portfolioStore.selectedPortfolioItem?.project_type }}
                          </h2>
                          <p
                            class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
                          >
                            {{ portfolioStore.selectedPortfolioItem?.project_title }}
                          </p>
                          <p class="mt-6 text-lg/8 text-gray-600">
                            {{ portfolioStore.selectedPortfolioItem?.project_description }}
                          </p>
                          <dl
                            class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none"
                          >
                            <div
                              v-for="feature in features"
                              :key="feature.name"
                              class="relative pl-9"
                            >
                              <dt class="inline font-semibold text-gray-900">
                                <component
                                  :is="feature.icon"
                                  class="absolute top-1 left-1 size-5 text-indigo-600"
                                  aria-hidden="true"
                                />
                                {{ feature.name }}
                              </dt>
                              <dd class="inline">{{ feature.description }}</dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                      <!-- Screenshot content -->
                      <img
                        :src="portfolioStore.selectedPortfolioItem?.project_screenshot"
                        :alt="portfolioStore.selectedPortfolioItem?.project_title"
                        class="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Bottom close button -->
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { Square3Stack3DIcon, UserGroupIcon } from '@heroicons/vue/20/solid'

import { usePortfolioStore } from '@/stores/portfolioStore'
import { computed } from 'vue'
const portfolioStore = usePortfolioStore()

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
])
</script>
