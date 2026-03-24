<template>
  <div style="max-width: 600px; margin: 40px auto; padding: 0 20px;">
    <h1 style="margin-bottom: 24px;">👥 User Manager</h1>
    <UserList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue'

export default {
  name: 'App',
  components: { UserList }
}
</script>
```

---

## The flow to understand — read this carefully
```
AddUserForm  →  $emit('add-user', newUser)  →  UserList.addUser()
                                                    ↓
                                             users.push(newUser)
                                                    ↓
UserCard  ←  :user="user"  ←  v-for loops the updated array


UserCard  →  $emit('delete', user.id)  →  UserList.deleteUser()
                                               ↓
                                     users.filter(remove that id)