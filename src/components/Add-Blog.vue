<template>
  <v-app>
    <BlogHeader></BlogHeader>
    <v-main>
      <form>
        <v-text-field
          v-model="blog.name"
          :counter="10"
          label="Blog-Topic"
          required
        ></v-text-field>

        <v-text-field v-model="blog.story" label="Blog-Headline" required></v-text-field>
        <v-text-field
          v-model="blog.content"
          :counter="10"
          label="Blog-Story"
          required
        ></v-text-field>
        <span>
          Add Image
          <input type="file" @change="imageUpload"/>
        </span>
        <v-btn class="mr-4" @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>

      <BlogFooter></BlogFooter>
    </v-main>
  </v-app>
</template>

<script>
import BlogHeader from './BlogHeader.vue'
import BlogFooter from "./Blog-Footer.vue";
export default {

   components: {
    BlogFooter,
    BlogHeader,
  },

  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },
  data() {
    return {
    blog: {
      id: 0,
      name: '',
      story: '',
      content: '',
      image: null,

    },

  }
  },

  methods: {
    imageUpload(event){
      this.blog.image = event.target.files[0];
    },
    submit() {
      this.blog.id = this.blogs.length+1;
      console.log(this.blog);
      this.blogs.push(this.blog);
    },
    clear() {
      this.name = "";
      this.story = "";
      this.content = "";
      this.image = "";
    },
  },
};
</script>