<template>
    <div class="grow">
        <SectionSeparator />

        <SectionStructure title="Apresentação">
            <p>
                Meu compromisso é entregar software de qualidade, agregando valor ao usuário final e à equipe.
                Desenvolvedor full stack desde 2019, atuando em soluções para empresas do setor público e privado, produtos novos e sistemas legados, arquiteturas monolíticas e de micro-serviços.
                Tenho proficiência em tecnologias como React, Vue e Angular, e em stacks de backend como Laravel e NodeJS, além de experiência com bancos de dados relacionais e não relacionais.
            </p>
            <Actions />
        </SectionStructure>

        <SectionSeparator />

        <SectionStructure title="Experiências">
            <ExperienceCard
                v-for="(xp, index) in experiences.slice(0, 3)"
                :key="index"
                :company="xp.company"
                :locale="xp.locale"
                :ocupation="xp.ocupation"
                :dateRange="xp.dateRange"
                :desc="xp.desc"
                :link="xp.link"
            />

            <div v-if="seeMore">
                <ExperienceCard
                    v-for="(xp, index) in experiences.slice(3)"
                    :key="index"
                    :company="xp.company"
                    :locale="xp.locale"
                    :ocupation="xp.ocupation"
                    :dateRange="xp.dateRange"
                    :desc="xp.desc"
                    :link="xp.link"
                />
            </div>

            <div class="flex justify-center">
                <button @click="toggleSeeMore" class="btn btn-neutral rounded-full flex">
                    {{ seeMore ? 'Ver menos' : 'Ver mais' }}
                </button>
            </div>
        </SectionStructure>

        <SectionSeparator />

        <SectionStructure title="Educação">
            <div class="flex flex-col space-y-4">
                <div v-for="(edu, index) in education" :key="index">
                    <p><b class="font-bold">{{ edu.institution }}</b>: {{ edu.course }}</p>
                    <p class="badge badge-neutral">{{ edu.date }}</p>
                </div>
            </div>
        </SectionStructure>
    </div>
</template>

<script lang="ts" setup>
  import experiences from "./experiences";
  import education from "./education";

  const seeMore = ref<boolean>(false);

  function toggleSeeMore(): void {
    seeMore.value = !seeMore.value;
  }
</script>
