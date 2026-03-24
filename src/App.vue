<template>
  <div>
    <h1>{{ message }}</h1>
    <p>{{ name }}</p>
    <p>Count: {{ count }}</p>
    <p>{{ countSummary }}</p>
    <p>{{ countHistory }}</p>
    <input v-model="firstName" />
    <input v-model="lastName" />
    <p>{{ fullName }}</p>
    <button @click="changeMessage">Change Message</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello Vue!",
      name: "Abemelek",
      count: 0,
      firstName: "Abemelek",
      lastName: "Daniel",
      countHistory: "",
    };
  },
  computed: {
    countSummary() {
      return `You have clicked ${this.count} time${this.count === 1 ? "" : "s"}`;
    },
    fullName() {
      return `Full Name : ${this.firstName} ${this.lastName}`;
    },
  },
  watch: {
    count(newValue, oldValue) {
      this.countHistory = `Count changed from ${oldValue} to ${newValue}`;
    },
    firstName(newValue) { 
      console.log("firstName changed: ", newValue);
    },
    lastName(newValue) {
      console.log("lastName changed: ", newValue);
    },
  },
  methods: {
    changeMessage() {
      this.message = "Vue is clicking now!";
    },
    increment() {
      this.count++;
    },
  },
};
</script>
