<template>
    <div>
        <h1 :class="[{ 'border-bottom': headerBorder }, 'pb-3 mb-3']">
            <slot name="header" />
        </h1>

        <slot />

        <div class="decorative-footer">
            <hr />
            <div class="decorative-footer__icon">👾</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headerBorder: {
            type: Boolean,
            default: true,
        },
    },
}
</script>

<style scoped>
    .decorative-footer {
        position: relative;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .decorative-footer__icon {
        position: absolute;
        top: 0;
        left: 50%;
        padding: 5px;
        background-color: #fff;
        transform: translate(-50%, -50%);
    }
</style>
