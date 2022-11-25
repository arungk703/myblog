<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h3>My Blog</h3>
         <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
      <!-- TO DO: Add white color to links -->
        <router-link :to="{name:link}" class="ChangeColor"> {{ link }} </router-link>
      </v-btn>
    </v-row>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
</template>



<script>
export default {
  name: "blog-header",
  data: () => ({
    links: ["Home", "About", "Blog", "Comments"],
  }),
};
</script>


<style scoped>
    .ChangeColor{
        color: aliceblue;
        text-decoration: unset;
    }
</style>
