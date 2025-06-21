<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
  >
    <!-- Cards header -->
    <div class="border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-xl p-2 font-medium text-slate-600">Lorem ipsum dolor sit imet</h3>
    </div>

    <!-- Project thumbnail -->
    <div class="relative">
      <img
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        alt="Project Thumbnail"
        class="w-full h-48 object-cover"
      />
    </div>

    <!-- Cards footer -->
    <div
      class="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700"
    >
      <!-- Badge category -->
      <span
        class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"
      >
        UI/UX Design
      </span>
      <!-- Button view project -->
      <button
        class="cursor-pointer rounded-md border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"
      >
        View Project
      </button>
    </div>
  </div>
</template>
