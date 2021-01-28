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
    remove: function()  {
     console.log(list[i])
    }
  }
});
Vue.config.devtools = true;
