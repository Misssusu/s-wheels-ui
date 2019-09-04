<template>
    <div class="s-popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" class="trigger-wrapper">
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
        onClick(event){
          if (this.$refs.triggerWrapper.contains(event.target)) {
            //click button
            if (this.visible === true) {
              this.close()
            } else {
              //click content
              this.open()
            }
          }
        },
        positionContent () {
          document.body.appendChild(this.$refs.contentWrapper);
          let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
        },
        open () {
          this.visible = true;
          this.$nextTick(() => {
            this.positionContent();
            document.addEventListener('click', this.onClickDocument)
          })
        },
        close () {
          this.visible = false;
          document.removeEventListener('click', this.onClickDocument)
        },
        onClickDocument (e) {
          if (this.$refs.popover &&
            (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
          ) { return }
          if (this.$refs.contentWrapper &&
            (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
          ) { return }
          this.close()
        }
      }
    }
</script>
<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .s-popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .trigger-wrapper {
        display: inline-block;
    }
    .content-wrapper {
        position: absolute;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        transform: translateY(-100%);
        margin-top: -11px;
        padding: .5em 1em;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        max-width: 20em;
        word-break: break-all;
        &::before, &::after{
            content: '';
            display: block;
            position: absolute;
            border: 10px solid transparent;
        }
        &::before {
            border-top-color: $border-color;
            top: 100%;
        }
        &::after{
            top: calc(100% - 1px);
            border-top-color: white;
        }
    }
</style>