<template>
    <div v-if="uiTranslationsLoaded">
        <slot />
    </div>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'

import { locales } from '../config/i18n'
import { switchDocumentLocale } from '../services/i18n/util'
import { setUiLocale, t, currentLocale } from '../services/i18n'

export default {
    data() {
        return {
            uiTranslationsLoaded: false,
        }
    },

    methods: {
        set(locale) {
            this.uiTranslationsLoaded = false

            setUiLocale(locale)
                .then(() => {
                    Vue.prototype.$t = t

                    this.uiTranslationsLoaded = true

                    const { dir } = _.find(locales, l => l.code === locale)

                    switchDocumentLocale(
                        locale,
                        dir,
                        {
                            withRTL: [
                                '/static/styles/vendor/GhalamborM/bootstrap4-rtl.css',
                                '/static/styles/rtl.css',
                            ],
                        },
                    )
                })
                /* eslint-disable no-console */
                .catch(err => console.error(err))
        },
    },

    mounted() {
        this.set(this.$route.params.locale)
    },

    watch: {
        /* eslint-disable object-shorthand */
        '$route'(to) {
            if (to.params.locale !== currentLocale()) {
                this.set(to.params.locale)
            }
        },
    },
}
</script>
