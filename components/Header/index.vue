<template>
    <header :class="{'backdrop-blur-md': isScrolled}" class="flex flex-col space-y-4 md:flex-row items-center justify-between p-7 sticky top-0 z-50">
        <h1 class="font-bold text-3xl">Felipe A. Oliveira</h1>
        <nav class="space-x-5 flex items-center">
            <RouterLink v-for="(link, index) in links" :key="index" :to="link.to">{{ link.label }}</RouterLink>
        </nav>
        <HandlerTheme />
    </header>
</template>

<script lang="ts" setup>
    import useHeaderHandler from './handler'
    import { onMounted } from 'vue'

    const {
        listenPageScroll,
        isScrolled,
        links
    } = useHeaderHandler()

    onMounted(listenPageScroll)
</script>
