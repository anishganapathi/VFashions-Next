import AssistanceCta from "@/components/assitanceCta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import TestimonialsSection from "@/components/testimonialsSection";
import WhyCompany from "@/components/whyCompany";




export default function Home() {
  return (
    <div className="p-0 m-0">
      
      <Hero />
      <WhyCompany />
      <AssistanceCta />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
