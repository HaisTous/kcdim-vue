<template>
  <input
      :value="modelValue"
      @input="updateInput"
      type="text"
      class="input"
  >
</template>

<script>
export default {
  name: "MyInput",

  props: {
    modelValue: [String, Number]
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  @apply px-0.5 py-1 mt-3 w-full border-2 border-emerald-700;
}
</style>