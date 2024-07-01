info.setScore(0)
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
let mySprite3 = sprites.create(assets.image`idasset-icecream`, SpriteKind.Food)
mySprite3.setScale(0.425, ScaleAnchor.Middle)
mySprite3.setStayInScreen(true)
mySprite3.setBounceOnWall(true)
mySprite3.setPosition(30, 20)
mySprite3.setVelocity(50, 50)
let mySprite4 = sprites.create(assets.image`idasset-icecream`, SpriteKind.Food)
mySprite4.setScale(0.425, ScaleAnchor.Middle)
mySprite4.setStayInScreen(true)
mySprite4.setBounceOnWall(true)
mySprite4.setPosition(51, 75)
mySprite4.setVelocity(50, 50)
game.onUpdate(function () {
    if (mySprite.overlapsWith(mySprite2)) {
        sprites.destroy(mySprite2)
        info.changeScoreBy(1)
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(mySprite3)) {
        sprites.destroy(mySprite3)
        info.changeScoreBy(1)
    }
})
game.onUpdate(function () {
    if (info.score() == 3) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
        game.setGameOverMessage(true, "You Won!")
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(mySprite4)) {
        sprites.destroy(mySprite4)
        info.changeScoreBy(1)
        mySprite4 = sprites.create(assets.image`idasset-icecream`, SpriteKind.Food)
        mySprite4.setScale(0.425, ScaleAnchor.Middle)
        mySprite4.setStayInScreen(true)
        mySprite4.setBounceOnWall(true)
        mySprite4.setPosition(51, 75)
        mySprite4.setVelocity(50, 50)
    }
})
