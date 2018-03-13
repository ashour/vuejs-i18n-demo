<template>
    <div class="card">
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
</template>

<script>
import LocalizedLink from './LocalizedLink'

export default {
    props: ['product'],

    components: {
        LocalizedLink,
    },
}
</script>

