<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <container>
    <sprite :texture="bulletImg"></sprite>
  </container>
</template>

<script>
import bulletImg from '../assets/bullet.png';
import { reactive, onMounted, onUnmounted } from 'vue';
import { game } from '@/game';
import config from '@/config';
export default {
  setup() {
    return {
      bulletImg,
    };
  },
};

export function useBullet() {
  const bullets = reactive([]);

  function addBullet(position) {
    bullets.push({ ...position, width: 61, height: 99 });
  }

  function destroyBullet(index) {
    bullets.splice(index, 1);
  }

  function move() {
    function handleTicker() {
      bullets.forEach((bullet, index) => {
        bullet.y -= config.plane.bullet.speed;

        if (bullet.y <= -100) {
          bullets.splice(index, 1);
        }
      });
    }

    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
  }

  move();

  return {
    bullets,
    addBullet,
    destroyBullet,
  };
}
</script>

<style></style>
