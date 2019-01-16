export default class iGame
{
    constructor()
    {

    }

    Draw()
    {
        throw "Draw() must be implemented";
    }

    Logic()
    {
        throw "Logic() must be implemented";
    }

    Move()
    {
        throw "Move() must be implemented";
    }

    CheckCollisions()
    {
        throw "CheckCollisions() must be implemented";
    }

    Cycle()
    {
        throw "Cycle() must be implemented";
    }

    CheckStateChange(gameProxy)
    {
        throw "CheckStateChange(gameProxy) must be implemented";
    }
}