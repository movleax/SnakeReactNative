import GameState from './GameState.js';
import TitleText from './TitleText.js';
import StartText from './StartText.js';
import GameProxy from "./GameProxy.js";

export default class MainMenu extends GameState
{
    constructor()
    {
        super();

        this.titleText = new TitleText();
        this.startText = new StartText();

        // var keyboard = new KeyBoard();
        // keyboard.AddKeyBoardCommand(new KeyBoardSpaceCommand(this));

        // this.AddKeyBoard(keyboard);

        this.AddGameObject(this.titleText);
        this.AddGameObject(this.startText);
    }

    Draw()
    {
        // draw background
        this.ctx.fillStyle = '#162802';
        this.ctx.fillRect(0, 0, this.width, this.height);

        for(let i=0; i < this.gameObjects.length; i++)
        {
            // look for draw function before calling it
            if(this.gameObjects[i].Draw != null)
            {
                this.gameObjects[i].Draw(this.ctx);
            }
        }
    }

    Move() { }

    Logic() { }

    CheckCollisions() { }

    Cycle()
    {
        // input is already handled as a window event listener. See this.keyBoard.SetKeyBoardListener()
        this.Draw();
    }

}
