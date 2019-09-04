<template>
    <div class="s-popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible"
        :class="{[`position-${position}`]: true}">
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
      props: {
        position: {
          type: String,
          default: 'top',
          validator(value) {
            return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
          }
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
          const {contentWrapper, triggerWrapper} = this.$refs;
          document.body.appendChild(contentWrapper);
          let {width, height, top, left} = triggerWrapper.getBoundingClientRect();
          console.log(this.position);
          if(this.position === 'top') {
            contentWrapper.style.left = left + window.scrollX + 'px';
            contentWrapper.style.top = top + window.scrollY + 'px';
          }else if(this.position === 'bottom') {
            contentWrapper.style.left = left + window.scrollX + 'px';
            contentWrapper.style.top = top + height + window.scrollY + 'px';
          }else if(this.position === 'left') {
            let {height: contentHeight} = contentWrapper.getBoundingClientRect();
            console.log(contentHeight);
            contentWrapper.style.left = left + window.scrollX + 'px';
            contentWrapper.style.top = top - (contentHeight - height)/2 + window.scrollY + 'px';
          }else if(this.position === 'right') {
            let {height: contentHeight} = contentWrapper.getBoundingClientRect();
            console.log(contentHeight);
            contentWrapper.style.left = left + width + window.scrollX + 'px';
            contentWrapper.style.top = top - (contentHeight - height)/2 + window.scrollY + 'px';
          }
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
        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            &::before, &::after{
                left: 10px;
            }
            &::before {
                border-top-color: $border-color;
                top: calc(100% + 1px);
            }
            &::after{
                top: calc(100%);
                border-top-color: white;
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before, &::after{
                left: 10px;
            }
            &::before {
                border-bottom-color: $border-color;
                bottom: 100%;
            }
            &::after{
                bottom: calc(100% - 1px);
                border-bottom-color: white;
            }
        }
        &.position-left {
            margin-left: -10px;
            transform: translateX(-100%);
            &::before, &::after{
                top: 50%;
                transform: translateY(-50%);
            }
            &::before {
                border-left-color: $border-color;
                left: 100%;
            }
            &::after{
                left: calc(100% - 1px);
                border-left-color: white;
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before, &::after{
                top: 50%;
                transform: translateY(-50%);
            }
            &::before {
                border-right-color: $border-color;
                right: 100%;
            }
            &::after{
                right: calc(100% - 1px);
                border-right-color: white;
            }
        }
    }
</style>