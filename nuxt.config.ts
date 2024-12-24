// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  devtools: { enabled: true },
  gtag: {
    id: 'G-2Q5MKF2WK5'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Felipe Oliveira - Full Stack Software Developer',
      meta: [
        {
          name: 'description',
          content: 'Meu CV online e portfólio. Entre nesse link e tenha acesso ao meu currículo profissional e saiba um pouco mais sobre minha trajetória.'
        },
        {
          property: 'og:title',
          content: 'Felipe Oliveira - CV e portfólio'
        },
        {
          property: 'og:description',
          content: 'Site profissional e portfólio de Felipe Oliveira. Entre e tenha as informações mais atualizadas sobre sua carreira.'
        },
        {
          property: 'og:image',
          content: 'https://avatars.githubusercontent.com/u/49501201?s=400&u=914ffb36563ce4b9a3e2f39d727b1962e025f121&v=4'
        },
        {
          property: 'og:url',
          content: 'https://www.felipeoliveira.online'
        }
      ],
      link: [
        // {
        //   rel: 'icon',
        //   type: 'image/svg+xml',
        //   href: '/logo.svg'
        // }
      ]
    }
  }
})
