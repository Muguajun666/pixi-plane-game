import { createRenderer } from 'vue';
import App from './App.vue';
import { Application, Graphics } from 'pixi.js';

// init game
const game = new Application({
  width: 500,
  height: 500,
});

document.body.append(game.view);

const renderer = createRenderer({
  createElement(type) {
    let element;
    if (type === 'rect') {
      element = new Graphics();
      element.beginFill(0xff0000);
      element.drawRect(0, 0, 50, 50);
      element.endFill();
    }
    return element;
  },
  insert(el, parent) {
    parent.addChild(el)
  },
  // setElementText(node, text) {
  // }
});

renderer.createApp(App).mount(game.stage)