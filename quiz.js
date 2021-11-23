class Quiz{
   constructor(){

 }
     getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState = data.val()
        })
     }

     update(state){
         database.ref("/").update({
             gameState: state
         })
     }

     async start(){
        if(gameState===0){
            contestant = new Contestant();
            var contestantCountref = await database.ref('contestantCount').once("value");
            if(contestantCountref.exists()){
                contestantCount = contestantCountref.val()
                contestant.getCount();
            }
            
        }
     }
     play(){

        
     }

}