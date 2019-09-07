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
        isOpen: false,
        single: false,
        nameArray: []
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
      this.eventBus && this.eventBus.$on('update:selected', (nameArray)=>{
        this.nameArray = nameArray;
        if(nameArray.indexOf(this.name) >=0 ) {
          this.open()
        }else {
          if(this.single) {
            this.close()
          }
        }
      })
    },
    methods: {
      toggle() {
        if(this.isOpen) {
          this.eventBus.$emit('update:selected', this.nameArray);
          let index = this.nameArray.indexOf(this.name);
          this.nameArray.splice(index,1);
          this.close()
        }else {
          if(this.single) {
            this.nameArray = []
          }
          this.nameArray.push(this.name);
          this.eventBus.$emit('update:selected', this.nameArray);
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