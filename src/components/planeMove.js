import { onMounted, onUnmounted } from 'vue';
import { game } from '../game'

export function planeMove(planeInfo) {
  const speed = 10;
  let leftAndRightkeyCode = 0b00
  let upAndDownkeyCode = 0b00

  function handleKeyup(e) {
    if (e.code === 'ArrowUp' || e.code === 'ArrowDown'){
      if (e.code === 'ArrowUp') {
        upAndDownkeyCode &= 0b10
      } else {
        upAndDownkeyCode &= 0b01
      }
    }
    if (e.code === 'ArrowLeft' || e.code === 'ArrowRight'){
      if (e.code === 'ArrowLeft') {
        leftAndRightkeyCode &= 0b10
      } else {
        leftAndRightkeyCode &= 0b01
      }
    }
  }

  function handleKeydown(e) {
    if (e.code === 'ArrowUp' || e.code === 'ArrowDown'){
      if (e.code === 'ArrowUp') {
        upAndDownkeyCode |= 0b01
      } else {
        upAndDownkeyCode |= 0b10
      }
    }
    if (e.code === 'ArrowLeft' || e.code === 'ArrowRight'){
      if (e.code === 'ArrowLeft') {
        leftAndRightkeyCode |= 0b01
      } else {
        leftAndRightkeyCode |= 0b10
      }
    }
  }

  function handleTicker() {
    if (upAndDownkeyCode === 0b01 || upAndDownkeyCode === 0b10){
      if (upAndDownkeyCode === 0b01) {
        if (planeInfo.y - speed >= -50) {
          planeInfo.y -= speed;
        }
      } else {
        if (planeInfo.y + speed <= 750) {
          planeInfo.y += speed;
        }
      }
    }
    if (leftAndRightkeyCode === 0b01 || leftAndRightkeyCode === 0b10){
      if (leftAndRightkeyCode === 0b01) {
        if (planeInfo.x - speed >= 0) {
          planeInfo.x -= speed;
        }
      } else {
        if (planeInfo.x + speed <= 440) {
          planeInfo.x += speed;
        }
      }
    }
  }

  onMounted(() => {
    game.ticker.add(handleTicker)
    window.addEventListener('keyup', handleKeyup);
    window.addEventListener('keydown', handleKeydown);
  });

  onUnmounted(() => {
    game.ticker.remove(handleTicker)
    window.removeEventListener('keyup', handleKeyup);
    window.removeEventListener('keydown', handleKeydown);
  });
}
