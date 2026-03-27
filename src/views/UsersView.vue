<template>
    <div>
        <h1>👥 Users</h1>
        <p style="color:#6b7280; margin-bottom: 20px;">
            Click a user to see their detail page.
        </p>

        <div v-for="user in users" :key="user.id" class="user-row" @click="goToUser(user.id)">
            <div class="avatar">{{ user.name[0] }}</div>
            <div class="info">
                <strong>{{ user.name }}</strong>
                <span>{{ user.role }}</span>
            </div>
            <span class="arrow">→</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UsersView',
    data() {
        return {
            users: [
                { id: 1, name: 'Abemelek Daniel', role: 'Developer' },
                { id: 2, name: 'Sara Haile', role: 'Designer' },
                { id: 3, name: 'Yonas Tesfaye', role: 'Manager' },
            ]
        }
    },
    methods: {
        goToUser(id) {
            // programmatic navigation with a param
            // like Express's res.redirect(`/users/${id}`)
            this.$router.push({ name: 'user-detail', params: { id } })
        }
    }
}
</script>

<style scoped>
.user-row {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    background: white;
    transition: all 0.15s;
}

.user-row:hover {
    border-color: #3b82f6;
    transform: translateX(4px);
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #dbeafe;
    color: #1d4ed8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
}

.info {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.info span {
    font-size: 13px;
    color: #6b7280;
}

.arrow {
    color: #9ca3af;
}
</style>