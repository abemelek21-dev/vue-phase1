<template>
    <div class="base-card">
        <div class="card-body">
            <slot name="header" />
            <slot />
            <slot name="footer" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseCard'
}
</script>
<style scoped>
.base-card {
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 16px;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06)
}
</style>