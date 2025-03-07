import { ref } from "vue";
import {
  type RouteLocationAsPathGeneric,
  type RouteLocationAsRelativeGeneric,
} from "vue-router";

type TypeLink = {
  label: string;
  to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric;
};

export default function useHeaderHandler() {
  const isScrolled = ref<boolean>(false);

  const links: TypeLink[] = [
    {
      label: "Currículo",
      to: "/",
    },
    // {
    //     label: 'Trabalhos',
    //     to:  'trabalhos'
    // },
    {
      label: "Sobre",
      to: "sobre",
    },
    {
      label: "Feedbacks",
      to: "/feedbacks",
    },
  ];

  function listenPageScroll(): void {
    window.addEventListener("scroll", () => {
      isScrolled.value = window.pageYOffset > 0;
    });
  }

  return {
    listenPageScroll,
    isScrolled,
    links,
  };
}
