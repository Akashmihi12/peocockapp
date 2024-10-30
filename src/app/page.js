import Hero from '../components/home/Hero';
import GuidingPrinciples from '../components/home/GuidingPrinciples';
import Empowering from '../components/home/Empowering';
import Rooted from '../components/home/Rooted';
import Protecting from '../components/home/Protecting';
import Communities from '../components/home/Communities';
import Crafted from '../components/home/Crafted';
import Joinus from '../components/home/Joinus';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GuidingPrinciples />
      <Empowering />
      <Rooted />
      <Protecting />
      <Communities />
      <Crafted />
      <Joinus />
      <Footer />
    </div>
  );
}
