<template>
    <router-link
        :tag="tag"
        :to="url()"
        :active-class="activeClass"
    >
        <slot />
    </router-link>
</template>

<script>
export default {
    props: [
        'to',
        'tag',
        'activeClass',
    ],

    methods: {
        url() {
            const locale = this.$route.params.locale

            if (this.to === '/') return `/${locale}`

            // we strip leading and trailing slashes and prefix
            // the current locale
            return `/${locale}/${this.to.replace(/^\/|\/$/g, '')}`
        }
    }
}
</script>
