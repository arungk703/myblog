<template>
    <v-app>
    <v-main>
        <BlogHeader></BlogHeader>
        <BlogList></BlogList>
        <BlogFooter></BlogFooter>
    </v-main>
  </v-app>
</template>



<script>
import BlogList from './Blog-List.vue'
import BlogFooter from './Blog-Footer.vue'
import BlogHeader from './BlogHeader.vue'

export default {
  name: 'home-page',

  components: {
    BlogList,
    BlogFooter,
    BlogHeader,
  },
};
</script>
