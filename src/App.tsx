import Faq from './components/Faq';
import Features from './components/Features';
import Footer from './components/Footer';
import GettingStarted from './components/GettingStarted';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import HowToInstall from './components/HowToInstall';
import ImportantNote from './components/ImportantNote';
import LoginGuide from './components/LoginGuide';

function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-bg">
      <Header />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Features />
        <GettingStarted />
        <LoginGuide />
        <HowToInstall />
        <ImportantNote />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
