export default class GameOverText
{
    constructor()
    {
        this.display = false;
    }

    Draw(ctx)
    {
        if(this.display)
        {
            ctx.font = "50px Arial";
            ctx.strokeStyle = "white";
            ctx.textAlign = "center"; 
            ctx.strokeText("Game Over", canvas.width/2, canvas.height/2);
        }
    }

    SetGameOver(isShown)
    {
        this.display = isShown;
    }
}