<template>
    <div>
        <button @click="handleUpdate">{{ label }}</button>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
    name: 'ButtonChild',
    props: {
        label: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            default: 0
        }
    },
    methods: {
        handleUpdate() {
            this.$emit('btn-clicked', this.count + 1)
        }
    }
}
</script>