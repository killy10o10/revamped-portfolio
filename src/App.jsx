import './assets/styles/Main.scss';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <LandingPage />
      </main>
    </>
  );
}

export default App;
