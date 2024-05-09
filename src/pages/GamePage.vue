<template>
  <container>
    <Map></Map>
    <Plane :x="planeInfo.x" :y="planeInfo.y"></Plane>
    <Enemy
      v-for="(enemy, index) in enemys"
      :key="index"
      :x="enemy.x"
      :y="enemy.y"
    ></Enemy>
    <Bullet
      v-for="(bullet, index) in bullets"
      :key="index"
      :x="bullet.x"
      :y="bullet.y"
    ></Bullet>
  </container>
</template>

<script>
import Map from '../components/Map.vue';
import Plane, { usePlane } from '../components/Plane.vue';
import Enemy, { useEnemy } from '../components/Enemy.vue';
import Bullet, { useBullet } from '../components/Bullet.vue';
import { useFighting } from './fighting';
export default {
  components: { Map, Plane, Enemy, Bullet },

  setup(props, { emit }) {
    const { bullets, addBullet, destroyBullet } = useBullet();
    const { planeInfo } = usePlane({
      onAttack(position) {
        addBullet(position);
      },
    });
    const { enemys, hitEnemy } = useEnemy();
    const gameover = () => {
      emit('change-page', 'EndPage');
    };

    useFighting({ enemys, bullets, planeInfo, gameover, destroyBullet, hitEnemy });

    return {
      planeInfo,
      enemys,
      bullets,
    };
  },
};
</script>

<style></style>
