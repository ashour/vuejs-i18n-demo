<template>
    <div v-if="uiTranslationsLoaded">
        <slot />
    </div>
</template>

<script>
import Vue from 'vue'

import { setUiLocale, t } from '../services/i18n'

export default {
    name: 'Localizer',

    data() {
        return {
            cachedLocale: '',
            uiTranslationsLoaded: false,
        }
    },

    methods: {
        setLocale(locale) {
            this.uiTranslationsLoaded = false

            setUiLocale(locale)
                .then(() => {
                    Vue.prototype.$t = t

                    this.cachedLocale = locale

                    this.uiTranslationsLoaded = true
                })
                /* eslint-disable no-console */
                .catch(err => console.error(err))
        },
    },

    mounted() {
        this.setLocale(this.$route.params.locale)
    },


    watch: {
        /* eslint-disable object-shorthand */
        '$route'(to) {
            // since we're not using shared state, we reload the page to update
            // all of our components' renders when a new locale is selected
            if (to.params.locale !== this.cachedLocale) {
                this.setLocale(to.params.locale)
            }
        },
    },
}
</script>

