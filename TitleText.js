
import GameSingletonInstance from "./GameSingleton";

export default class TitleText
{
    constructor()
    {
        this.width = GameSingletonInstance.width;
        this.height = GameSingletonInstance.height;
    }

    Draw(ctx)
    {
        ctx.font = "50px Arial";
        ctx.strokeStyle = "white";
        ctx.textAlign = "center"; 
        ctx.strokeText("Snake JS", this.width/2, this.height/4);

    }
}