import Vector2D from "./Vector2D.js";
import CollisionBox from "./CollisionBox.js";

export default class BodyNode
{
    constructor(x, y, w, h, direction)
    {
        this.cBox = new CollisionBox(x, y, w, h);
        this.position = new Vector2D(x, y);
        this.direction = direction;
        this.node = null;
    }

    AddBodyNode(newNode)
    {
        this.node = newNode;
    }

    SetPosition(newPosition)
    {
        this.position = newPosition;
        this.cBox.UpdateCollisionBoxPosition(this.position.x, this.position.y);
    }

    GetPosition()
    {
        return this.position;
    }

    SetDirection(newDirection)
    {
        this.direction = newDirection;
    }

    GetDirection()
    {
        return this.direction;
    }

    Draw(ctx)
    {
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, this.position.y, snakeNodeSquare.x, snakeNodeSquare.y);
    }

    CheckCollision(otherCollisionBox)
    {
        return this.cBox.CheckCollision(otherCollisionBox);
    }
}