<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm1 class="blogs">
      <v-card v-for="blog in blogs" :key="blog.id" class="text-xs-center ma-3">
        <v-img class="white--text" height="200px" :src="blog.image">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline"> {{ blog.name }} </span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Blog - {{ blog.id }} </span><br />
            <span>{{ blog.topic }}</span
            ><br />
            <span> {{ blog.story }} </span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn text color="orange" >
           <router-link :to="`/blog-details/${blog.id}`" class="isButton"> Explore </router-link>
            </v-btn>
        </v-card-actions>
      </v-card>
      <br />
      <br />
      <br />
    </v-flex>
  </v-layout>
</template>



<script>
//import { mapState } from 'vuex';
export default {
  name: "blog-list",

  computed: {
    blogs(){
      return this.$store.state.blogs;
    }
  },

  data() {
    return {
      
    };
  },

  methods: {
    // isClicked(){
    //   <router-link to="/blog-details/:id"></router-link>
    // }
  }

};
</script>


<style scoped>
.blogs {
  align-items: left;
}

.isButton{
        color: orange;
        text-decoration: unset;
    }
</style>