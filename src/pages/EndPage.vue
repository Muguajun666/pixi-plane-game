<template>
  <container>
    <sprite :texture="endPage"></sprite>
    <sprite :texture="restartBtn" x="227" y="510" @click="startGame" :interactive="true"></sprite>
  </container>
</template>

<script>
import endPage from '../assets/end_page.jpg'
import restartBtn from '../assets/restartBtn.png'
export default {
  setup(props, { emit }) {
    const startGame = () => {
      emit('change-page', 'GamePage')
    }

    return {
      endPage,
      restartBtn,
      startGame
    }
  }
};
</script>

<style>
</style>
