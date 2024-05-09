<template>
  <container>
    <sprite :texture="startPage"></sprite>
    <sprite :texture="startBtn" x="227" y="510" @click="startGame" :interactive="true"></sprite>
  </container>
</template>

<script>
import startPage from '../assets/start_page.jpg'
import startBtn from '../assets/startBtn.png'
export default {
  setup(props, { emit }) {
    const startGame = () => {
      emit('change-page', 'GamePage')
    }

    return {
      startPage,
      startBtn,
      startGame
    }
  }
};
</script>

<style>
</style>
