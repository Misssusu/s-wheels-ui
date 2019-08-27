<template>
    <div class="s-tabs-nav">
        <slot></slot>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        inject: ['eventBus']
    }
</script>
<style lang="scss" scoped>
    $tabs-height: 40px;
    .s-tabs-nav {
        height: $tabs-height;
        display: flex;
        justify-content: flex-start;
        border: 1px solid red;
        > .actions {
            margin-left: auto;
        }
    }
</style>