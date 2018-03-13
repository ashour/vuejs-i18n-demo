<template>
    <div>
        <div :class="[{ 'border-bottom': headerBorder }, 'pb-3 mb-3']">
            <slot name="header" />
        </div>

        <slot />

        <separator />
    </div>
</template>

<script>
import Separator from './Separator'

export default {
    props: {
        headerBorder: {
            type: Boolean,
            default: true,
        },
    },

    components: {
        Separator,
    },
}
</script>
