const HelloVue = {
  template: "<h1>Hello Vue.js</h1>"
}


const buttonCounter = {
  template: "<div><span>count: </span><button v-on:click='countUp'>{{ count }}</button></div>",
  data: () => ({
    count: 0
  }),
  methods: {
    countUp: function(e) {
      this.count++;
    }
  }
}
const app = Vue.createApp({
  data: () => ({
    isLarge: true,
    hasError: true,
    largeClass: "large",
    dengerClass: "text-red",
    classObject: {
      large: true,
      'text-red': true
    },
    largeClass2: {
      large: true,
      'bg-gray': true
    },
    dengerClass2: {
      'text-red': true
    },
    isLarge2: true,
    color: "red",
    fontSize: "36px",
    toggle: true,
    color: "blue",
    counter: 0,
    message: "",
    text1: "Vue.js",
    checked: false,
    colors: [],
    string: "",
    selected: "",
    age: 0,
    show: true
  }),
  methods: {
    clickHandler: function(e) {
      this.counter++;
    },
    isTime: function() {
      this.message = new Date().toLocaleTimeString();
    }
  },
  components: {
    'hello-vue': HelloVue,
    "button-counter": buttonCounter
  }
});
// コンポーネント定義
app.component("hello-component", {
  template: "<p>Hello!</p>"
});
app.mount("#app");