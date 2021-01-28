new Vue({
  el:'#app',
  data: {
    list: [

    ],
    toDo:''
  },
  methods: {
    addToList: function() {
      this.list.push(this.toDo);
    },
    remove: function(index) {
     this.list.splice(index,1);
    }
  }
});
Vue.config.devtools = true;
