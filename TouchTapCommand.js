import Command from "./Command.js";
import MainGame from "./MainGame.js";

export default class TouchTapCommand extends Command
{
    constructor(GameState)
    {
        super();
        this.gameState = GameState;
    }

    Execute()
    {
        this.gameState.ChangeState(new MainGame());
    }
}