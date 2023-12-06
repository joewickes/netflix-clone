import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import Scroller from '../components/Scroller';
import InfoCard from '@/components/InfoCard';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <div>
        {/* Header */}
        <Header />

        {/* Hero Section (HeroCard) */}
        <HeroCard />

        {/* Scroller (by section with TitleCard of individual, and {/* InfoCard (overlay) */}
        <Scroller />

        {/* InfoCard (overlay) */}
        <InfoCard />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
