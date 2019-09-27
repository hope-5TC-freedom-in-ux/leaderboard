

var app = new Vue({
  el: '#app',
  data: {
    value:34,
    username: 'Hello Vue!',
    scores:[],
    global_score:{}
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
    $.get("/api/v0.1/scores",(res)=>{
      console.log(res);
    })
    console.log("MOUNTED")
    this.username="John"
    this.global_score={name:'Challenge 0', privacy:78,time:17}
    this.scores=[
      {name:'Challenge 0', privacy:78,time:17},
      {name:'Challenge 0', privacy:78,time:17},
      {name:'Challenge 0', privacy:78,time:17},
      {name:'Challenge 0', privacy:78,time:17}]
    }
  })
