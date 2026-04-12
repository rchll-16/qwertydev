import { Suspense, lazy } from 'react';
import { Navbar, GalaxyBackground, Footer } from './features/layout';

const Hero = lazy(() => import('./features/hero'));
const About = lazy(() => import('./features/about'));
const Projects = lazy(() => import('./features/projects'));
const Contact = lazy(() => import('./features/contact'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
  </div>
);

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;