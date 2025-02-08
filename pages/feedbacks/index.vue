<template>
    <div id="sobre" class="grow">
        <SectionStructure title="">
            <p class="mb-4 text-justify">Ao longo dos anos, tive o privilégio de trabalhar com pessoas incríveis, cuja parceria e apoio foram fundamentais para o meu crescimento, tanto profissional quanto pessoal. Sou grato por cada experiência compartilhada e aprendizado adquirido. Aqui estão alguns depoimentos sobre como foi trabalhar comigo.</p>
        </SectionStructure>

        <!-- <SectionSeparator /> -->

        <SectionStructure title="">
            <div v-for="(feedback, index) in feedbacks" :key="index" class="feedback bg-base-300 border p-4 rounded-lg shadow-sm mb-5">
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
    </div>
</template>

<style lang="scss" scoped>
    .feedback {
        border-color: rgb(var(--color-accent));
    }
</style>


<script setup lang="ts">
    type Feedback = {
        name: string,
        ocupation: string,
        feedback: string,
        linkedin: string
    }

    const feedbacks: Feedback[] = [
        {
            name: "João Vitor Mendonça",
            ocupation: "Tech Lead",
            feedback: "Durante o período em que liderei os projetos dos quais o Felipe fez parte, sempre obtive ótimos resultados em suas entregas. Ele é um desenvolvedor comprometido, que busca constantemente entregar soluções eficientes e bem estruturadas. Além disso, demonstra grande capacidade de adaptação a novas tecnologias e interesse em compreender a regra de negócio para a qual está desenvolvendo. Em resumo, é um profissional que, sem dúvida, se adaptará rapidamente e extrairá seu máximo potencial em cada desafio.",
            linkedin: "https://www.linkedin.com/in/joaomendonca-dev"
        }
    ]
</script>
