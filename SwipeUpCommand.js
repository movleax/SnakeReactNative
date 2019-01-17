import SwipeCommand from "./SwipeCommand.js";
import {swipeDirections} from "react-native-swipe-gestures";
import Directions from "./Directions.js";

export default class SwipeUpCommand extends SwipeCommand
{
    constructor(snake)
    {
        super(swipeDirections.SWIPE_UP);
        this.snake = snake;
    }

    Execute()
    {
        // Do not change direction if it would be the opposite of where we are headed
        if(this.snake.direction.Equals(Directions.Down))
        {
            return;
        }

        this.snake.ChangeDirection(Directions.Up);
    }
}