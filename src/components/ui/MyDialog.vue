<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDialog",

  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.dialog{
  @apply top-0 bottom-0 left-0 right-0 flex fixed bg-black/[0.5];
}
.dialog__content {
  @apply m-auto bg-white rounded-2xl min-h-[50px] min-w-[300px] p-5;
}
</style>