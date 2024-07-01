let mySprite = sprites.create(assets.image`idplayerspritecar0`, SpriteKind.Player)
mySprite.setScale(0.475, ScaleAnchor.Middle)
controller.moveSprite(mySprite, 30, 30)
mySprite.setStayInScreen(true)
let mySprite2 = sprites.create(assets.image`idasset-icecream`, SpriteKind.Food)
mySprite2.setScale(0.425, ScaleAnchor.Middle)
mySprite2.setStayInScreen(true)
mySprite2.setBounceOnWall(true)
mySprite2.setPosition(142, 104)
mySprite2.setVelocity(50, 50)
game.onUpdate(function () {
    if (mySprite.overlapsWith(mySprite2)) {
        game.gameOver(true)
        game.setGameOverMessage(true, "You Won!")
    }
})
