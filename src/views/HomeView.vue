<template>
    <div>
        <h1>🏠 Home</h1>
        <p style="color: #6b7280; margin-bottom: 24px;">
            Welcome to the Vue Router demo.
        </p>

        <!--
      $router.push() = programmatic navigation
      Like Laravel's redirect()->route('users')
      or Express's res.redirect('/users')
    -->
        <button @click="$router.push('/users')">
            Go to Users →
        </button>
    </div>
</template>

<script>
export default { name: 'HomeView' }
</script>

<style scoped>
button {
    padding: 10px 20px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
}
</style>