import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import TimelineNav from "@/components/TimelineNav";
import TopBar from "@/components/TopBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <TimelineNav />
      <main className="max-w-[800px] mx-auto px-6 md:px-8 pt-14">
        <HeroSection />
        <div className="w-full h-px bg-border" />
        <ExperienceSection />
        <div className="w-full h-px bg-border" />
        <SkillsSection />
        <div className="w-full h-px bg-border" />
        <ProjectsSection />
        <div className="w-full h-px bg-border" />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
