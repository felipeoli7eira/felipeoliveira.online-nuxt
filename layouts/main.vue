<template>
    <main id="layoutMain" class="h-screen max-w-screen-md mx-auto justify-between flex flex-col">
        <Header />
        <NuxtPage />
        <Footer />
    </main>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Geist+Mono:wght@100..900&display=swap');

    * {
        font-family: "Funnel Display", serif;
        font-optical-sizing: auto;
    }

    :root, html[data-theme="light"] {
        --color-fill: 251, 254, 251;
        --color-text-base: 40, 39, 40;
        --color-accent: 0, 108, 172;
        --color-card: 230, 230, 230;
        --color-card-muted: 205, 205, 205;
        --color-border: 236, 233, 233;
    }

    html[data-theme="dark"] {
        --color-fill: 33, 39, 55;
        --color-text-base: 234, 237, 243;
        --color-accent: 255, 107, 1;
        --color-card: 52, 63, 96;
        --color-card-muted: 138, 51, 2;
        --color-border: 171, 75, 8;
    }

    .text-orange-responsive-theme {
        color: rgb(var(--color-accent));
    }

    a {
        transition: all .2s;
    }

    a:hover {
        color: rgb(var(--color-accent));
    }

    .router-link-exact-active, .wave-link {
        color: rgb(var(--color-accent));
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
    }

    html {
        background-image: url(/dots.svg);
    }
</style>

<script lang="ts" setup>
    import 'primeicons/primeicons.css'
</script>
