<template>
  <div class="buffer">
    <h1>{{ msg }}</h1>
    <div class="tweets-container">
      <Tweet v-for="n in nbTweets" :index="n" v-on:tweetchanged="storeTweets" />
      <input class="buffer__submit" type="submit" value="Schedule" v-on:click="programTweets()" />
    </div>
  </div>
</template>

<script>
import Tweet from './Tweet.vue'
import Twitter from '../helpers/Twitter.js'

export default {
  name: 'TwitterBuffer',
  props: {
    msg: String,
    nbTweets: Number, 
  },
  data: function() {
    return {
      tweets: [],
    }
  },
  components: {
    Tweet
  },
  methods: {
    programTweets() {  
      Twitter.programTweets(this.tweets);
    },
    storeTweets(content, publishDate, publishHour, index) {
      this.tweets[index] = {
        content,
        publishDate,
        publishHour
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.buffer__submit {
  margin-top:20px;
  background-color: #45498F;
  width: 300px;
  height: 50px; 
  cursor: pointer;
  font-size: 14px;
  color: white;
}
</style>
