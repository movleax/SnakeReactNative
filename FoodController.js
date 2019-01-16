import Food from "./Food.js";

export default class FoodController
{
    constructor()
    {
        this.foodPellet;
    }

    CheckCollision(otherCollisionBox)
    {
        if(this.foodPellet == null)
        {
            return false;
        }

        return this.foodPellet.CheckCollision(otherCollisionBox);
    }

    SpawnFood(snake)
    {
        if(this.foodPellet == null)
        {
            this.foodPellet = new Food(0, 0, snakeNodeSquare.x, snakeNodeSquare.y);
        }

        let newX = Math.round((Math.random() * (canvas.width - this.foodPellet.cBox.w))/10)*10;
        let newY = Math.round((Math.random() * (canvas.height - this.foodPellet.cBox.h))/10)*10;
        let newPosition = new Vector2D(newX, newY);

        this.foodPellet.SetPosition(newPosition);

        while(snake.CheckCollision(this.foodPellet.cBox))
        {
            newX = Math.round((Math.random() * canvas.width)) - this.foodPellet.cBox.w;
            newY = Math.round((Math.random() * canvas.height)) - this.foodPellet.cBox.h;
            newPosition = new Vector2D(newX, newY);
            this.foodPellet.SetPosition(newPosition);
        }
    }

    Draw(ctx)
    {
        this.foodPellet.Draw(ctx);
    }

    GetCboxArray()
    {
        return [this.foodPellet.cBox];
    }
}