import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  NewsExpanded,
  News,
} from "./components";
import Publications from './components/Publications';
import DetailedProjects from './components/DetailedProjects';
import Courses from './components/Courses';
import Teaching from './components/Teaching';
import CV from './components/CV';
import Personal from './components/Personal';
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <Router>
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            <Routes>
                <Route path="/" element={
                    <FadeIn transitionDuration={700}>
                        <Main/>
                        <Expertise/>
                        <Timeline/>
                        <News/>
                        <Project/>
                        <Contact/>
                    </FadeIn>
                } />
                <Route path="/publications" element={
                    <FadeIn transitionDuration={700}>
                        <Publications/>
                    </FadeIn>
                } />
                <Route path="/projects" element={
                    <FadeIn transitionDuration={700}>
                        <DetailedProjects/>
                    </FadeIn>
                } />
                <Route path="/courses" element={
                    <FadeIn transitionDuration={700}>
                        <Courses/>
                    </FadeIn>
                } />
                <Route path="/teaching" element={
                    <FadeIn transitionDuration={700}>
                        <Teaching/>
                    </FadeIn>
                } />
                <Route path="/cv" element={
                    <FadeIn transitionDuration={700}>
                        <CV/>
                    </FadeIn>
                } />
                <Route path="/personal" element={
                    <FadeIn transitionDuration={700}>
                        <Personal/>
                    </FadeIn>
                } />
                <Route path="/news" element={
                    <FadeIn transitionDuration={700}>
                        <NewsExpanded/>
                    </FadeIn>
                } />
            </Routes>
            <Footer />
        </div>
    </Router>
    );
}

export default App;