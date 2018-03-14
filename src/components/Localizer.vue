<template>
    <div v-if="uiTranslationsLoaded">
        <slot />
    </div>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'

import { locales } from '../config/i18n'
import { setUiLocale, t } from '../services/i18n'
import { switchHtmlLocale } from '../services/i18n/util'

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

                    const dir = _.find(locales, l => l.code === locale).dir

                    switchHtmlLocale(
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
        this.setLocale(this.$route.params.locale)
    },

    watch: {
        /* eslint-disable object-shorthand */
        '$route'(to) {
            if (to.params.locale !== this.cachedLocale) {
                this.setLocale(to.params.locale)
            }
        },
    },
}
</script>

