<template> 
    <p class="tweet">
        <input type="text" class="tweet__content" placeholder="Contenu du tweet" v-model="content" v-on:change="notifyParent()"/>
        <input type="text" class="tweet__publishDay" placeholder="15/11/2018" v-model="publishDate" v-on:change="notifyParent()"/>
        <input type="text" class="tweet__publishHour" placeholder="12:30" v-model="publishHour" v-on:change="notifyParent()"/>
    </p> 
</template>

<script>
export default {
  name: 'Tweet',
  props: {
      index: Number,
  },
  data: function() {
    return {
        content: '',
        publishDate: '',
        publishHour: '',
    };
  },
  methods: {
      notifyParent() {
        this.$emit('tweetchanged', this.content, this.publishDate, this.publishHour, this.index-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  height: 50px;
  background-color : #fff; 
  -webkit-appearance: none;
  box-shadow: none;
  border: 1px solid #eee;
  margin-top:10px;
  margin-right:10px;
}

.tweet {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
