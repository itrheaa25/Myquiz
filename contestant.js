class Contestant{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }

 getCount(){
      var contestantCountref = database.ref("contestantCount")
      contestantCountref.on("value",(data)=>{
        contestantCount = data.val()
      })
     }

 updateCount(count){
    database.ref("/").update({
        contestantCount: count
    })
 }

 update(name){
     var contestantindex = "contestants/contestant" + this.index
         database.ref(contestantindex).set({
         name : this.name,
         distance : this.distance

     })

 }

 static getContestantinfo(){
     var contestantInforef = database.ref("contestants")
     contestantInforef.on("value",(data)=>{ 
        allContestants = data.val()
     })
 }


}