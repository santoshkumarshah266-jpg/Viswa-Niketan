import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import About from './components/About';
import Admissions from './components/Admissions';
import FeeStructure from './components/FeeStructure';
import StudentLife from './components/StudentLife';
import StudentOfTheYear from './components/StudentOfTheYear';
import TeacherTeams from './components/TeacherTeams';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useIsMobile from './hooks/useIsMobile';

function App() {
  const isMobile = useIsMobile();

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Stats />
          <About />
          <Programs />
          <FeeStructure isMobile={isMobile} />
          <Admissions />
          <StudentLife />
          <StudentOfTheYear isMobile={isMobile} />
          <TeacherTeams />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
