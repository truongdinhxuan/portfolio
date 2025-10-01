import { HeroContent } from "../shared/components/HeroSection/HeroContent";

export const HeroSection = () => {
  return <section className="relative bg-gray-200 hero-section lg:h-[800px] flex justify-center">
    <div className="left-description"></div>
    <div className="hero-content mt-[29px]">
      <HeroContent/>
    </div>
    <div className="tech-circle"></div>
  </section>
};
