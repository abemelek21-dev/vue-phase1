<template>
    <div>
        <button class="back-btn" @click="$router.back()">← Back</button>

        <div class="detail-card">
            <div class="avatar-lg">{{ user.name[0] }}</div>
            <h2>{{ user.name }}</h2>
            <p class="role">{{ user.role }}</p>
            <div class="details">
                <div class="detail-row">
                    <span>Email</span>
                    <strong>{{ user.email }}</strong>
                </div>
                <div class="detail-row">
                    <span>City</span>
                    <strong>{{ user.city }}</strong>
                </div>
                <div class="detail-row">
                    <span>User ID</span>
                    <!--
            $route.params = the URL params
            Like Laravel's $id in Route::get('/users/{id}', ...)
            or Express's req.params.id
          -->
                    <strong>{{ $route.params.id }}</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// fake data — pretending we fetched by ID
const ALL_USERS = [
    { id: 1, name: 'Abemelek Daniel', role: 'Developer', email: 'ab@example.com', city: 'Addis Ababa' },
    { id: 2, name: 'Sara Haile', role: 'Designer', email: 'sara@example.com', city: 'Dire Dawa' },
    { id: 3, name: 'Yonas Tesfaye', role: 'Manager', email: 'yon@example.com', city: 'Bahir Dar' },
]

export default {
    name: 'UserDetailView',
    data() {
        return { user: {} }
    },
    created() {
        // $route.params.id — reading the URL param
        // This is where you'd normally call an API: fetchUser(this.$route.params.id)
        const id = this.$route.params.id
        const found = ALL_USERS.find(u => u.id === id)
        this.user = found || { name: 'Unknown', role: '', email: '', city: '' }
    }
}
</script>

<style scoped>
.back-btn {
    background: none;
    border: none;
    color: #3b82f6;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 20px;
    padding: 0;
}

.detail-card {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 28px;
    text-align: center;
    background: white;
}

.avatar-lg {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #dbeafe;
    color: #1d4ed8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    margin: 0 auto 16px;
}

.role {
    color: #6b7280;
    margin-bottom: 24px;
}

.details {
    text-align: left;
    border-top: 1px solid #f1f5f9;
    padding-top: 16px;
}

.detail-row {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #f8fafc;
    font-size: 14px;
}

.detail-row span {
    color: #6b7280;
}
</style>