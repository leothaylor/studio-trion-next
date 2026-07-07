import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Modalidades from "@/components/sections/Modalidades";
import Professores from "@/components/sections/Professores";
import Horarios from "@/components/sections/Horarios";
import Depoimentos from "@/components/sections/Depoimentos";
import Contato from "@/components/sections/Contato";
import Localizacao from "@/components/sections/Localizacao";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Modalidades />
      <Professores />
      <Horarios />
      <Depoimentos />
      <Contato />
      <Localizacao />
    </>
  );
}
