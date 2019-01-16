import iGame from './iGame.js';
import GameSingletonInstance from "./GameSingleton";

export default class GameState extends iGame
{
    constructor()
    {
        super();
        
        this.width = GameSingletonInstance.width;
        this.height = GameSingletonInstance.height;
        this.ctx = GameSingletonInstance.ctx;

        this.gameObjects = [];
        this.keyBoard;
        this.stateHasChanged = false;
        this.currentState;
    }

    GetGameObjects()
    {
        return this.gameObjects;
    }

    GetKeyBoard()
    {
        return this.keyBoard;
    }

    AddKeyBoard(newKeyBoard)
    {
        this.keyBoard = newKeyBoard;
    }

    AddGameObject(obj)
    {
        this.gameObjects.push(obj);
    }

    ChangeState(newState)
    {
        this.stateHasChanged = true;
        this.currentState = newState;
    }

    CheckStateChange(gameProxy)
    {
        if(this.stateHasChanged)
        {
            gameProxy.LoadGameState(this.currentState);
            this.stateHasChanged = false;
        }
    }
}
