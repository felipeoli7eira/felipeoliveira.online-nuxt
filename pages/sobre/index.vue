<template>
  <div id="about">
    <SectionStructure title="Visão profissional">
      <p class="mb-4 text-justify">
        Sou programador full stack desde 2019, atuando com as melhores práticas de
        codificação, padrões, tecnologias e arquiteturas de sistemas para não
        simplesmente ter um conhecimento generalista e conseguir entregar
        tarefas, mas ser um profissional que <strong>entrega excelentes experiências de ponta a ponta</strong>.
      </p>

      <!-- <p class="mb-4 text-justify">
        Não sou apaixonado por tecnologia como você deve estar acostumado a ler em 10/10 perfis de profissionais por ai
        mas aprendi a gostar e adoro o que faço. Eu realmente gosto de entregar excelêntes experiências mais do que
        construir software.
      </p> -->

      <p class="mb-4 text-justify">
        Possuo experiência construindo aplicações no setor público e privado com as tecnologias
        mais atuais do mercado como React, Vue, Angular, Laravel, Python, Docker, Ionic entre outras.
        <!-- Tenho expertise para aprender novas tecnologias, principalmente quando posso “aprender fazendo”. -->
      </p>

      <p class="text-justify">
        Flexível e adaptável, desempenho minhas atividades sempre com o máximo de
        cuidado com o que será entregue, pensando sempre a nível de equipe e
        usuário final, desde a nomeação de uma variável autodescritiva até a
        entrega concreta e refinada do produto final.
      </p>
    </SectionStructure>

    <SectionStructure title="Tecnologias">
      <p>
        Essas são as tecnologias que possuo experiências/familiaridade/domínio
        atualmente:
      </p>

      <div v-for="(item, index) in techs" :key="index" class="my-5">
        <h3 class="text-3xl">{{ item.category }}</h3>

        <div class="flex flex-wrap gap-2 mt-3">
          <p class="badge badge-ghost font-[400]" v-for="(value, valueIndex) in item.values" :key="valueIndex">{{ value
            }}</p>
        </div>
      </div>

      <p class="mb-4">
        Possuo vivência com SCRUM, tenho conhecimento no uso de plataformas como github, gitlab, bitbucket e azure.
        Tenho experiência e familiaridade com arquitetura de microsserviços e preparação de ambientes de desenvolvimento
        com Docker.
      </p>

      <p>Atualmente estou estudando Go lang e Nest :)</p>
    </SectionStructure>
  </div>
</template>

<script lang="ts" setup>
type Techs = {
  category: string;
  values: string[];
};

const techs: Techs[] = [
  {
    category: "Front-end",
    values: ["JavaScript / TypeScript", "React / Next", "Vue / Nuxt", "Angular", "DaisyUI", "Tailwind", "HTML", "CSS / SCSS", "Bootstrap"],
  },
  {
    category: "Back-end",
    values: ["PHP / Laravel", "Python", "Node / Express / Nest", "Go"],
  },
  {
    category: "Mobile",
    values: ["IONIC / Capacitor"],
  },
  {
    category: "Bancos de dados",
    values: ["MySQL / MariaDB", "MongoDB", "FireBase", "SQL Server", "PostgreSQL", "Redis", "SQLite"],
  },
  {
    category: "Outros",
    values: ["Git", "Docker / Docker Compose", "Apache NiFi", "Kogito"],
  },
];
</script>
