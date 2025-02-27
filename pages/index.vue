<template>
    <div class="grow">
        <SectionSeparator />

        <SectionStructure title="Apresentação">
            <p>Desenvolvedor <b>full stack</b> desde 2019, atuando em projetos do setor público e privado, produtos novos e sistemas legados, especialista em entregar soluções completas de ponta a ponta que realmente agregam valor. Perfil autodidata e prático, sempre buscando o aprimoramento das habilidades enquanto entrega sistemas de alta qualidade que geram impacto positivo para o usuário final.</p>
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
