<template>
  <v-app>
    <v-main>
      <BlogHeader></BlogHeader>
      <div v-for="blog in blogs" :key="blog.id">
        <div v-if="blogId == blog.id" class="text-xs-center ma-1">
          <v-img
            class="white--text"
            position="absolute"
            height="400px"
            width="700px"
            :src="blog.image"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <span class="headline"> {{ blog.name }} </span>
              </v-layout>
            </v-container>
          </v-img>
          <span class="grey--text">Blog - {{ blog.id }} </span><br />
          <span>
            <strong> {{ blog.topic }} </strong></span
          >
          <br />
          <span> {{ blog.story }} </span>
          <span> {{ blog.content }} </span>
        </div>
      </div>
      <BlogFooter></BlogFooter>
    </v-main>
  </v-app>
</template>

<script>
import BlogHeader from "./BlogHeader.vue";
import BlogFooter from "./Blog-Footer.vue";
export default {
  name: "blog-details",
  components: {
    BlogHeader,
    BlogFooter,
  },
  props: {
    blogId: {
      default: null,
    },
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
};
</script>