import { hitTestObject } from '@/utils';
import { onMounted, onUnmounted } from 'vue';
import { game } from '../game';

export function useFighting({
  enemys,
  bullets,
  planeInfo,
  gameover,
  destroyBullet,
  hitEnemy,
}) {
  function handleTicker() {
    // 我方飞机和敌方飞机的碰撞
    enemys.forEach((enemy) => {
      if (hitTestObject(planeInfo, enemy)) {
        gameover();
      }
    });
    // 我方子弹和敌方飞机的碰撞
    enemys.forEach((enemy, eIndex) => {
      bullets.forEach((bullet, bIndex) => {
        if (hitTestObject(bullet, enemy)) {
          hitEnemy(enemy, eIndex);
          destroyBullet(bIndex);
        }
      });
    });
  }

  onMounted(() => {
    game.ticker.add(handleTicker);
  });

  onUnmounted(() => {
    game.ticker.remove(handleTicker);
  });
}
