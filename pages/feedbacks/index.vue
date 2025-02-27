<template>
    <div id="sobre" class="grow">
        <SectionStructure>
            <p class="mb-4 text-justify">Ao longo dos anos, tive o privilégio de trabalhar com pessoas incríveis, cuja
                parceria e apoio foram fundamentais para o meu crescimento, tanto profissional quanto pessoal. Sou grato
                por cada experiência compartilhada e aprendizado adquirido. Aqui estão alguns depoimentos sobre como foi
                trabalhar comigo.</p>
        </SectionStructure>

        <SectionStructure>
            <p class="italic">Nota: Esta página está em construção. Ainda estou coletando esses depoimentos. Por favor, volte em breve para ver novos depoimentos.</p>
        </SectionStructure>

        <SectionStructure title="Líderes">
            <div v-for="(feedback, index) in feedbacks.leaders" :key="index"
                class="feedback bg-base-200 border p-4 rounded-lg shadow-sm mb-5">
                <p class="text-xl">{{ feedback.name }}</p>
                <p class="text-sm">{{ feedback.ocupation }}</p>

                <p class="my-4 text-sm text-justify">❝ {{ feedback.feedback }} ❞</p>

                <footer class="text-end">
                    <nav>
                        <a :href="feedback.linkedin" traget="_blank">
                            <i class="pi pi-linkedin"></i>
                        </a>
                    </nav>
                </footer>
            </div>
        </SectionStructure>

        <SectionStructure title="Amigos/Colegas">
            <div v-for="(f, index) in feedbacks.friends" :key="index"
                class="feedback bg-base-300 border p-4 rounded-lg shadow-sm mb-5">
                <p class="text-xl">{{ f.name }}</p>
                <p class="text-sm">{{ f.ocupation }}</p>

                <p class="my-4 text-sm text-justify">❝ {{ f.feedback }} ❞</p>

                <footer class="text-end">
                    <nav>
                        <a :href="f.linkedin" traget="_blank">
                            <i class="pi pi-linkedin"></i>
                        </a>
                    </nav>
                </footer>
            </div>
        </SectionStructure>
    </div>
</template>

<style lang="scss" scoped>
.feedback {
    border-color: rgb(var(--color-accent));
}
</style>


<script setup lang="ts">
type Testimony = {
    name: string,
    ocupation: string,
    feedback: string,
    linkedin: string
}

type Feedback = {
    leaders: Testimony[],
    friends: Testimony[],
}

const feedbacks: Feedback = {
    leaders: [
        {
            name: "João Vitor Mendonça",
            ocupation: "Tech Lead",
            feedback: "Durante o período em que liderei os projetos dos quais o Felipe fez parte, sempre obtive ótimos resultados em suas entregas. Ele é um desenvolvedor comprometido, que busca constantemente entregar soluções eficientes e bem estruturadas. Além disso, demonstra grande capacidade de adaptação a novas tecnologias e interesse em compreender a regra de negócio para a qual está desenvolvendo. Em resumo, é um profissional que, sem dúvida, se adaptará rapidamente e extrairá seu máximo potencial em cada desafio.",
            linkedin: "https://www.linkedin.com/in/joaomendonca-dev"
        },
    ],
    friends: [
        {
            name: "Wenderson Fazan",
            ocupation: "Desenvolvedor Back-end | Data Scientist | DevOps",
            feedback: "Durante o período em que trabalhei com o Felipe, pude notar seu grande empenho e curiosidade em aprender. Ele não se limitava apenas ao frontend, sua área principal, mas buscava constantemente entender o funcionamento mais profundo das tecnologias, questionando o porquê das coisas e explorando novas soluções. Além disso, sempre foi extremamente comunicativo e prestativo, o que tornou nossa colaboração em diversos projetos muito produtiva. Sem dúvida, Felipe é um profissional dedicado, que se adapta rapidamente e busca sempre evoluir.",
            linkedin: "https://www.linkedin.com/in/wendersonfazan"
        }
    ],
}
</script>
