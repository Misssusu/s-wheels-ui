<template>
    <div class="s-tabs-nav">
        <slot></slot>
        <div class="line" ref="line"></div>
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
    $blue: blue;
    .s-tabs-nav {
        height: $tabs-height;
        display: flex;
        justify-content: flex-start;
        position: relative;
        >.line {
            width: 100px;
            border-bottom: 1px solid $blue;
            position: absolute;
            bottom: 0;
        }
        > .actions {
            margin-left: auto;
        }
    }
</style>