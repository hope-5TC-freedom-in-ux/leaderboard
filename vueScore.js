

var app = new Vue({
  el: '#app',
  data: {
    value:34,
    username: 'Hello Vue!',
    scores:[],
    messages:null
  },
  computed:{
    global_score(){
      var self = this;
      if(self.scores !== undefined){
        let reducer = function(accu,current){
          let length = self.scores.length;
          return {
            privacy:accu.privacy -= (100-current.privacy)/length,
            time:accu.time -= (100-current.time)/length
          }
        }
        return self.scores.reduce(reducer,{privacy:100,time:100})
      }else{
        return {}
      }
    }
  },
  methods:{
    getUsername(){
      $.get("/api/VO.1/username", res =>{
        console.log(res)
      })
    },
    hover(index){
      Vue.set(this.scores[index],'hovered',true);
    },
    nextChallenge(){
      document.location.href="/"
    },
    leave(index){
      Vue.set(this.scores[index],'hovered',false);
    }
  },
  mounted(){
    $.get("/api/v0.1/user", (res)=>{
      this.username=res.username
    })
    $.get("/api/v0.1/messages/game", res=>{
      this.messages=res
    })
    $.get("/api/v0.1/scores",(res)=>{
      console.log(res);
      this.scores=res
    })
    // this.scores=[
    //   {name:'Challenge 0', privacy:78,time:17},
    //   {name:'Challenge 0', privacy:78,time:17},
    //   {name:'Challenge 0', privacy:78,time:17},
    //   {name:'Challenge 0', privacy:78,time:17}]
    // }
  }
})
