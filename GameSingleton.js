

class GameSingleton
{

  constructor()
  {
    
    this.instance = this;
  }

  Setup(width, height, ctx)
  {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
  }

}

var GameSingletonInstance = new GameSingleton();
//Object.freeze(GameSingletonInstance);


export default GameSingletonInstance;