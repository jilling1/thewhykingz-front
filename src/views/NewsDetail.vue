<template>
  <v-row>
    <v-card v-if="news">
      <template v-slot:title> {{ news.title + ' - ' + news.status }} </template>

      <template v-slot:subtitle> {{ news.short_description }} </template>

      <template v-slot:text>
        {{ news.full_description }}
      </template>
      <template v-slot:actions>
        <v-btn text="Change status" @click="changeStatus"></v-btn>
      </template>
    </v-card>
  </v-row>
</template>

<script setup>
import { getNews, updateNewsStatus } from '../services/apiServices.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const news = ref(null)

const changeStatus = async () => {
  try {
    const response = await updateNewsStatus({ status: 'hidden' }, route.params.id)
    news.value = response.data.data
  } catch (err) {
    console.log(err)
  }
}

const fetchNews = async () => {
  try {
    const response = await getNews(route.params.id)
    news.value = response.data.data
  } catch (err) {
    console.log(err)
  }
}

onMounted(fetchNews)
</script>
