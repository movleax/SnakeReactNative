import iGame from './iGame.js';
import GameProxy from './GameProxy.js';
import GameSingletonInstance from "./GameSingleton";

export default class Game extends iGame
{
    constructor()
    {
        super();

        this.width = GameSingletonInstance.width;
        this.height = GameSingletonInstance.height;
        this.ctx = GameSingletonInstance.ctx;
        this.gameState;
        this.gameProxy = new GameProxy(this);
    }

    LoadGameState(gameState)
    {
        if(gameState == null)
        {
            return;
        }

        // assign to this.gameState
        this.gameState = gameState;

        // set this.gameState Swiper
        

    }

    HandleSwipeInput(swipe)
    {
        if(this.gameState.GetSwiper())
        {
            this.gameState.GetSwiper().CallBack_HandleInput(swipe);
        }
    }

    HandleTouchInput(touch)
    {
        if(this.gameState.GetToucher())
        {
            this.gameState.GetToucher().CallBack_HandleInput(touch);
        }
    }

    Draw()
    {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.gameState.Draw();
    }

    Logic()
    {
        this.Move();
        this.CheckCollisions();
        this.gameState.CheckStateChange(this.gameProxy);
    }

    Move()
    {
        this.gameState.Move();
    }

    CheckCollisions()
    {
        this.gameState.CheckCollisions();
    }

    Cycle()
    {
        // input is already handled as a window event listener. See this.keyBoard.SetKeyBoardListener()

        this.Logic();

        this.Draw();
    }
    
}