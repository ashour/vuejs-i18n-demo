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

                <localized-link
                    tag="li"
                    to="about"
                    class="nav-item"
                    active-class="active"
                >
                    <a class="nav-link">
                        {{$t('about')}}
                    </a>
                </localized-link>
            </ul>

            <ul class="navbar-nav ml-auto">
                <locale-switcher />
            </ul>
        </div>
    </nav>
</template>

<script>
import LocalizedLink from './LocalizedLink'
import LocaleSwitcher from './LocaleSwitcher'

export default {
    components: {
        LocalizedLink,
        LocaleSwitcher,
    },
}
</script>


<style scoped>
    .navbar {
        background-color: #181D26;
    }
</style>
