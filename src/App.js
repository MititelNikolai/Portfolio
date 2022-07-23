import './App.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Experiense from './components/experience/Experience'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Hobbies from './components/hobbies/Hobbies'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'


function App() {
  return (

    <div>
      <Header />
      <Nav />
      <About />
      <Experiense />
      <Services />
      <Portfolio />
      <Hobbies />
      <Contact />
      <Footer />
    </div>


  );
}

export default App;
