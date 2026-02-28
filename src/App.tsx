import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/Aboutme/About';
import AI_Projects_Details from './component/projects/AI_Project_Details';
import Black from './component/Black';
import ContactMe from './component/contact/Contact';
import ContactInput from './component/contact/ContactInput';
// import Game from './component/Game';
import Hero from './component/Hero';
import Project from './component/projects/Project';
import ChatBotIcon from './component/ui/ChatBotIcon';
import Navigation from './component/navigation/Navigation';
import ChatBot from './component/chatbot/ChatBot';
import AI_Projects from './component/projects/AI_Projects';
import VrReal from './component/Aboutme/VrReal';
import Kaveen from './component/contact/Kaveen';


function HomePage() {
  return (
    <div>
      <div className='z-[100]'>
        <Navigation/>
      </div>

      <section id="home">
        <Hero />
      </section>

      <div className="fixed bottom-0 left-8 lg:bottom-2 lg:left-15 z-[9999]">
        <ChatBotIcon/>
      </div>

      <section id="carrier">
        <div style={{ position: 'relative', zIndex: 50 }}>
          <Black />
        </div>
      </section>

      <section id="frontend-projects">
        <div style={{ position: 'relative', zIndex: 51 }}>
          <Project />
        </div>
      </section>

      <section id="ai-projects">
        <div style={{ position: 'relative', zIndex: 50 }}>
          <AI_Projects />
        </div>

        <div style={{ position: 'relative', zIndex: 50 }}>
          <AI_Projects_Details />
        </div>
      </section>

      <section id="about-me">
        <div style={{ position: 'relative', zIndex: 50 }}>
          <About />
        </div>

        {/* <div style={{ position: 'relative', zIndex: 50 }}>
          <Game />
        </div> */}
        <div style={{ position: 'relative', zIndex: 50 }}>
            <VrReal/>
        </div>
      </section>

      <section id="contact-me">
        <div style={{ position: 'relative', zIndex: 50 }}>
          <ContactMe />
        </div>

        <div style={{ position: 'relative', zIndex: 50 }}>
          <ContactInput />
        </div>

        <div style={{ position: 'relative', zIndex: 50 }}>
          <Kaveen />
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/carrier" element={<Black />} />
        <Route path="/frontend-projects" element={<Project />} />
        <Route path="/ai-projects" element={<AI_Projects_Details />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/contact-me" element={<ContactInput />} />
      </Routes>
    </Router>
  );
}

export default App;