export default {
  enemy: {
    // speed: 10,
    speed() {
      return Math.floor(Math.random() * 7) + 3
    }
  },
  plane: {
    bullet: {
      speed: 10
    }
  }
};
