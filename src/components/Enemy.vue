<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <container>
    <sprite :texture="enemyImg"></sprite>
  </container>
</template>

<script>
import enemyImg from '../assets/enemy.png';
import { reactive, onMounted, onUnmounted } from 'vue';
import { game } from '@/game';
import config from '../config';
export default {
  setup() {
    return {
      enemyImg,
    };
  },
};

export function useEnemy() {
  const enemys = reactive([]);

  // 1秒创建一个飞机

  function createEnemy() {
    setInterval(() => {
      const speed =
        typeof config.enemy.speed === 'function'
          ? config.enemy.speed()
          : config.enemy.speed;

      enemys.push({
        x: Math.floor(Math.random() * 390),
        y: -100,
        width: 308,
        height: 207,
        speed,
        HP: 2
      });
    }, 1000);
  }

  function hitEnemy(enemy, index) {
    enemy.HP --
    if (enemy.HP <= 0) {
      destroyEnemy(index)
    }
  }

  function destroyEnemy(index) {
    enemys.splice(index, 1);
  }

  function move() {
    function handleTicker() {
      enemys.forEach((enemy, index) => {
        enemy.y += enemy.speed;

        if (enemy.y > 1300) {
          enemys.splice(index, 1);
        }
      });
    }

    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.add(handleTicker);
      game.ticker.remove();
    });
  }
  createEnemy();
  move();
  return {
    enemys,
    hitEnemy
  };
}
</script>

<style></style>
