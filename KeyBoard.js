

export default class KeyBoard
{
    constructor()
    {
        this.commands = [];
        this.callBackPtr = this.CallBack_HandleInput.bind(this);
    }

    AddKeyBoardCommand(newKeyBoardCommand)
    {
        this.commands.push(newKeyBoardCommand);
    }

    SetKeyBoardListener()
    {
        window.addEventListener("keydown", this.callBackPtr);
    }

    CallBack_HandleInput(event)
    {
        if (event.defaultPrevented) 
        {
            return; // Do nothing if the event was already processed
        }
        
        for(let i=0; i < this.commands.length; i++)
        {
            if(this.commands[i].GetKey() == event.code)
            {
                this.commands[i].Execute();
                break;
            }
        }
        
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    }

    UnSetKeyBoardListener()
    {
        window.removeEventListener("keydown", this.callBackPtr);
    }
}