<template>
  <main>
    <div v-for="section in sections" key="{{ section.id }}">
      <h2
          :data-section="section.link"
          :id="section.link"
          class="title section">
        {{ section.name }}
      </h2>
      <div class="event" v-for="event in section.events" key="{{ event.id }}">
        <p class="event__description">{{ event.description }}</p>
        <div class="event__results">
          <a :href="event.resultsLink" target="_blank">Результаты:</a>
          <ul>
            <li v-for="winner in event.winners">{{ winner }}</li>
          </ul>
        </div>
        <div class="event__diplomas">
          <a
              :href="diploma"
              target="_blank"
              v-for="diploma in event.diplomas">
            <img src="/src/assets/diplomas/dayneko-04112022.webp" alt="Диплом">
          </a>
        </div>
      </div>
    </div>
  </main>
  <side-bar v-bind:sections="sections"/>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "Home",
  components: {SideBar},
  data() {
    return {
      sections: [
        {
          id: 1,
          name: '2022-2023 гг.',
          link: '2022-2023',
          events: [
            {
              id: 1,
              description: '23-24 февраля 2023 года состоялся "Февральский Кубок" для учеников 3-7 класса.',
              resultsLink: 'https://docs.google.com/spreadsheets/d/1tmeTKVw5BFq36yrvucaCbDSXnwKCvm6G1GV6UEWW-U8/edit#gid=0',
              winners: [
                'Смолечков Матвей - Диплом 3 степени',
                'Воронов Прохор - Сертификат участника',
                'Трифонов Ярослав - Сертификат участника',
              ],
              diplomas: [
                '/src/assets/smolechkov-24022023.webp',
                '/src/assets/voronov-24022023.webp',
                '/src/assets/trifonov-2402023.webp'
              ],
            },
          ],
        },
      ]
    }
  }
}
</script>

<style scoped>
.event {
  @apply border-b-2 border-gray-300 mb-4
  dark:border-gray-700;
}

.event__description {
  @apply italic;
}

.event__results {
  @apply my-4;
}

.event__results a {
  @apply hover:text-red-500;
}

.event__results ul {
  @apply font-bold;
}

.event__diplomas {
  @apply flex flex-row justify-center gap-4 flex-wrap my-4;
}

.event__diplomas a {
  @apply hover:scale-110 ease-linear duration-300;
}

.event__diplomas img {
  @apply w-32 h-auto;
}
</style>