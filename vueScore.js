

var app = new Vue({
  el: '#app',
  data: {
    value:34,
    username: 'Hello Vue!',
    scores:[],
  },
  computed:{
    global_score(){
      let reducer = function(accu,current){
        return {
          privacy:accu.privacy -= 100-current.privacy,
          time:accu.time -= 100-current.time
        }
      }
      // return {name: "moyenne", privacy:"50", time:"50"}
      return this.scores.reduce(reducer,{privacy:100,time:100})
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
    leave(index){
      Vue.set(this.scores[index],'hovered',false);
    }
  },
  mounted(){
    $.get("/api/v0.1/user", (res)=>{
      this.username=res.username
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
