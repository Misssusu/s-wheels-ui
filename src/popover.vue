<template>
    <div class="s-popover" >
        <div class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <div @click="targetContent">
            <slot></slot>
        </div>
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