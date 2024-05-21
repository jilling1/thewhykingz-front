<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-items class="mr-4"><RouterLink to="/">Home</RouterLink></v-toolbar-items>
      <v-toolbar-items><RouterLink to="/news">News list</RouterLink></v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex text-xs-center>
            <RouterView />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2024</span>
    </v-footer>
  </v-app>
</template>
