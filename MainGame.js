import GameState from './GameState.js';
import Swiper from "./Swiper.js";

export default class MainGame extends GameState
{
    constructor()
    {
        super();

        this.snake = new Snake(100, 100, 10, 10);

        this.foodController = new FoodController();
        this.foodController.SpawnFood(this.snake);

        this.gameOver = new GameOverText();

        this.score = new ScoreText();

        var swiper = new Swiper();
        swiper.AddSwipeCommand(new SwipeDownCommand(this.snake));
        swiper.AddSwipeCommand(new SwipeUpCommand(this.snake));
        swiper.AddSwipeCommand(new SwipeLeftCommand(this.snake));
        swiper.AddSwipeCommand(new SwipeRightCommand(this.snake));

        this.AddSwiper(keyboard);

        this.AddGameObject(this.score);
        this.AddGameObject(this.foodController);
        this.AddGameObject(this.snake);
        this.AddGameObject(this.gameOver);
    }

    Draw(ctx)
    {
        // draw background
        ctx.fillStyle = '#162802';
        ctx.fillRect(0,0,canvas.width, canvas.height);

        for(let i=0; i < this.gameObjects.length; i++)
        {
            // look for draw function before calling it
            if(this.gameObjects[i].Draw != null)
            {
                this.gameObjects[i].Draw(ctx);
            }
        }
    }

    Logic()
    {
        this.Move();
        this.CheckCollisions();
    }

    Move()
    {
        for(let i=0; i < this.gameObjects.length; i++)
        {
            // look for draw function before calling it
            if(this.gameObjects[i].Move != null)
            {
                this.gameObjects[i].Move();
            }
        }
    }

    CheckCollisions()
    {
        let cBoxes = [];

        // check snake collision with itself
        if(this.snake.CheckCollisionWithSelf())
        {
            this.gameOver.SetGameOver(true);
            this.snake.SetIsDead(true);
            setTimeout(() => { this.ChangeState(new MainMenu()); }, 3000);
        }


        for(let i=0; i < this.gameObjects.length; i++)
        {
            if(this.gameObjects[i].CheckCollision == null)
            {
                continue;
            }

            // check all other objects
            for(let k=0; k < this.gameObjects.length; k++)
            {
                if(this.gameObjects[k].CheckCollision == null)
                {
                    continue;
                }

                if(this.gameObjects[i] == this.gameObjects[k])
                {
                    continue;
                }

                cBoxes = this.gameObjects[k].GetCboxArray();

                for(let h=0; h < cBoxes.length; h++)
                {
                    if(this.gameObjects[i].CheckCollision(cBoxes[h]))
                    {
                        if(this.gameObjects[i] instanceof Snake && this.gameObjects[k] instanceof FoodController)
                        {
                            this.gameObjects[k].SpawnFood(this.gameObjects[i]);
                            this.gameObjects[i].AddBodyNode();
                            this.score.IncrememntScore();
                        }
                    }
                }
            }
        }
    }

    Cycle()
    {
        // input is already handled as a window event listener. See this.keyBoard.SetKeyBoardListener()

        this.Logic();

        this.Draw();
    }

}
