class Form {
    constructor(){
        

    }
    display(){
        var title=createElement('H2');
        title.html('Car Racing Game');
        title.position(250,100);
        var input=createInput("Type your name here");
        input.position(250,170);
        var button=createButton("PLAY");
        button.position(250,240);
        
        button.mousePressed(function (){
            var greeting=createElement('H3');
            var name=input.value();
            greeting.html('Welcome' + name);
            greeting.position(300,300);
            input.hide();
            button.hide();


        })

        

    }
}