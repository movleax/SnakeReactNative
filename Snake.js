import BodyNode from "./BodyNode.js";
import Vector2D from "./Vector2D.js"

export default class Snake
{
    constructor(x, y, w, h)
    {
        this.direction = new Vector2D(1, 0);
        this.velocity = new Vector2D(this.direction.x*snakeNodeSquare.x, this.direction.y*snakeNodeSquare.y); 
        this.position = new Vector2D(x, y);
        this.isDead = false;

        this.head = new BodyNode(x, y, w, h, this.direction);
        this.AddBodyNode();
        this.AddBodyNode();
    }

    ChangeDirection(newDirection)
    {
        this.direction = newDirection;
        this.velocity = new Vector2D(this.direction.x*snakeNodeSquare.x, this.direction.y*snakeNodeSquare.y);
    }

    AddBodyNode()
    {
        // find the last node in the Snake's body
        let lastNode = this.head;
        while(lastNode.node != null)
        {
            lastNode = lastNode.node;
        }

        // create the new body node
        let bodyNode = new BodyNode(lastNode.position.x, lastNode.position.y, snakeNodeSquare.x, snakeNodeSquare.y, lastNode.direction);

        // calculate the position vector behind lastNode
        let oppositeDirection = lastNode.direction.GetVector2D();
        oppositeDirection = oppositeDirection.Scale(-1);
        let offsetVector = new Vector2D(oppositeDirection.x*snakeNodeSquare.x, oppositeDirection.y*snakeNodeSquare.y);
        let behindNodePosition = lastNode.position.AddVector(offsetVector);

        // Set the new body node to be behind the last node
        bodyNode.position = behindNodePosition;

        // set the last node to this newly created bodynode
        lastNode.node = bodyNode;
    }

    Draw(ctx)
    {
        let traverseNode = this.head;
        while(traverseNode != null)
        {
            traverseNode.Draw(ctx);
            traverseNode = traverseNode.node;
        }
    }

    SetIsDead(isDead)
    {
        this.isDead = isDead;
    }

    Move()
    {
        if(this.isDead)
        {
            return;
        }

        // update the Snake class' position
        this.position = this.position.AddVector(this.velocity);

        // these will be used to updated the snake's body node's positions
        let newPosition = this.position;
        let oldPosition;

        // these will be used to update the snake's body node's directions
        let newDirection = this.direction;
        let oldDirection;

        let traverseNode = this.head;
        while(traverseNode != null)
        {
            oldPosition = traverseNode.GetPosition();
            oldDirection = traverseNode.GetDirection();
            
            traverseNode.SetPosition(newPosition);
            traverseNode.SetDirection(newDirection);

            newPosition = oldPosition;
            newDirection = oldDirection;

            // traverse to next node
            traverseNode = traverseNode.node;
        }
    }

    GetCboxArray()
    {
        let cBoxes = [];
        let traverseNode = this.head;
        while(traverseNode != null)
        {
            cBoxes.push(traverseNode.cBox);
            traverseNode = traverseNode.node;
        }

        return cBoxes;
    }

    CheckCollisionWithSelf()
    {
        let cBoxes = this.GetCboxArray();

        for(let i=0; i < cBoxes.length; i++)
        {
            for(let k=0; k < cBoxes.length; k++)
            {
                if(cBoxes[i] == cBoxes[k])
                {
                    continue;
                }

                if(cBoxes[i].CheckCollision(cBoxes[k]))
                {
                    return true;
                }
            }
        }

        return false;
    }

    CheckCollision(otherCollisionBox)
    {
        let cBoxes = this.GetCboxArray();

        for(let i=0; i < cBoxes.length; i++)
        {
            if(cBoxes[i].CheckCollision(otherCollisionBox))
            {
                return true;
            }
        }

        return false;
    }
}
