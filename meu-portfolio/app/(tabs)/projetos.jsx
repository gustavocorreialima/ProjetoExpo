import { ScrollView } from "react-native";
import ProjectCard from "../components/ProjectCard";

export default function Projetos() {
  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#000" }}>
      <ProjectCard title="Projeto 1" description="Descrição do projeto 1" />
      <ProjectCard title="Projeto 2" description="Descrição do projeto 2" />
    </ScrollView>
  );
}