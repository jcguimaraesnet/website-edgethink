import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Philosophy from './components/Philosophy';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Philosophy />
        <FinalCTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
