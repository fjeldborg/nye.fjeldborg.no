var app = new Vue({
  el: "#app",
  data: {
    navigationOpen: false
  },
  methods: {
    toggleMenu: function() {
      console.log("toggleMenu");

      this.navigationOpen = !this.navigationOpen;
    }
  }
});
