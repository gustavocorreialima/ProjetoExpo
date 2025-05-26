import { ScrollView } from "react-native";
import ProjectCard from "../components/ProjectCard";

export default function Projetos() {
  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#000" }}>
      <ProjectCard
        title="Portifolio Web"
        description="Portifolio web com jogo senha."
        url="https://github.com/gustavocorreialima/Curriculo-portifolio.git"
      />

      <ProjectCard
        title="Gestão de Projetos"
        description="Aplicativo para gerenciar tarefas e projetos com React Native."
        url="https://github.com/seuusuario/gestao-projetos"
      />

      <ProjectCard
        title="Playlist de Músicas"
        description="Interface para organizar e tocar músicas favoritas."
        url="https://github.com/seuusuario/musicas-playlist"
      />
    </ScrollView>
  );
}
