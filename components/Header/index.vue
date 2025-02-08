<template>
    <header class="flex flex-col space-y-4 md:flex-row items-center justify-between p-7">
        <h1 class="font-bold text-3xl">Felipe A. Oliveira</h1>
        <nav class="space-x-5 flex items-center">
            <RouterLink v-for="(link, index) in links" :key="index" :to="link.to">{{ link.label }}</RouterLink>
        </nav>
        <HandlerTheme />
    </header>
</template>

<script lang="ts" setup>
    import { type RouteLocationAsPathGeneric, type RouteLocationAsRelativeGeneric } from 'vue-router'

    type TypeLink = {
        label: string,
        to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric,
    }

    const links: TypeLink[] = [
        {
            label: 'Currículo',
            to:  '/'
        },
        // {
        //     label: 'Trabalhos',
        //     to:  'trabalhos'
        // },
        {
            label: 'Sobre',
            to:  'sobre'
        },
        // {
        //     label: "Feedbacks",
        //     to: "/feedbacks"
        // }
    ]
</script>
