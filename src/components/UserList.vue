<template>
  <div>
    <AddUserForm @add-user="addUser" />
    <p class="count">{{ users.length }} user {{ users.length === 1 ? "" : "s" }}</p>

    <div v-if="users.length === 0" class="empty">No users yet - add one above!</div>

    <UserCard 
        v-for="user in users" :key="user.id"
        :user="user"
        @delete="deleteUser"
    />
  </div>
</template>
<script>
import UserCard    from "./UserCard.vue";
import AddUserForm from "./AddUserForm.vue";
export default {
  name: "UserList",
  components:{UserCard,AddUserForm},
  data(){
    return {
        users: [
        { id: 1, name: "Abemelek Daniel", email: "ab@example.com",   role: "Developer" },
        { id: 2, name: "Sara Haile",      email: "sara@example.com", role: "Designer"  },
        { id: 3, name: "Yonas Tesfaye",   email: "yon@example.com",  role: "Manager"   },
      ],
    }
  },
  methods: {
    addUser(newUser){
      // Child emitted 'add-user' with the new user object
      // Parent (this component) decides to push it into the array
        this.users.push(newUser)
    },
    deleteUser(userId){
      // Child emitted 'delete' with the user's id
      // Parent filters that user out of the array
        this.users = this.users.filter((user)=>user.id !==userId)
    }
  },
};
</script>
<style scoped>
.count {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 10px;
}
.empty {
  text-align: center;
  padding: 40px;
  color: #9ca3af;
  background: #f9fafb;
  border-radius: 10px;
  border: 2px dashed #e5e7eb;
}
</style>