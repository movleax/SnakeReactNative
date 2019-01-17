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
        this.swiper;
        this.toucher;
        this.stateHasChanged = false;
        this.currentState;
    }

    GetGameObjects()
    {
        return this.gameObjects;
    }

    GetSwiper()
    {
        return this.swiper;
    }

    AddSwiper(newSwiper)
    {
        this.swiper = newSwiper;
    }


    GetToucher()
    {
        return this.toucher;
    }

    AddToucher(newToucher)
    {
        this.toucher = newToucher;
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
