import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { ResumeSection } from "@/components/ResumeSection";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <main className="pt-32">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </div>
  );
}
