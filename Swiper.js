

export default class Swiper
{
    constructor()
    {
        this.commands = [];
        this.callBackPtr = this.CallBack_HandleInput.bind(this);
    }

    AddSwipeCommand(newSwipeCommand)
    {
        this.commands.push(newSwipeCommand);
    }

    CallBack_HandleInput(Swipe)
    {
        for(let i=0; i < this.commands.length; i++)
        {
            if(this.commands[i].GetSwipe() == Swipe)
            {
                this.commands[i].Execute();
                break;
            }
        }
    }
}