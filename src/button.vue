<template>
    <button class="s-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <s-icon v-if="icon && !loading" :name="icon"></s-icon>
        <s-icon class="loading icon" v-if="loading" name="loading"></s-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from "./icon";
    export default {
        components: {
            's-icon': Icon
        },
        props: {
            icon: String,
            loading: {
              type: Boolean,
              default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    console.log(value);
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .s-button {
        height: var(--button-height);
        font-size: var(--font-size);
        border-radius: var(--button-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        padding: 0 1em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
            margin-left: 0;
        }
        > .content {
            order: 2
        }
        &.icon-right {
            > .content {
                order: 1
            }
            > .icon {
                order: 2;
                margin-left: .3em;
                margin-right: 0;
            }
        }
        > .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>