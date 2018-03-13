<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <localized-link class="navbar-brand" to="/">
            <img
                width="36"
                height="36"
                src="../assets/logo.png"
                class="d-inline-block align-top mr-2"
            />

            <span class="mr-2">{{$t('app_name')}}</span>
        </localized-link>

        <button
            type="button"
            aria-expanded="false"
            data-toggle="collapse"
            class="navbar-toggler"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <localized-link
                    tag="li"
                    to="products"
                    class="nav-item"
                    active-class="active"
                >
                    <a class="nav-link">
                        {{$t('products')}}
                    </a>
                </localized-link>

                <li class="nav-item">
                    <a class="nav-link" href="#">{{$t('about')}}</a>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Bag</a>
                </li>

                <li class="nav-item dropdown">
                    <a
                        href="#"
                        role="button"
                        id="navbarDropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-toggle="dropdown"
                        class="nav-link dropdown-toggle"
                    >
                        <img
                            class="country-icon as-toggle"
                            :src="icons[currentLocale()]"
                        />
                    </a>

                    <div
                        aria-labelledby="navbarDropdown"
                        class="dropdown-menu dropdown-menu-right"
                    >
                        <router-link
                            v-for="locale in locales"
                            :key="locale.code"
                            :to="`/${locale.code}`"
                            class="dropdown-item"
                        >
                            <img :src="icons[locale.code]" class="country-icon" />
                            <span class="locale-name">{{locale.name}}</span>
                        </router-link>
                </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import enIcon from 'svg-country-flags/svg/gb.svg'
import heIcon from 'svg-country-flags/svg/il.svg'
import jaIcon from 'svg-country-flags/svg/jp.svg'

import { locales } from '../config/i18n'
import LocalizedLink from './LocalizedLink'
import { currentLocale } from '../services/i18n'

export default {
    data() {
        return {
            icons: {
                en: enIcon,
                he: heIcon,
                ja: jaIcon,
            },
            locales,
            currentLocale,
        }
    },

    components: {
        LocalizedLink,
    },
}
</script>


<style scoped>
    .navbar {
        background-color: #181D26;
    }

    .country-icon {
        width: 20px;
        height: auto;
        display: inline-block;
        vertical-align: baseline;
        border: 1px solid #dee2e6;
        box-shadow: 0px 1px 3px rgba(24, 29, 38, 0.1);
    }

    .country-icon.as-toggle {
        margin-top: 5px;
    }

    .locale-name {
        display: inline-block;
        vertical-align: baseline;
    }
</style>
