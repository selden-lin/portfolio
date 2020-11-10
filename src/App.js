import HomeBanner from './components/HomeBanner/HomeBanner'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Intro from './components/Intro/Intro'

function App() {
    return (
        <div className="App">
            <Navbar />
            <HomeBanner />
            <Intro/>
            <Experience/>
            <Projects/>
        </div>
    );
}

export default App;
