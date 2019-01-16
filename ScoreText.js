export default class ScoreText
{
    constructor()
    {
        this.score = 0;
    }

    IncrememntScore()
    {
        this.score++;
    }

    Draw(ctx)
    {
        ctx.font = "18px Arial";
        ctx.strokeStyle = "white";
        ctx.textAlign = "center"; 
        ctx.strokeText("Score: " + this.score, canvas.width/2, canvas.height/16);
    }
}