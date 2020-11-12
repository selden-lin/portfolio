import React, { useRef, useEffect } from 'react'

import HomeBanner from './components/HomeBanner/HomeBanner'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Intro from './components/Intro/Intro'

function App() {
    const useMountEffect = fun => useEffect(fun, []);
    const introRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const introScroll = () => introRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    const experienceScroll = () => experienceRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    const projectsScroll = () => projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    return (
        <div className="App">
            <Navbar introScroll={introScroll} experienceScroll={experienceScroll} projectsScroll={projectsScroll} />
            <HomeBanner />
            <div ref={introRef}>
                <Intro />
            </div>
            <div ref={experienceRef}>
                <Experience />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
        </div>
    );

}

export default App;
