// src/app/ourstory/page.js
import Hero from '../../components/ourstory/Hero';
import Mission from '../../components/ourstory/Mission';
import Story from '../../components/ourstory/Story';
import Family from '../../components/ourstory/Family';
import Team from '../../components/ourstory/Team';
import Feedback from '../../components/ourstory/Feedback';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function OurStory() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
      <Story />
      <Family />
      <Team />
      <Feedback />
      <Footer />
    </div>
  );
}
