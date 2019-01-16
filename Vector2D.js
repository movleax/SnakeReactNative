
export default class Vector2D
{
    constructor(x, y)
    {
        this.x = x == undefined ? 0 : x;
        this.y = y == undefined ? 0 : y;

        this.rads = Math.atan2(y, x);
    }

    GetVector2D()
    {
        return new Vector2D(this.x, this.y);
    }

    UpdateVector(x, y)
    {
        this.x = x;
        this.y = y;

        this.rads = Math.atan2(y, x);
    }

    AddVector(vector)
    {
        let newX = this.x + vector.x;
        let newY = this.y + vector.y;

        return new Vector2D(newX, newY);
    }

    GetDegrees()
    {
        return this.rads * 180 / Math.PI;
    }

    RotateAroundOrigin(degrees)
    {
        let newRads = (degrees  * Math.PI / 180);

        // perform the rotation
        let rotatedX = Math.round(Math.cos(newRads) * (this.x) - Math.sin(newRads) * (this.y));
        let rotatedY = Math.round(Math.sin(newRads) * (this.x) + Math.cos(newRads) * (this.y));
    
        return new Vector2D(rotatedX, rotatedY);
    }

    Scale(scale)
    {
        return new Vector2D(scale*this.x, scale*this.y);
    }

    RotateAroundPoint(point, degrees)
    {
        newRads = (degrees  * Math.PI / 180);

        // perform the rotation
        let rotatedX = Math.cos(newRads) * (this.x - point.x) - Math.sin(newRads) * (this.y - point.y) + point.x;
        let rotatedY = Math.sin(newRads) * (this.x - point.x) + Math.cos(newRads) * (this.y - point.y) + point.y;
        
        return new Vector2D(rotatedX, rotatedY);
    }

    Equals(otherVector)
    {
        return this.x == otherVector.x && this.y == otherVector.y;
    }

} 

export const snakeNodeSquare = new Vector2D(10, 10);
