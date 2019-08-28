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
      inject: ['eventBus'],
      mounted() {
        this.eventBus.$on('update:selected', (selected, vm)=>{
          let {width, left} = vm.$el.getBoundingClientRect();
          this.$refs.line.style.width = `${width}px`;
          this.$refs.line.style.left = `${left}px`;
        })
      }
    }
</script>
<style lang="scss" scoped>
    $tabs-height: 40px;
    $blue: blue;
    $border-color: #ddd;
    .s-tabs-nav {
        height: $tabs-height;
        display: flex;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        >.line {
            border-bottom: 1px solid $blue;
            position: absolute;
            bottom: 0;
            transition: 350ms;
        }
        > .actions {
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
        }
    }
</style>