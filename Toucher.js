

export default class Toucher
{
    constructor()
    {
        this.commands = [];
        this.callBackPtr = this.CallBack_HandleInput.bind(this);
    }

    AddTouchCommand(newTouchCommand)
    {
        this.commands.push(newTouchCommand);
    }

    CallBack_HandleInput()
    {
        for(let i=0; i < this.commands.length; i++)
        {
            this.commands[i].Execute();
        }
    }
}