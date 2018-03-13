<template>
    <div class="featured-products">
        <h2 class="h3">{{$t('featured')}}</h2>

        <div class="card-deck">
            <product-card
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard'

export default {
    data() {
        return {
            products: [],
        }
    },

    mounted() {
        fetch(`/static/api/${this.$route.params.locale}/products.json`)
            .then(response => response.json())
            .then((products) => {
                this.products = products.filter(p => p.featured)
            })
    },

    components: {
        ProductCard,
    },
}
</script>

<style scoped>
    .featured-products {
        margin-bottom: 40px;
    }
</style>
