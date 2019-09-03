<template>
    <div class="s-popover" >
        <div class="content-wrapper" ref="contentWrapper" @click.stop v-show="visible">
            <slot name="content"></slot>
        </div>
        <span @click.stop="targetContent" ref="triggerWrapper">
            <slot></slot>
        </span>
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
              console.log(this.$refs);
              document.body.appendChild(this.$refs.contentWrapper);
              let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
              console.log(width, height, top, left);
              this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
              this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
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
        vertical-align: top;
    }
    .content-wrapper {
        position: absolute;
        bottom: 100%;
        left: 0;
        border: 1px solid red;
        min-height: 20px;
        transform: translateY(-100%);
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
</style>