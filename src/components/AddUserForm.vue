<template>
  <div class="form-card">
    <h3>Add a user</h3>
    <div class="form-row">
      <input v-model="newName" placeholder="Full name" />
      <input v-model="newEmail" placeholder="Email" />
      <select v-model="newRole">
        <option value="">Role...</option>
        <option>Developer</option>
        <option>Designer</option>
        <option>Manager</option>
      </select>
      <button @click="handleSubmit">Add</button>
    </div>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>
<script>
export default {
  name: "AddUserForm",
  data() {
    return {
      newName: "",
      newEmail: "",
      newRole: "",
      error: "",
    };
  },
  methods: {
    handleSubmit() {
      // Validate first
      if (!this.newName || !this.newEmail || !this.newRole) {
        this.error = "Please fill in all fields";
        return;
      }

      this.$emit("add-user", {
        id: new Date(),
        name: this.newName,
        email: this.newEmail,
        role: this.newRole,
      });

      // Reset form after submit
      (this.newName = ""), (this.newEmail = ""), (this.newRole = ""), (this.error = "");
    },
  },
};
</script>
<style scoped>
.form-card {
  background: #f8faff;
  border: 1px solid #dbeafe;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 20px;
}
.form-card h3 {
  margin: 0 0 12px;
  font-size: 15px;
}
.form-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.form-row input,
.form-row select {
  flex: 1;
  min-width: 140px;
  padding: 9px 12px;
  border: 1px solid #d1d5db;
  border-radius: 7px;
  font-size: 14px;
  font-family: inherit;
}
.form-row button {
  padding: 9px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}
.form-row button:hover {
  background: #2563eb;
}
.error {
  color: #ef4444;
  font-size: 13px;
  margin: 8px 0 0;
}
</style>
