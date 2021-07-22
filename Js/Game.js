class Game{
    constructor(){


    }
    getState(){
        var path = dataBase.ref("gameState");
        path.on("value",function (data){
            gameState=data.val();


        })
        console.log("hello"+gameState);
    }
    start(){
        if (gameState===0){
            form=new Form();
            form.display();
            console.log(gameState);

        }

    }
}