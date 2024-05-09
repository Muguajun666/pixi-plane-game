<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <container>
    <sprite :texture="plane"></sprite>
  </container>
</template>

<script>
import plane from '../assets/plane.png';
import { reactive } from 'vue';
import { planeMove } from '../components/planeMove';
import { planeAttack } from '../components/planeAttack';
export default {
  setup() {
    return {
      plane,
    };
  },
};

export function usePlane({ onAttack }) {
  const planeInfo = reactive({
    x: 230,
    y: 700,
    width: 258,
    height: 364,
  });

  planeMove(planeInfo);
  planeAttack(() => onAttack({ x: planeInfo.x + 100, y: planeInfo.y }));

  return {
    planeInfo,
  };
}
</script>

<style></style>
