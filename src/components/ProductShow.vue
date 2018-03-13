<template>
    <page v-if="product">
        <template slot="header">
            <h1 class="d-flex justify-content-between align-items-baseline">
                <span>{{product.title}}</span>

                <span class="added-on text-muted">
                    {{$t('added_on', { date: new Date(product.added_on) })}}
                </span>
            </h1>
        </template>

        <div class="row">
            <div class="col col-md-4">
                <img
                    :alt="product.title"
                    class="product-img rounded"
                    :src="`/static/product-images/${product.image_uri}`"
                />
            </div>

            <div class="col col-md-8">
                <p class="lead">
                    {{$t('product_price', { price: product.price })}}
                </p>

                <p>{{product.description}}</p>
            </div>
        </div>
    </page>
</template>

<script>
import _ from 'lodash'

import Page from './Page'

export default {
    data() {
        return {
            product: null,
        }
    },

    mounted() {
        fetch(`/static/api/${this.$route.params.locale}/products.json`)
            .then(response => response.json())
            .then((products) => {
                this.product = _.find(products, { id: parseInt(this.$route.params.id, 10) })
            })
    },

    components: {
        Page,
    },
}
</script>

<style scoped>
    .added-on {
        font-size: 16px;
        font-weight: normal;
    }

    .product-img {
        height: auto;
        display: block;
        max-width: 300px;
    }
</style>
