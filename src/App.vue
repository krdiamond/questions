<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg=""/>

  <div 
    class="card"
    @click="flipCard"
  >
    <div class="content" :class="{ flipped: isFlipped }">
      <div class="front">
        Front
      </div>
      <div class="back" @click.stop="flipCardBack">
        Back!
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      isFlipped: false
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
    flipCardBack(event) {
      this.isFlipped = false;
    }
  }
}
</script>

<style scoped>
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  margin: -150px;
  float: left;
  perspective: 500px;
  cursor: pointer; /* Add cursor pointer for handheld devices */
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.card:hover .content {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  line-height: 300px;
  color: #03446A;
  text-align: center;
  font-size: 60px;
  border-radius: 5px;
  backface-visibility: hidden;
}

.back {
  background: #03446A;
  color: white;
  transform: rotateY(180deg);
}
</style>
