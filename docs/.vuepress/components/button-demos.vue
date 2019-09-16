<template>
    <div>
        <s-button>默认按钮</s-button>
        <s-button icon="settings">默认按钮</s-button>
        <s-button :loading="true">默认按钮</s-button>
        <s-button disabled>默认按钮</s-button>
        <h4>代码</h4>
        <pre><code>{{contents}}</code></pre>
    </div>
</template>
<script>
    import Button from "../../../src/button"
    export default {
      data() {
        return {
          contents: `
            <s-button>默认按钮</s-button>
            <s-button icon="settings">默认按钮</s-button>
            <s-button :loading="true">默认按钮</s-button>
            <s-button :disabled="true">默认按钮</s-button>
          `.replace(/^ {8}/gm, '').trim()
        }
      },
      components: {
        's-button': Button
      }
    }
</script>