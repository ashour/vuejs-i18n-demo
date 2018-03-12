<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <a class="navbar-brand" href="#">
            <img
                width="36"
                height="36"
                src="../assets/logo.png"
                class="d-inline-block align-top mr-2"
            />

            <span class="mr-2">{{$t('app_name')}}</span>
        </a>

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
                <li class="nav-item active">
                    <a class="nav-link" href="#">{{$t('products')}}</a>
                </li>

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
                            Language
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
                                {{locale.name}}
                            </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { locales } from '../config/i18n'

export default {
    data() {
        return {
            locales,
        }
    },
}
</script>


<style scoped>
    .navbar {
        background-color: #181D26;
    }
</style>
