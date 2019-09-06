<template>
    <div class="s-collapse-item" @click="toggle">
        <div class="title">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        open: false
      };
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    inject: ['eventBus'],
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected', (targetVm)=>{
        if(targetVm !== this) {
          this.close()
        }
      })
    },
    methods: {
      toggle() {
        if(this.open) {
          this.close()
        }else {
          this.open = true;
          this.eventBus.$emit('update:selected', this);
        }
      },
      close() {
        this.open = false;
      }
    }
  };
</script>
<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .s-collapse-item {
        > .title {
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            border-bottom: 1px solid $grey;
            margin-bottom: -1px;
            margin-left: -1px;
            margin-right: -1px;
        }
        &:not(:last-child) {
            border-bottom: 1px solid $grey;
        }
        > .content {
            padding: 8px;
        }
        &:last-child {
            > .title:last-child {
                border-bottom: none;
            }
        }
    }
</style>