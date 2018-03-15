<template>
    <div id="app" class="app-wrapper">
        <localizer>
            <navbar />

            <main class="container" role="main">
                <router-view/>
            </main>
        </localizer>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import Localizer from './components/Localizer'

export default {
    name: 'App',

    components: {
        Localizer,
        navbar: Navbar,
    },
}
</script>

<style scoped>
    .app-wrapper {
        margin-top: 85px;
    }
</style>
