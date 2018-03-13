<template>
    <page :header-border="false">
        <template slot="header">{{$t('our_products')}}</template>

        <p class="lead">{{$t('product_index_lead')}}</p>

        <div class="card-columns mb-4">
            <div
                v-for="product in products"
                class="card"
                :key="product.id"
            >
                <img
                    class="card-img-top"
                    :alt="product.title"
                    :src="`/static/product-images/${product.image_uri}`"
                />

                <div class="card-body">
                    <h5 class="card-title">{{product.title}}</h5>

                    <p class="card-text small text-muted">
                        {{$t('added_on', { date: new Date(product.added_on) })}}
                    </p>

                    <p class="card-text">
                        {{product.description}}
                    </p>

                    <p class="card-text lead">
                        {{$t('product_price', { price: product.price })}}
                    </p>

                    <localized-link
                        class="btn btn-primary"
                        :to="`products/${product.id}`"
                    >
                        {{$t('view_product_details')}}
                    </localized-link>
                </div>
            </div>
        </div>
    </page>
</template>

<script>
import Page from './Page'
import LocalizedLink from './LocalizedLink'

export default {
    data() {
        return {
            products: [],
        }
    },

    mounted() {
        fetch(`/static/api/${this.$route.params.locale}/products.json`)
            .then(response => response.json())
            .then((products) => { this.products = products })
    },

    components: {
        Page,
        LocalizedLink,
    },
}
</script>
