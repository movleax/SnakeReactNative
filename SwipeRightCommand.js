import SwipeCommand from "./SwipeCommand.js";
import {swipeDirections} from "react-native-swipe-gestures";
import Directions from "./Directions.js";

export default class SwipeRightCommand extends SwipeCommand
{
    constructor(snake)
    {
        super(swipeDirections.SWIPE_Right);
        this.snake = snake;
    }

    Execute()
    {
        // Do not change direction if it would be the opposite of where we are headed
        if(this.snake.direction.Equals(Directions.Left))
        {
            return;
        }

        this.snake.ChangeDirection(Directions.Right);
    }
}