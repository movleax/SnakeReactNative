import Rectangle from "./Rectangle.js";

export default class CollisionBox extends Rectangle
{
    constructor(x, y, w, h)
    {
        super(x, y, w, h);
        this.hasCollided = false;
    }
    
    UpdateCollisionBoxPosition(x, y)
    {
        this.UpdateRectangle(x, y);
    }

    CheckCollision(otherCollisionBox)
    {
        if( this.position.x + this.w > otherCollisionBox.position.x && this.position.x < otherCollisionBox.position.x + otherCollisionBox.w
         && this.position.y + this.h > otherCollisionBox.position.y && this.position.y < otherCollisionBox.position.y + otherCollisionBox.h)
        {
            this.hasCollided = true;
            return true;
        }

        this.hasCollided = false;
        return false;
    }
}
