import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Blog from "../components/Blog";
import Showcase from "../components/Showcase";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const Home = ({ isEditable }) => {
  return (
    <>
      <section
        className="section header"
        id="header"
        // contentEditable={isEditable}
      >
        <Header />
      </section>
      <section className="section hero_section" id="hero">
        <Hero />
      </section>
      <section className="section brands_section" id="brands">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section" id="what-is">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here" id="future">
        <FutureHere />
      </section>
      <section className="section showcase_section" id="showcase">
        <Showcase />
      </section>
      <section className="section cta_section" id="cta">
        <Cta />
      </section>
      <section className="section blog_section" id="blog">
        <Blog />
      </section>
      <section className="section footer" id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;
