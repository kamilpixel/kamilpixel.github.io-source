<template>
  <div>
    <div class="flex justify-center items-center pt-8">
      <div class="justify-center text-gray-500 pb-2">
        <div class="text-center font-semibold tracking-tight text-pretty">
          <img
            class="mx-auto h-24 w-24 rounded-full shadow-lg shadow-slate-500/50 dark:shadow-slate-600/50 mb-4 ring-1 ring-slate-300 dark:ring-slate-700 dark:ring-slate-400"
            :src="profileImage"
          />

          <div class="flex flex-col">
            <strong class="text-3xl font-medium text-gray-900 dark:text-gray-200">Kamil</strong
            ><span class="text-xl font-medium text-gray-500 dark:text-gray-400"
              >Senior Frontend Developer</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="pb-4">
      <div
        class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-lg text-gray-500 dark:text-gray-400 pt-4"
      >
        <p class="indent-8 pb-4 text-wrap">
          Hi, I'm Kamil a Frontend Developer based in Kuala Lumpur, Malaysia, with over 10 years of
          experience building clean, responsive, and user-friendly web applications. I specialize in
          Vue.js, Nuxt.js (SSR), and modern frontend ecosystems. From creating dynamic interfaces
          with Tailwind CSS and Bootstrap, to managing state with Pinia and Vuex, I've helped build
          scalable products in agile environments across both startups and enterprise teams.
        </p>
        <p class="indent-8 pb-4 text-wrap">
          I also have hands-on experience with Vite, TypeScript, and frontend testing tools like
          Vitest. While Vue is my main focus, I'm also familiar with React, Next.js, and even
          AngularJS from earlier projects. On the UI/UX side, I care deeply about responsive design,
          design systems, and pixel-perfect execution. I enjoy translating Figma mockups into real
          code and collaborating closely with designers.
        </p>
        <p class="indent-8 pb-4 text-wrap">
          My workflow is powered by tools like Git, Postman, Storybook, and platforms like GitHub,
          GitLab, and Bitbucket. I'm comfortable with shared hosting deployments and have basic
          cloud experience using AWS (S3, Amplify) and Azure (Storage, B2C). I'm also passionate
          about mentoring junior developers, advocating for clean code, and contributing to better
          team practices. Let's connect on
          <a
            class="underline underline-offset-4 decoration-2 decoration-indigo-500 text-indigo-400 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-600 font-bold"
            href="https://linkedin.com/in/kamilkahar87"
            target="_blank"
            >LinkedIn</a
          >
          or see what I'm building on
          <a
            class="underline underline-offset-4 decoration-2 decoration-indigo-500 text-indigo-400 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-600 font-bold"
            href="https://github.com/kamilpixel"
            target="_blank"
            >GitHub</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProfileImage } from '@/composables/useProfileImage.ts';
const { profileImage } = useProfileImage();
const a = 'testing';
const b = 'test2';
</script>
