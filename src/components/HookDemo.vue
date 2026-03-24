<template>
  <div>
    <!-- PART 1: API data loaded in created -->
    <div class="card">
      <h2>👤 User Profile</h2>
      <div v-if="isLoading">Loading user...</div>
      <div v-else>
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>City:</strong> {{ user.city }}</p>
      </div>
    </div>

    <!-- PART 2: DOM interaction in mounted -->
    <div class="card">
      <h2>🔍 Search Box</h2>
      <p>This input is auto-focused when the page loads</p>
      <input
        ref="searchInput"
        v-model="searchTerm"
        placeholder="I was focused automatically..."
      />
      <p>You typed: {{ searchTerm }}</p>
    </div>

    <!-- PART 3: What happens if you use the WRONG hook -->
    <div class="card">
      <h2>💥 Wrong hook demo</h2>
      <p ref="myParagraph">Try to read me in created vs mounted</p>
      <p><strong>Read in created:</strong> {{ readInCreated }}</p>
      <p><strong>Read in mounted:</strong> {{ readInMounted }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HookDemo",
  data() {
    return {
      // Part 1
      isLoading: true,
      user: {},

      // Part 2
      searchTerm: "",

      // Part 3 — shows what each hook can and cannot do
      readInCreated: "",
      readInMounted: "",
    };
  },

  created() {
    // ✅ CORRECT USE — fetching data
    // Screen doesn't exist yet but we don't need it
    // We just need to go get data and store it in data()
    console.log("created: starting to fetch user data...")

    setTimeout(() => {
      this.user = {
        name: "Abemelek Daniel",
        email: "abemelek@example.com",
        city: "Addis Ababa",
      };
      this.isLoading = false;
      console.log("created: user data loaded!")
    }, 2000);

    // ❌ WRONG USE — trying to touch the DOM in created
    // this.$refs.searchInput does NOT exist yet
    // Try uncommenting this line and see the error:
    // this.$refs.searchInput.focus()  // → TypeError: Cannot read properties of undefined

    // ❌ WRONG USE — trying to read a DOM element in created
    // The paragraph element doesn't exist on screen yet
    const el = this.$refs.myParagraph;
    this.readInCreated = el ? el.innerText : "❌ Element not found — DOM doesn't exist yet!";
  },

  mounted() {
    // ✅ CORRECT USE — auto-focusing an input
    // Screen is painted, DOM exists, $refs work perfectly
    console.log("mounted: screen is ready, focusing input...")
    this.$refs.searchInput.focus();

    // ✅ CORRECT USE — reading a real DOM element
    const el = this.$refs.myParagraph;
    this.readInMounted = el ? `✅ Found it! Text is: "${el.innerText}"` : "not found";

    console.log("mounted: DOM is fully available!")
  },
};
</script>

<style scoped>
.card {
  background: #f8f9fa;
  padding: 20px;
  margin: 15px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
}
input {
  padding: 10px;
  font-size: 15px;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 6px;
  margin-top: 8px;
}
</style>