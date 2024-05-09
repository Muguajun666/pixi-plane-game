import { Application } from 'pixi.js';

// init game
export const game = new Application({
  width: 700,
  height: 1080
});

document.body.append(game.view);

export function getRootContainer() {
  return game.stage
}