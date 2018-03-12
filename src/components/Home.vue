<template>
    <div>
        <h1 class="border-bottom pb-3 mb-3">{{$t('welcome')}}</h1>

        <div class="row">
            <div class="col">
                <p class="lead" v-html="$t('lead')" />

                <p class="small text-muted">
                    {{$t('trans_disclaimer')}}
                </p>

                <p v-html="$t('purpose')" />
            </div>

            <div class="col">
                <h2 class="mb-3 h5 lead">{{$t('links')}}</h2>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <a href="#">{{$t('app_repo')}}</a>
                    </li>

                    <li class="list-group-item">
                        <a href="#">{{$t('blog_article')}}</a>
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
