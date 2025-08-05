kaboom({
    global:true,
});

loadRoot('https://i.imgur.com/');
loadSprite('yeti','OqVWAm6.png');

screen('main',()=>{
    const yeti=add([
        sprite('yeti'),
        pos(80,80),
        color(255,188,0),
    ]);



add([
    rect(width(),12),
    pos(0,280),
    origin('toleft'),
    solid()
])

const JUMP_FORCE = 320;
const MOVE_SPEED =120;


keyPress("space",()=>{
    yeti.jump(JUMP_FORCE);
});

keyDown("left",()=>{
    yeti.move(-MOVE_SPEED,0);
});
 keyDown("right",()=>{
    yeti.move(MOVE_SPEED,0)
 });

});



start('main');
