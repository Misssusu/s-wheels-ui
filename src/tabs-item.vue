<template>
    <div class="s-tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        active: false
      };
    },
    computed: {
      classes() {
        return {
          active: this.active
        }
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (name) => {
        console.log(name);
        this.active = this.name === name;
      });
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name);
        console.log(this.name);
      }
    }
  };
</script>
<style lang="scss" scoped>
    .s-tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        cursor: pointer;
        border: 1px solid green;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            background: red;
        }
    }
</style>