<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
.btn {
  @apply border-2 border-emerald-700 text-emerald-700 px-4 py-2;
}
</style>