import About from "@/components/About";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WorkExperience from "@/components/WorkExperience";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <About />
        <Grid />
        <Projects />
        <Testimonials />
        <WorkExperience />
        <Footer />
      </div>
    </main>
  );
}
