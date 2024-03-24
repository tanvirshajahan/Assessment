import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import './App.css'
import NavbarComp from './components/NavBarComponent';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleResize();
  }, []);
  return (
    <>
      <div className="content">
       <NavbarComp isMobile={isMobile}/>
      </div>
      </> 
  )
}

export default App
