<template>
    <div class="tinted">
        <div class="tinted__content">
            <page>
                <template slot="header">
                    <h1>{{$t('welcome')}}</h1>
                </template>


                <info />
            </page>
        </div>
    </div>
</template>

<script>
import Info from './Info'
import Page from './Page'

export default {
    components: {
        Info,
        Page,
    },
}
</script>

<style scoped>
    .tinted {
        position: relative;
        padding: 1rem;
        background-size: cover;
        border-radius: 10px;
        background: url('/static/kanagawa.jpg') no-repeat;
    }

    .tinted:after {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        content: ' ';
        display: block;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.92);
    }

    .tinted__content {
        z-index: 20;
        position: relative;
    }
</style>
