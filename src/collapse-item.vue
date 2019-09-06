<template>
    <div class="s-collapse-item" @click="toggle">
        <div class="title">
            {{title}}
        </div>
        <div class="content" v-if="isOpen">
            <slot></slot>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    inject: ['eventBus'],
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected', (name)=>{
        if(name !== this.name) {
          this.close()
        }else {
          this.open()
        }
      })
    },
    methods: {
      toggle() {
        if(this.isOpen) {
          this.close()
        }else {
          this.eventBus.$emit('update:selected', this.name);
        }
      },
      close() {
        this.isOpen = false;
      },
      open() {
        this.isOpen = true;
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