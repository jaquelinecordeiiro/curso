<template>
    <div class="modal" v-if="show">
        <div class="modal--content">
            <div class="modal--close" v-html="closeIcon" @click="onCloseButtonClck"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import feather from 'feather-icons';

export default{
    name: "Modal",
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },

    computed: {
        closeIcon() {
            return feather.icons.x.toSvg();
        }
    },
    methods: {
        onCloseButtonClck() {
            this.$emit('on-modal-close');
        }
    }
};
</script>

<style lang="less" scoped>
    .modal{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.5);

        .modal--content{
            background: white;
            width: 600px;
            border-radius: 8px;
            padding: 30px;

            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);         

        }
        .modal--close{
            text-align: right;

    }
    }

</style>