<template>
  <section class="cta-wrap">
    <p class="cta-eyebrow">Also my work</p>
    <h2 class="cta-heading font-bold text-slate-700 dark:text-gray-200">
      I also design <em>interfaces people enjoy.</em>
    </h2>
    <p class="cta-sub text-gray-600 dark:text-gray-400">
      Dedicated space for my UI/UX work — case studies, process, and design thinking.
    </p>
    <a
      href="https://kamilpixel-design.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      class="underline underline-offset-4 decoration-2 decoration-indigo-500 text-indigo-400 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-600 font-bold"
    >
      Visit design portfolio <span>→</span>
    </a>
  </section>
</template>

<style lang="css" scoped>
.cta-wrap {
  padding: 80px 24px;
  text-align: center;
  border-top: 1px solid #e5e5e5;
}
.cta-eyebrow {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #9ca3af;
  margin: 0 0 20px;
}
.cta-heading {
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 700;
  margin: 0 0 12px;
}
.cta-heading em {
  font-style: italic;
  font-weight: 400;
}
.cta-sub {
  font-size: 14px;
  /* color: #6b7280; */
  margin: 0 auto 36px;
  max-width: 380px;
}
.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px solid #d1d5db;
  padding-bottom: 2px;
  transition: gap 0.2s ease;
}
.cta-link:hover {
  gap: 14px;
}
</style>
