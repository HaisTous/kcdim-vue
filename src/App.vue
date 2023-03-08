<template>
  <header>
    <div class="header">
      <logo-kcdim/>
      <nav-bar/>
      <dark-mode/>
    </div>
  </header>
  <div class="wrapper">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import LogoKcdim from "@/components/LogoKcdim.vue";
import NavBar from "@/components/NavBar.vue";
import DarkMode from "@/components/DarkMode.vue";

export default {
  components: {
    DarkMode,
    LogoKcdim,
    NavBar,
  },
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
  },
}
</script>

<style>
html {
  @apply scroll-smooth scroll-pt-[4.5rem];
}

body {
  @apply antialiased bg-gray-200
  dark:bg-slate-800;
}

header {
  @apply sticky top-0 py-2 mb-2 border-b-2 z-50 border-gray-200 text-gray-700 bg-gray-100
  dark:text-gray-300 dark:bg-slate-900 dark:border-slate-700;
}

.header {
  @apply flex flex-row justify-between items-center flex-wrap mx-auto max-w-screen-xl px-2;
}

.wrapper {
  @apply flex flex-row items-start mx-auto max-w-screen-xl gap-2 px-2;
}

main {
  @apply w-full overflow-x-auto rounded-lg px-6 py-3 bg-gray-100 text-gray-700
  dark:bg-slate-900 dark:text-gray-300;
}

h2.title {
  @apply uppercase text-lg font-bold text-gray-900 mb-4
  dark:text-gray-100;
}

.stripped-table {
  @apply relative overflow-x-auto rounded-lg;
}

.stripped-table table {
  @apply w-full text-sm text-center text-gray-700
  dark:text-gray-300;
}

.stripped-table thead {
  @apply text-xs uppercase text-gray-900 bg-gray-300
  dark:text-gray-100 dark:bg-gray-800;
}

.stripped-table th, .stripped-table td {
  @apply px-4 py-2;
}

.stripped-table .name {
  @apply font-medium text-gray-900 whitespace-nowrap text-left
  dark:text-gray-100;
}

.stripped-table tbody tr:nth-child(even) {
  @apply border-b bg-gray-200
  dark:bg-slate-800 dark:border-gray-700;
}

.stripped-table tbody tr:nth-child(odd) {
  @apply bg-white bg-gray-100
  dark:bg-slate-700 dark:border-slate-600;
}
</style>
