<template>
  <v-row>
    <v-card v-for="item in newsList" :key="item.id + '-news-item'" class="ma-2">
      <template v-slot:title>
        <RouterLink :to="`/news/${item.id}`">{{ item.title }} </RouterLink></template
      >
      <template v-slot:subtitle> {{ item.short_description }}</template>
    </v-card>
  </v-row>
</template>

<script setup>
import { getAllNews } from '../services/apiServices.js'
import { ref, onMounted } from 'vue'

const newsList = ref(null)

const fetchNewsList = async () => {
  try {
    const response = await getAllNews()
    newsList.value = response.data.data
  } catch (err) {
    console.log(err)
  }
}

onMounted(fetchNewsList)
</script>
