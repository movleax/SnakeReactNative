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

        // disable current state keyboard
        if(this.gameState != null && this.gameState.GetKeyBoard() != null)
        {
          //  this.gameState.keyBoard.UnSetKeyBoardListener();
        }

        // assign to this.gameState
        this.gameState = gameState;

        // set this.gameState keyboard as active
        //this.gameState.keyBoard.SetKeyBoardListener();
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