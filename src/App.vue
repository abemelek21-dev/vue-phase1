<template>
  <div>

    <NavBar />
    <!--
      router-view is the "hole" where the matched component renders
      Exactly like Blade's @yield('content')
      Whatever route matches — that component appears here
    -->
    <div style="max-width: 700px; margin: 0 auto; padding: 0 20px;">
      <router-view />
    </div>
    <div style="max-width: 600px; margin: 40px auto; padding: 0 20px;">
      <h1 style="margin-bottom: 24px;">👥 User Manager</h1>
      <UserList />
      <ButtonChild @btn-clicked="handleUpdate" :label="'click me'" :count="total" />
      <div style="max-width: 600px; margin: 40px auto; padding: 0 20px;">

        <!-- Same BaseCard component, totally different content inside -->

        <BaseCard>
          <template #header>Are u sure</template>
          <h2>I am a title</h2>
          <p>I am some paragraph text inside the card.</p>
          <template #footer>
            <button>Cancel</button>
            <button>Confirm</button>
          </template>
        </BaseCard>

        <BaseCard>
          <template #header>Are u sure</template>
          <p>🎉 This card has completely different content</p>
          <button>Click me</button>
          <template #footer>
            <button>Cancel</button>
            <button>Confirm</button>
          </template>
        </BaseCard>

        <BaseCard>
          <template #header>Are u sure</template>
          <img src="https://vuejs.org/images/logo.png" width="60" />
          <p>Even an image works!</p>
          <template #footer>
            <button>Cancel</button>
            <button>Confirm</button>
          </template>
        </BaseCard>

      </div>
    </div>
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
import ButtonChild from './components/ButtonChild.vue';
import BaseCard from './components/BaseCard.vue';
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: { UserList, ButtonChild, BaseCard, NavBar },
  data() {
    return {
      total: 0
    }
  },
  methods: {
    handleUpdate(newCount) {
      this.total = newCount
    }
  }
}
</script>
```

---

## The flow to understand — read this carefully
```
AddUserForm → $emit('add-user', newUser) → UserList.addUser()
↓
users.push(newUser)
↓
UserCard ← :user="user" ← v-for loops the updated array


UserCard → $emit('delete', user.id) → UserList.deleteUser()
↓
users.filter(remove that id)