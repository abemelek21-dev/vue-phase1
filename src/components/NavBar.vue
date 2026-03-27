<template>
    <nav class="navbar">
        <span class="brand">🟢 VueApp</span>
        <div class="links">
            <!--
        router-link = <a> tag that knows about Vue Router
        It NEVER does a full page reload — just swaps the component
        Like Laravel's {{ route('home') }} but smarter
        
        'active-class' is automatically added when this route is active
      -->
            <router-link to="/">Home</router-link>
            <router-link to="/users">Users</router-link>
        </div>
    </nav>
</template>
<script>
export default {
    name: "NavBar"
}
</script>
<style>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 32px;
    background: #1e293b;
    color: white;
    margin-bottom: 32px;
}

.brand {
    font-weight: 600p;
    font-size: 16px;
}

.links {
    display: flex;
    gap: 24px
}

.links a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.15s;
}

.links:hover {
    color: white;
}

/* router-link automatically adds this class when route is active*/
.links a.router-link-active {
    color: white;
    font-weight: 500;
}
</style>