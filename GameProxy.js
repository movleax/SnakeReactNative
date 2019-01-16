export default class GameProxy
{
    constructor(game)
    {
        this.game = game;
    }

    LoadGameState(gameState)
    {
        this.game.LoadGameState(gameState);
    }
}