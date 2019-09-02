<template>
    <div class="s-popover" >
        <div class="content-wrapper" @click.stop v-if="visible">
            <slot name="content"></slot>
        </div>
        <div @click.stop="targetContent">
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
            this.visible = !this.visible;
            console.log('切换visible');
            if(this.visible === true) {
              let eventHandler = ()=>{
                this.visible = false;
                console.log('document 隐藏');
                console.log('点击body关闭popover');
                document.body.removeEventListener('click', eventHandler)
              };
              document.body.addEventListener('click',eventHandler)
            }else {
              console.log('vm 隐藏');
            }
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
            border: 1px solid red;
        }
    }
</style>