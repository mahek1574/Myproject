import Hero from "../components/Hero";
import ClientLogos from "../components/Clientlogos";
import Services from "../components/Services";
import SeoSection from "../components/SeoSection";
import ProcessSection from "../components/ProcessSection";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import SeoComparison from "../components/SeoComparison";
import Quistion from "../components/Quistion";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main className="w-full overflow-hidden relative">

      <section className="w-full">
        <Hero />
      </section>

  
      <section className="w-full">
        <ClientLogos />
      </section>

  
      <section className="w-full">
        <Services isPreview={true} limit={3} />
      </section>

      <section className="w-full">
        <SeoSection />
      </section>

    
      <section className="w-full">
        <ProcessSection />
      </section>

    
      <section className="w-full">
        <Portfolio isPreview={true} limit={3} />
      </section>


      <section className="w-full">
        <Testimonials />
      </section>

    
      <section className="w-full">
        <SeoComparison />
      </section>

      
      <section className="w-full">
        <Quistion />
      </section>

  
      <section className="w-full">
        <Contact />
      </section>
      
    </main>
  );
};

export default Home;