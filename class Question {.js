class Question {

    constructor() {
      this.title1 = createElement('h3');
      this.title2 = createElement('h2');
      this.title3 = createElement('h1');
      this.title4 = createElement('h1');
      this.title5 = createElement('h1');
      this.title26 = createElement('h1');
      this.button = createButton();
      this.input = createInput("Answer:");
    }
    hide(){
      this.title1.hide();
      this.title2.hide();
      this.title3.hide();
      this.title4.hide();
      this.title5.hide();
      this.title6.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title1.position(displayWidth/2 - 50, 0);
      this.title2.html("What do you call a group of Unicorns?");
      this.title3.html("A. A group of Unicorns");
      this.title4.html("B. A blessing");
      this.title5.html("C. A pack of Unicorns");
      this.title6.html("D. A boquet");
  2
      this.button.mousePressed(()=>{
        this.button.hide();
        this.title.hide();
        this.title.hide();
        this.input.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    }
  }