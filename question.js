class Question{
    constructor(){
      this.input1 = createInput("Name")
      this.input2 = createInput("Answer")
      this.button = createButton("Play")
      this.greeting = createElement("h3")
      this.question = new Question()
      }
  
    hide(){
      this.input1.hide()
      this.input2.hide()
      this.button.hide()
      this.greeting.hide()
    }
  
    display(){
      var title = createElement("h2")
      this.title.html("Quiz")
      this.title.position(400,50)
      this.input1.position(700,50)
      this.input2.position(900, 350)
      this.button.position(700,450)
      this.button.mousePressed(()=>{
        contestant.name = this.input1.value()
        contestant.answer = this.input2.value();
        contestantCount+=1
        contestant.index = contestantrCount
        contestant.update()
        contestant.updateCount(contestantCount)
        
        this.greeting.html("Hello" + contestant.name)
        this.greeting.position(600,100)
      })

      this.question.html("Question:- Who is that with a neck and no head, two arms and no hands?  What is it?")
      this.question.position(100,250);
      this.option1.html("A. A clock");
      this.option1.position(200,300);
      this.option2.html("B. A shirt")
      this.option2.position(200,350);
      this.option3.html("C. A statue")
      this.option3.position(200,400);
      this.option4.html("D. Pants")
      this.option4.position(200,450);
      this.options = [option1,option2,option3,option4]


    
    }
  
  }