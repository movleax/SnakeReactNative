import Command from "./Command.js";

export default class SwipeCommand extends Command
{
    constructor(swipe)
    {
        super();
        this.swipe = swipe;
    }

    GetSwipe()
    {
        return this.swipe;
    }
}