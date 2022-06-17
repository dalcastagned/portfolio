import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import GlobalStyle from './styles/globalStyles';
import { darkTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>
  );
}

export default App;
