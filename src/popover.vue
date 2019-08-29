<template>
    <div class="s-popover" @click="targetContent">
        <div class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        data(){
          return {
            visible: false
          }
        },
      methods: {
          targetContent(){
            this.visible = !this.visible
          }
      }
    }
</script>
<style lang="scss" scoped>
    .s-popover {
        display: inline-block;
        position: relative;
        .content-wrapper {
            position: absolute;
            bottom: 100%;
        }
    }
</style>