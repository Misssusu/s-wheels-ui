<template>
    <div class="s-collapse">
        <slot></slot>
    </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    props: {
      type: Boolean,
      accordion: false
    },
    provide() {
      if(this.accordion) {
        return {
          eventBus: new Vue()
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .s-collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>
<!--1. 点击面板，展开内容-->
<!--2. 再次点击面板，关闭内容-->
<!--3. 点击第一个面板，展开第一个内容，点击第二个面板，第一个内容关闭，第二个内容展开-->

<!--<s-collaps accordion><s-collaps-item name="1"></s-collaps-item></collaps>-->