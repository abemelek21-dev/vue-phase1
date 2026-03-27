<template>
  <div class="user-card">
    <div class="avatar">
      {{ initials }}
    </div>
    <div class="info">
      <h3>{{ user.name }}</h3>
      <p> {{ user.email }}</p>
      <span :class="['badge', user.role.toLowerCase()]">
        {{ user.role }}
      </span>
    </div>
    <button class="delete-btn" @click="handleDelete">X</button>
  </div>
</template>

<script>
export default {
  name: "UserCard",

  // props = data the PARENT passes DOWN to this component
  // Think of props like parameters of a function
  // UserCard says: "to work, I need you to give me a user object"
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    initials() {
      return this.user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();
    },
  },
  methods: {
    handleDelete() {
      // $emit = child talking UP to the parent
      // "Hey parent, the user clicked delete on this card"
      // The parent decides what to actually DO with that info
      this.$emit("delete", this.user.id)
    }
  },
};
</script>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 10px;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;
}

.info {
  flex: 1;
}

.info h3 {
  margin: 0 0 2px;
  font-size: 15px;
}

.info p {
  margin: 0 0 6px;
  font-size: 13px;
  color: #6b7280;
}

.badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 99px;
  font-weight: 500;
}

.developer {
  background: #dbeafe;
  color: #1d4ed8;
}

.designer {
  background: #fce7f3;
  color: #be185d;
}

.manager {
  background: #d1fae5;
  color: #065f46;
}

.delete-btn {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 16px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.15s;
}

.delete-btn:hover {
  background: #fee2e2;
  color: #ef4444;
}
</style>
