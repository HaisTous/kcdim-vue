<template>
  <main>
    <h2 class="title">Список тем</h2>
    <ol>
      <li v-for="topic in topics" :key="topic.id">
        <router-link :to="`/topics/${topic.id}`">
          {{ topic.name }}
        </router-link>
      </li>
    </ol>
  </main>
</template>

<script>

export default {
  name: "TopicsList",
  data() {
    return {
      topics: [
        {id: 1, name: 'Значения и типы'},
        {id: 2, name: 'Переменная и инструкция присваивания'},
      ]
    }
  }
}
</script>

<style scoped>

</style>