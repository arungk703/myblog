<template>
  <form>
    <img alt="comment" src="../assets/comment.jpg" />
    <br />
    <br />
    <h1>Give your Feedback</h1>
    <label> Review : </label>
    <select name="Rate_id" @change="onChange($event)">
      <option>Rate us</option>
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>
    <br /><br />
    <h3>You Rated us {{ this.rate }}/5</h3>
    <br /><br />
    <h1>Comment Section</h1>
    <label class="create">Reason : </label>
    <br />
    <input type="textarea" placeholder="Type something" v-modal="content" />
    <br />
    <br />
    <button v-on:click="getdata" type="button">Submit</button>
    <br />
    <br />
    <br />
  </form>
</template>
<script>
export default {
  name: "CommentRating",
  data() {
    return {
      content: "",
      error: "",
      rate: "",
      onChange(e) {
        console.log(e.target.value);
        this.rate = e.target.value;
      },
    };
  },
  methods: {
    getdata() {
      if (this.content === "" || this.content.length === 0) {
        alert("enter some text");
      }
      console.log("entered data is : ", this.content);
      this.content = "";
    },
  },
};
</script>
<style scoped>
form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  margin-left: 100px;
  margin-right: 80px;
  background-color: gainsboro;
  padding: 20px;
  border: solid 3px black;
  width: 70%;
  align-items: center;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}
</style>

