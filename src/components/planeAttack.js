import { onMounted, onUnmounted } from 'vue';

export function planeAttack(attack) {

  function handleAttack(e) {
    if (e.code === 'Space') {
      attack && attack()
    }
  }

  onMounted(() => {
    window.addEventListener('keyup', handleAttack);
  });

  onUnmounted(() => {
    window.removeEventListener('keyup', handleAttack);
  });
}