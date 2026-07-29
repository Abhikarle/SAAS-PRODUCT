import HeroButtons from './HeroButtons'
import HeroContent from './HeroContent'
import HeroDashboard from './HeroDashboard'
function Hero() {
  return (
    <section className='min-h-screen flex items-center'>
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <HeroContent />
        <HeroButtons />
      </div>
      <HeroDashboard />
    </section>

  );
};

export default Hero
