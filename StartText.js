import GameSingletonInstance from "./GameSingleton";

export default class StartText
{
    constructor()
    {
        this.width = GameSingletonInstance.width;
        this.height = GameSingletonInstance.height;
    }

    Draw(ctx)
    {
        ctx.font = "40px Arial";
        ctx.strokeStyle = "white";
        ctx.textAlign = "center"; 
        ctx.strokeText("Press Space to Start", this.width/2, this.height - this.height/2);
    }
}