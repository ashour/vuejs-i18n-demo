<template>
    <div>
        <div class="row">
            <div class="col">
                <p class="lead" v-html="$t('lead')" />

                <p class="small text-muted">
                    {{$t('trans_disclaimer')}}
                </p>

                <p v-html="$t('purpose', {
                    article_url: 'https://phraseapp.com/blog/posts/build-an-spa-with-i18n-in-vue-js/',
                    license_url: 'https://github.com/ashour/vuejs-i18n-demo/blob/master/LICENSE',
                })" />
            </div>

            <div class="col">
                <h2 class="mb-3 h5 lead">{{$t('links')}}</h2>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <a href="https://github.com/ashour/vuejs-i18n-demo">
                            {{$t('app_repo')}}
                        </a>
                    </li>

                    <li class="list-group-item">
                        <a href="https://phraseapp.com/blog/posts/build-an-spa-with-i18n-in-vue-js/">
                            {{$t('blog_article')}}
                        </a>
                    </li>

                    <li class="list-group-item">
                        <a href="https://vuejs.org/">{{$t('vue_site')}}</a>
                    </li>

                    <li class="list-group-item">
                        <a href="https://www.youtube.com/watch?v=mWhTvyN0cIM">
                            {{$t('retromancave')}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <hr class="mt-4">

        <p
            class="small text-center mt-3 text-muted"
            v-html="$t('author_credit', { name: 'Mohammad Ashour' })"
        />
    </div>
</template>

<style scoped>
    .list-group-item {
        background-color: transparent;
    }
</style>
