<template>
  <div>
    <!-- ==================== -->
    <!--  1. v-bind           -->
    <!-- ==================== -->
    <!--
      v-bind dynamically sets an HTML attribute.
      Without it: <img src="imageUrl"> reads "imageUrl" as plain text
      With it:    <img :src="imageUrl"> reads imageUrl as a JS variable
      The colon : is shorthand for v-bind:
      Rule of thumb: any time an attribute's value comes from your data, use :
    -->

    <img :src="imageUrl" :alt="imageAlt" width="100" />
    <p :style="{ color: textColor }">This text color comes from data</p>
    <p :class="{ height: isHighlighted }">This class is toggled from data</p>

    <hr />

    <!-- ==================== -->
    <!--  2. v-if / v-else    -->
    <!-- ==================== -->
    <!--
      v-if completely adds or removes an element from the DOM.
      If isLoggedIn is false, the element does not exist in the HTML at all.
      v-else must immediately follow a v-if element — no elements between them.
      Use v-if when the condition doesn't change often.
    -->

    <div v-if="isLoggedIn">
      <p>Welcome back , {{ firstName }}! 🔥</p>
      <button @click="isLoggedIn = false">Log out</button>
    </div>
    <div v-else>
      <p>You're not logged In.</p>
      <button @click="isLoggedIn = true">Log In</button>
    </div>

    <hr />

    <!-- ==================== -->
    <!--  3. v-show           -->
    <!-- ==================== -->
    <!--
      v-show toggles visibility with CSS (display: none).
      The element ALWAYS exists in the DOM — it's just hidden or visible.
      
      v-if vs v-show — the key difference:
      v-if   → element is DESTROYED and RECREATED  (use for rare toggles)
      v-show → element is HIDDEN and SHOWN         (use for frequent toggles)
      
      Real example: a dropdown menu that opens/closes constantly → v-show
      Real example: an admin panel only shown to admins → v-if
    -->

    <button @click="showSecret = !showSecret">Toggle secret</button>
    <p v-show="showSecret">🤫 This is the secret message!</p>

    <hr />

    <!-- ==================== -->
    <!--  4. v-for            -->
    <!-- ==================== -->
    <!--
      v-for loops over an array and renders one element per item.
      Always add :key — it's a unique ID Vue uses to track each item.
      Without :key Vue can't tell items apart and causes subtle bugs.
      
      You can also get the index: v-for="(item, index) in items"
      You can loop objects: v-for="(value, key) in myObject"
    -->
    <ul>
      <li v-for="(user, index) in users" :key="user.id">
        {{ index + 1 }}. {{ user.name }} - {{ user.role }}
      </li>
    </ul>
    <hr />

    <!-- ==================== -->
    <!--  5. v-model          -->
    <!-- ==================== -->
    <!--
      v-model is two-way binding — it syncs an input with a data property.
      When you type → data updates.
      When data changes → input updates.
      
      Without v-model you'd need to do both manually:
      :value="search" @input="search = $event.target.value"
      v-model does both in one word. That's its entire job.
    -->
    <input v-model="search" placeholder="Search users..." />
    <p>Searching for: {{ search }}</p>
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">{{ user.name }}</li>
    </ul>
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
    <!-- <ul>
      <li v-for="user in users" :key="user">{{ user }}</li>
    </ul> -->
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
      // users: [],
      imageAlt: "Aster Aweke picture",
      textColor: "green",
      isHighlighted: false,
      isLoggedIn: false,
      showSecret: false,
      users: [
        { id: 1, name: "Abemelek", role: "Developer" },
        { id: 2, name: "Chala", role: "Designer" },
        { id: 3, name: "Adu", role: "Accountant" },
        { id: 4, name: "almitu", role: "stripper" },
      ],
      // v-model + computed filter
      search: "",
      imageUrl:
        "data:image/jpeg;base64,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",
    };
  },
  computed: {
    countSummary() {
      return `You have clicked ${this.count} time${this.count === 1 ? "" : "s"}`;
    },
    fullName() {
      return `Full Name : ${this.firstName} ${this.lastName}`;
    },
    filteredUsers() {
      // filter() loops the array and keeps only items where the condition is true
      // toLowerCase() makes the search case-insensetive
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.search.toLowerCase())
      );
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
  // created() {
  //   setTimeout(() => {
  //     this.users = ["Abemelek", "Daniel", "Adu"];
  //   }, 1500);
  // },
};
</script>
<style>
.highlight {
  background: yellow;
  padding: 4px 8px;
}
</style>
// --- LIFECYCLE HOOKS --- beforeCreate(){ console.log("1. beforeCreate - component not
ready yet, data is undefined:",this.message) }, created(){ console.log("2. created - data
is ready: " ,this.message) }, beforeMount(){ console.log("3. beforeMount - about to paint
the screen") }, mounted(){ console.log("4. mounted - component is now visible on screen")
console.log("This is where you can touch the real DOM if needed") }, beforeUpdate(){
console.log("5. beforeUpdate - something changed, about to re-render") }, updated(){
console.log("6. updated - screeen has re-rendered") }, beforeDestroy() { console.log("7.
beforeDestroy - component is about to die") console.log(" This is where you clean up
timers, event listeners") }, destroyed() { console.log("8. destroyed - component is gone")
},
