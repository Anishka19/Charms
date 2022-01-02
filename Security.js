class Security {

    constructor(){

        this.access1 = createInput("")
        this.access1.position(140,160);
        this.access1.style('background', '#FFFE7A');  

        this.button1 = createButton('Check');
        this.button1.position(140,190);
        this.button1.style('background', '#FFFE7A');    

        this.access2 = createInput("")
        this.access2.position(680,230);
        this.access2.style('background', '#B660CD');  

        this.button2 = createButton('Check');
        this.button2.position(680,260);
        this.button2.style('background', '#B660CD');

        this.access3 = createInput("")
        this.access3.position(340,350);
        this.access3.style('background', '#1BA8F0');  

        //Debug the code to create the third button.
        this.button3 = createButton('Check');
        this.button3.position(340,380);
        this.button3.style('background', '#1BA8F0'); 
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        // On mousePressed, check the input condition. 
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

    }
}