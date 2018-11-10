<template> 
    <div class="tweet">
        <input type="text" class="tweet__content" placeholder="Contenu du tweet" v-model="content" v-on:change="notifyParent()"/>
        <p class="tweet__time">
            <span class="ec ec-date"></span> <input type="date" class="tweet__time-publishDay" placeholder="15/11/2018" v-model="publishDate" v-on:change="notifyParent()"/>
            <span class="ec ec-alarm-clock"></span> <input type="time" class="tweet__time-publishHour" placeholder="12:30" v-model="publishHour" v-on:change="notifyParent()"/>
        </p>
    </div> 
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

.ec {
    margin-top: 10px;
    margin-right: 5px;
}

.tweet__content {
    width: 100%;
    padding-left: 10px;
}

.tweet {
    width: 50%;
    margin: 0 auto; 
    border-bottom: 1px solid pink;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #eee;
    padding: 25px 50px;
}

.tweet__time {
    display: flex;
    align-items: center;
    justify-content: center;
}

.tweet__time input {
    height: 30px;
}

</style>
