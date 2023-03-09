<template>
  <h2 class="title">Список учащихся</h2>
  <p class="updated_date">Последнее обновление: {{ date }}</p>
  <div class="stripped-table">
    <table>
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" class="text-left">Учащийся</th>
        <th scope="col" v-for="topic in topics" :key="topic.id">
          <a :href="topic.link" class="tooltip group">{{ topic.id }}
            <span class="tooltip-text group-hover:visible group-hover:opacity-100">{{ topic.name }}</span>
          </a>
        </th>
        <th scope="col">Всего</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(student, num) in students" :key="student.id">
        <td>{{ num + 1 }}</td>
        <th scope="row" class="name">{{ student.name }}</th>
        <td v-for="score in student.scores">{{ score }}</td>
        <td>{{ student.totalScore }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      date: '8 марта 2023 года в 11:03',
      topics: [
        {'id': 1, 'link': 'link1', 'name': 'Вывод данных'},
        {'id': 2, 'link': 'link2', 'name': 'Ввод данных'},
        {'id': 3, 'link': 'link3', 'name': 'Арифметические операции'},
        {'id': 4, 'link': 'link4', 'name': 'Условный оператор'},
        {'id': 5, 'link': 'link5', 'name': 'Операторы цикла'},
      ],
      students: [
        {'id': 1, 'name': 'Шипневский Иван, 9 кл', 'scores': [16, 15, 30, 50, 35], 'totalScore': 146},
      ],
    }
  },
}
</script>

<style scoped>
.updated_date {
  @apply mb-4 text-right text-xs
  dark:text-gray-400;
}

.tooltip {
  @apply relative inline-block;
}

.tooltip .tooltip-text {
  @apply invisible bg-gray-100 text-gray-900 text-center px-4 py-2 rounded-md right-[105%] top-[-5px]
  absolute z-auto opacity-0 transition-opacity duration-700
  dark:bg-gray-900 dark:text-gray-100;
}
</style>