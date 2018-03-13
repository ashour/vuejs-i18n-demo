<template>
    <page :header-border="false">
        <template slot="header" class="mt-4">
            <h1 class="text-center display-1">
                {{$t('app_name')}}

                <span class="slogan">
                    <span>{{$t('slogan')}}</span>
                </span>
            </h1>
        </template>

        <featured-products />

        <separator />

        <info />
    </page>
</template>

<script>
import Info from './Info'
import Page from './Page'
import Separator from './Separator'
import FeaturedProducts from './FeaturedProducts'

export default {
    components: {
        Info,
        Page,
        Separator,
        FeaturedProducts,
    },
}
</script>

<style scoped>
    .slogan {
        display: block;
        font-size: 18px;
        font-weight: 100;
        margin-top: 20px;
        position: relative;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }

    .slogan span {
        left: 50%;
        top: -50%;
        padding: 10px;
        display: block;
        position: absolute;
        background-color: #fff;
        transform: translate(-50%, -50%);
    }
</style>

