<template>
  <container>
    <StartPage
      v-if="currentPage == 'StartPage'"
      @change-page="handleChangePage"
    ></StartPage>
    <GamePage
      v-else-if="currentPage == 'GamePage'"
      @change-page="handleChangePage"
    ></GamePage>
    <EndPage
      v-else-if="currentPage == 'EndPage'"
      @change-page="handleChangePage"
    ></EndPage>
  </container>
</template>

<script>
import StartPage from './pages/StartPage.vue';
import GamePage from './pages/GamePage.vue';
import EndPage from './pages/EndPage.vue';
import { ref } from 'vue';
export default {
  name: 'App',
  components: { StartPage, GamePage, EndPage },

  setup() {
    const currentPage = ref('StartPage');

    function handleChangePage(pageName) {
      currentPage.value = pageName;
    }
    return {
      currentPage,
      handleChangePage,
    };
  },
};
</script>

<style>
body {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
