<template>
  <div class="">
    <Disclosure as="nav" class="bg-gray-100" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 md:h-10 items-center justify-between">
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
            <div class="flex shrink-0 items-center">
              <img
                class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                :src="logo"
                alt="kamilpixel"
              />
              <!-- <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> -->
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              type="button"
              class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="size-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                >
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                >
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 outline-hidden' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >Your Profile</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 outline-hidden' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >Settings</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 outline-hidden' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >Sign out</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
      </DisclosurePanel>
    </Disclosure>

    <br />

    <!-- example chitchat -->
    <div
      class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
    >
      <svg class="size-12 shrink-0" viewBox="0 0 40 40">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
            <stop stop-color="#2397B3" offset="0%"></stop>
            <stop stop-color="#13577E" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
            <stop stop-color="#73DFF2" offset="0%"></stop>
            <stop stop-color="#47B1EB" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path
            d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z"
            fill="url(#a)"
            transform="translate(1 1)"
          ></path>
          <path
            d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z"
            fill="url(#b)"
            transform="translate(1 1)"
          ></path>
          <path
            d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            fill="#FFF"
          ></path>
        </g>
      </svg>
      <div>
        <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
        <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
      </div>
    </div>

    <br />

    <!-- example card -->
    <div
      class="mx-auto max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg ring ring-black/5 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6 sm:py-4"
    >
      <img
        class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
        alt="Woman's Face"
        src="https://placehold.co/10x10"
      />
      <div class="space-y-2 text-center sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg font-semibold text-black">Erin Lindford</p>
          <p class="font-medium text-gray-500">Product Engineer</p>
        </div>
        <button
          class="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"
        >
          Message
        </button>
      </div>
    </div>

    <!-- example button -->
    <button
      class="rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700"
    >
      Save changes
    </button>

    <!-- example dark mode -->
    <div class="dark:bg-gray-900 p-8 pt-7">
      <p class="mb-2 text-sm font-medium text-gray-400">Light/Dark mode</p>
      <div
        class="rounded-lg dark:bg-gray-800 px-6 py-8 shadow-xl ring ring-gray-900/5 dark:ring-gray-900/5"
      >
        <div>
          <span
            class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"
            ><svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path></svg
          ></span>
        </div>
        <p class="mt-5 text-base font-medium tracking-tight text-gray-900 dark:text-white">
          Writes upside-down
        </p>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It
          even works in outer space.
        </p>
      </div>
    </div>

    <!-- example card https://tailwindcss.com/docs/styling-with-utility-classes-->
    <div class="p-8">
      <div
        class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-2xl"
      >
        <div class="flex flex-col sm:flex-row">
          <div class="sm:shrink-0">
            <img
              class="h-[200px] w-full object-cover object-bottom sm:w-[193px] sm:object-center"
              width="202"
              height="192"
              alt="Beautiful abstract building in the sun"
              src="https://placehold.co/10x10"
            />
          </div>
          <div class="space-y-2 p-6 2xl:p-8">
            <div class="text-sm leading-6 font-medium text-indigo-600">UI/UX</div>
            <a
              class="block text-base leading-6 font-semibold text-gray-900 hover:underline"
              href="#"
              >HRDF Login page Portal</a
            >
            <p class="text-sm leading-6 text-gray-600">
              Looking to take your team away on a retreat to enjoy awesome food and take in some
              sunshine? We have a list of places to do just that.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- mason gallery https://tailwindcss.com/docs/columns -->
    <div
      class="p-8 container relative overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 dark:inset-ring dark:inset-ring-white/5 group-data-dragging:before:absolute group-data-dragging:before:inset-0"
      style="margin-right: 0px"
    >
      <div class="container relative">
        <div class="absolute inset-0 -top-8 -bottom-8 grid grid-cols-1 gap-8 [34rem]:grid-cols-2">
          <div
            class="border-x text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"
          ></div>
          <div
            class="border-x text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"
          ></div>
          <div
            class="[34rem]:hidden border-x text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"
          ></div>
        </div>
        <div class="relative -mb-4 columns-3xs gap-4 *:mb-4 sm:-mb-8 sm:gap-8 sm:*:mb-8">
          <img
            class="aspect-3/2 w-full rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://picsum.photos/200/300"
          /><img
            class="aspect-square w-full rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://picsum.photos/200/300"
          /><img
            class="aspect-square w-full rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://picsum.photos/200/300"
          /><img
            class="aspect-3/2 w-full rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://picsum.photos/200/300"
          />
        </div>
      </div>
    </div>

    <!-- https://tailwindcss.com/docs/display#flex  -->
    <div
      class="mx-auto flex max-w-xs justify-center p-4 leading-6 text-gray-500 dark:text-gray-400"
    >
      <div class="flex items-center gap-4 p-4">
        <img class="h-12 w-12 rounded-full" src="https://picsum.photos/200/300" />
        <div class="flex flex-col">
          <strong class="font-medium text-gray-900 dark:text-gray-200">Andrew Alfred</strong
          ><span class="font-medium text-gray-500 dark:text-gray-400">Technical advisor</span>
        </div>
      </div>
    </div>

    <!--  https://tailwindcss.com/docs/overflow#showing-content-that-overflows -->
    <div
      class="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 p-8"
    >
      <div
        class="relative mx-auto flex max-w-sm items-center gap-6 overflow-visible rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-800"
      >
        <img
          class="absolute -left-6 h-24 w-24 rounded-full shadow-lg"
          src="https://picsum.photos/200/300"
        />
        <div class="flex flex-col py-5 pl-24">
          <strong class="text-sm font-medium text-gray-900 dark:text-gray-200">Andrew Alfred</strong
          ><span class="text-sm font-medium text-gray-500 dark:text-gray-400"
            >Technical advisor</span
          >
        </div>
      </div>
    </div>

    <!-- https://tailwindcss.com/docs/overflow#hiding-content-that-overflows -->

    <div
      class="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 p-8"
    >
      <div
        class="relative mx-auto flex max-w-sm items-center gap-6 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-800"
      >
        <img
          class="absolute -left-6 h-24 w-24 rounded-full shadow-lg"
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
        />
        <div class="flex flex-col py-5 pl-24">
          <strong class="text-sm font-medium text-gray-900 dark:text-gray-200">Andrew Alfred</strong
          ><span class="text-sm font-medium text-gray-500 dark:text-gray-400"
            >Technical advisor</span
          >
        </div>
      </div>
    </div>

    <!-- https://tailwindcss.com/docs/position#sticky-positioning-elements -->
    <div
      class="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50"
    >
      <div class="px-3">
        <div
          class="relative mx-auto -my-px h-80 max-w-md overflow-auto bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800"
        >
          <div class="relative">
            <div
              class="sticky top-0 flex items-center bg-gray-50/90 px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 backdrop-blur-sm dark:bg-gray-700/90 dark:text-gray-200 dark:ring-black/10"
            >
              A
            </div>
            <div class="divide-y divide-gray-200 dark:divide-gray-200/5">
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Andrew Alfred</strong
                >
              </div>
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Aisha Houston</strong
                >
              </div>
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Anna White</strong
                >
              </div>
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Andy Flint</strong
                >
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              class="sticky top-0 flex items-center bg-gray-50/90 px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 backdrop-blur-sm dark:bg-gray-700/90 dark:text-gray-200 dark:ring-black/10"
            >
              B
            </div>
            <div class="divide-y divide-gray-200 dark:divide-gray-200/5">
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Bob Alfred</strong
                >
              </div>
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Bianca Houston</strong
                >
              </div>
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Brianna White</strong
                >
              </div>
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Bert Flint</strong
                >
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              class="sticky top-0 flex items-center bg-gray-50/90 px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 backdrop-blur-sm dark:bg-gray-700/90 dark:text-gray-200 dark:ring-black/10"
            >
              C
            </div>
            <div class="divide-y divide-gray-200 dark:divide-gray-200/5">
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Colton Alfred</strong
                >
              </div>
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Cynthia Houston</strong
                >
              </div>
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Cheyenne White</strong
                >
              </div>
              <div class="flex items-center gap-4 p-4">
                <img
                  class="size-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                /><strong class="text-sm font-medium text-gray-900 dark:text-gray-200"
                  >Charlie Flint</strong
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 

    https://tailwindcss.com/docs/z-index#basic-example
     -->

    <div
      class="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 p-8"
    >
      <div class="flex justify-center -space-x-3 font-mono text-sm leading-6 font-bold text-white">
        <div
          class="z-40 flex size-16 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]"
        >
          05
        </div>
        <div
          class="z-30 flex size-16 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]"
        >
          04
        </div>
        <div
          class="z-20 flex size-16 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]"
        >
          03
        </div>
        <div
          class="z-10 flex size-16 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]"
        >
          02
        </div>
        <div
          class="z-0 flex size-16 items-center justify-center rounded-full bg-pink-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]"
        >
          01
        </div>
      </div>
    </div>

    <!--
    https://tailwindcss.com/docs/align-items#last-baseline
    -->
    <div
      class="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50"
    >
      <div
        class="mx-auto grid max-w-md divide-y divide-gray-100 border-x border-x-gray-200 text-gray-700 dark:divide-gray-800 dark:border-x-gray-800 dark:bg-gray-950/10 dark:text-gray-300"
      >
        <div class="grid grid-cols-[1fr_auto] items-baseline-last gap-x-4 px-4 py-6">
          <div class="grid grid-cols-[auto_1fr] gap-x-4 max-sm:grid-cols-1">
            <img
              class="size-[2rem] rounded-full"
              alt=""
              src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=128&amp;q=80"
            />
            <div class="font-semibold text-gray-900 sm:col-start-2 dark:text-white">
              Spencer Sharp
            </div>
            <p class="text-sm sm:col-start-2">
              Working on the future of astronaut recruitment at Space Recruit.
            </p>
          </div>
          <a
            class="font-mono text-xs font-medium text-gray-400 underline hover:text-blue-500 dark:text-gray-500"
            href="#"
            >spacerecruit.com</a
          >
        </div>
        <div class="grid grid-cols-[1fr_auto] items-baseline-last gap-x-4 px-4 py-6">
          <div class="grid grid-cols-[auto_1fr] gap-x-4 max-sm:grid-cols-1">
            <img class="size-[2rem] rounded-full" alt="" src="https://picsum.photos/200/300" />
            <div class="font-semibold text-gray-900 sm:col-start-2 dark:text-white">Alex Reed</div>
            <p class="text-sm sm:col-start-2">A multidisciplinary designer.</p>
          </div>
          <a
            class="font-mono text-xs font-medium text-gray-400 underline hover:text-blue-500 dark:text-gray-500"
            href="#"
            >alex-reed.com</a
          >
        </div>
      </div>
    </div>

    <!--https://tailwindcss.com/docs/margin#using-negative-values  -->

    <div class="flex justify-center font-mono text-sm leading-6 font-bold text-white">
      <div class="flex flex-col items-center">
        <div
          class="relative h-16 w-36 overflow-hidden rounded-md border border-sky-700/10 bg-sky-400/20"
        ></div>
        <div class="relative -mt-8 flex items-center justify-center rounded-md bg-sky-500 p-4">
          -mt-8
        </div>
      </div>
    </div>

    <!-- https://tailwindcss.com/docs/max-width#using-the-container-scale -->

    <div
      class="p-8 container relative overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 dark:inset-ring dark:inset-ring-white/5 group-data-dragging:before:absolute group-data-dragging:before:inset-0"
      style="margin-right: 377px"
    >
      <div
        class="dark:highlight-white/5 relative mx-auto flex max-w-md items-center gap-6 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-800"
      >
        <img class="absolute -left-6 h-28 w-28 rounded-full" src="https://picsum.photos/200/300" />
        <div class="min-w-0 py-5 pr-5 pl-28">
          <div class="truncate text-sm font-medium text-gray-900 sm:text-base dark:text-gray-200">
            Andrew Alfred
          </div>
          <div class="truncate text-sm leading-tight text-gray-500 sm:text-base dark:text-gray-400">
            Assistant to the Traveling Secretary
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <ul role="list" class="divide-y divide-gray-100">
      <li class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img
            class="size-12 flex-none rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div class="min-w-0 flex-auto">
            <p class="text-sm/6 font-semibold text-gray-900">Leslie Alexander</p>
            <p class="mt-1 truncate text-xs/5 text-gray-500">leslie.alexander@example.com</p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm/6 text-gray-900">Co-Founder / CEO</p>
          <p class="mt-1 text-xs/5 text-gray-500">
            Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
          </p>
        </div>
      </li>
      <li class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img
            class="size-12 flex-none rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div class="min-w-0 flex-auto">
            <p class="text-sm/6 font-semibold text-gray-900">Michael Foster</p>
            <p class="mt-1 truncate text-xs/5 text-gray-500">michael.foster@example.com</p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm/6 text-gray-900">Co-Founder / CTO</p>
          <p class="mt-1 text-xs/5 text-gray-500">
            Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
          </p>
        </div>
      </li>
      <li class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img
            class="size-12 flex-none rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div class="min-w-0 flex-auto">
            <p class="text-sm/6 font-semibold text-gray-900">Dries Vincent</p>
            <p class="mt-1 truncate text-xs/5 text-gray-500">dries.vincent@example.com</p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm/6 text-gray-900">Business Relations</p>
          <div class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="size-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p class="text-xs/5 text-gray-500">Online</p>
          </div>
        </div>
      </li>
      <li class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img
            class="size-12 flex-none rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div class="min-w-0 flex-auto">
            <p class="text-sm/6 font-semibold text-gray-900">Lindsay Walton</p>
            <p class="mt-1 truncate text-xs/5 text-gray-500">lindsay.walton@example.com</p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm/6 text-gray-900">Front-end Developer</p>
          <p class="mt-1 text-xs/5 text-gray-500">
            Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
          </p>
        </div>
      </li>
      <li class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img
            class="size-12 flex-none rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div class="min-w-0 flex-auto">
            <p class="text-sm/6 font-semibold text-gray-900">Courtney Henry</p>
            <p class="mt-1 truncate text-xs/5 text-gray-500">courtney.henry@example.com</p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm/6 text-gray-900">Designer</p>
          <p class="mt-1 text-xs/5 text-gray-500">
            Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
          </p>
        </div>
      </li>
      <li class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img
            class="size-12 flex-none rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div class="min-w-0 flex-auto">
            <p class="text-sm/6 font-semibold text-gray-900">Tom Cook</p>
            <p class="mt-1 truncate text-xs/5 text-gray-500">tom.cook@example.com</p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm/6 text-gray-900">Director of Product</p>
          <div class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="size-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p class="text-xs/5 text-gray-500">Online</p>
          </div>
        </div>
      </li>
    </ul>

    <!-- badges -->
    <span
      class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"
      >Badge</span
    >
    <span
      class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset"
      >Badge</span
    >
    <span
      class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset"
      >Badge</span
    >
    <span
      class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset"
      >Badge</span
    >
    <span
      class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset"
      >Badge</span
    >
    <span
      class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-700/10 ring-inset"
      >Badge</span
    >
    <span
      class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 ring-inset"
      >Badge</span
    >
    <span
      class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-700/10 ring-inset"
      >Badge</span
    >

    <!-- 
    mask 
     
    https://tailwindcss.com/docs/mask-mode#basic-example
    -->

    <div
      class="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 p-8"
    >
      <div
        class="mx-5 grid gap-10 text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400"
      >
        <div>
          <div class="relative">
            <div
              class="relative z-10 h-[500px] bg-[url(https://picsum.photos/1920/1080)] mask-b-from-black mask-b-from-10% mask-b-to-transparent bg-cover bg-center mask-alpha"
            ></div>
          </div>
          <p class="mt-3">mask-alpha</p>
        </div>
        <div>
          <div class="relative h-[3.625rem]">
            <div class="absolute top-0 left-[50%] -ml-3 flex h-12 flex-col items-center">
              <svg
                viewBox="0 0 32 34"
                class="w-7 flex-none text-white drop-shadow-sm dark:stroke-white/10"
              >
                <use href="#gradient-color-stop"></use>
              </svg>
              <div class="mt-2 h-2 w-0.5 bg-gray-900/30 dark:bg-white/30"></div>
            </div>
            <div class="absolute top-0 right-px -mr-3 flex h-12 flex-col items-center">
              <svg
                viewBox="0 0 32 34"
                class="w-7 flex-none text-black drop-shadow-sm dark:stroke-white/10"
              >
                <use href="#gradient-color-stop"></use>
              </svg>
              <div class="mt-2 h-2 w-0.5 bg-gray-900/30 dark:bg-white/30"></div>
            </div>
          </div>
          <div class="relative">
            <div
              class="relative z-10 h-24 rounded-lg bg-[url(https://picsum.photos/200/300)] mask-r-from-white mask-r-from-50% mask-r-to-black bg-cover bg-center mask-luminance"
            ></div>
            <div
              class="absolute inset-0 rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"
            ></div>
          </div>
          <p class="mt-3">mask-luminance</p>
        </div>
      </div>
    </div>

    <!-- text paragraph underline -->

    <div class="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50"><p class="mx-auto max-w-sm gap-4 p-8 text-sm/6 text-gray-900 dark:text-gray-200">I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at <a class="font-bold underline decoration-sky-500 decoration-2 dark:text-gray-200" href="#">My Company, Inc</a>. Outside of work, I like to <a class="font-bold underline decoration-pink-500 decoration-2 dark:text-gray-200" href="#">watch pod-racing</a> and have <a class="font-bold underline decoration-indigo-500 decoration-2 dark:text-gray-200" href="#">light-saber</a> fights.</p></div>
  </div>
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import logo from '@/assets/logo.png'

const navigation = [
  { name: 'Portfolio', href: '#', current: true },
  { name: 'About me', href: '#', current: false },
]
</script>
