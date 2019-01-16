import Vector2D from "./Vector2D.js"
import CollisionBox from "./CollisionBox.js"

export default class Food
{
    constructor(x, y, w, h)
    {
        this.position = new Vector2D(x, y);
        this.cBox = new CollisionBox(x, y, w, h);
    }

    SetPosition(newPosition)
    {
        this.position = newPosition;
        this.cBox.UpdateCollisionBoxPosition(this.position.x, this.position.y);
    }

    Draw(ctx)
    {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.position.x, this.position.y, snakeNodeSquare.x, snakeNodeSquare.y);
    }

    CheckCollision(otherCollisionBox)
    {
        return this.cBox.CheckCollision(otherCollisionBox);
    }
}