import SwipeCommand from "./SwipeCommand.js";
import {swipeDirections} from "react-native-swipe-gestures";
import Directions from "./Directions.js";

export default class SwipeDownCommand extends SwipeCommand
{
    constructor(snake)
    {
        super(swipeDirections.SWIPE_Down);
        this.snake = snake;
    }

    Execute()
    {
        // Do not change direction if it would be the opposite of where we are headed
        if(this.snake.direction.Equals(Directions.Up))
        {
            return;
        }

        this.snake.ChangeDirection(Directions.Down);
    }
}