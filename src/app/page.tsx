import Banner from "@/components/Banner/Banner";
import FindDoctor from "@/components/FindDoctor/FindDoctor";
import Navbar from "@/components/MenuBar/Navbar";
import Results from "@/components/Results/Results";
import Container from "@/components/Container/Container";
import Service from "@/components/Service/Service";
import Team from "@/components/Team/Team";
import Testimonial from "@/components/Testimonial/Testimonial";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <FindDoctor />
      <Results />
      <Container />
      <Service />
      <Team />
      <Testimonial />
      {/* <Subscribe />
      <Footer /> */}
    </div>
  );
}
