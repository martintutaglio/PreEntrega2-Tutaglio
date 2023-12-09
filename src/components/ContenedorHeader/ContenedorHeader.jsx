
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import particlesConfig from "./particlesjs-config2";
import './ContenedorHeader.css'



const ContenedorHeader = () => {




  const particlesInit = useCallback(async engine => {
      await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
}, []);


  return (
    <>
    
    <div className="container-style">
    <div className="container-title"><h1>Web Design Ideas</h1></div>
    <div className="particles-background">
      
      <Particles
        id="tsparticles"
        options={particlesConfig}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      
    </div>
    
    </div>
    
    </>
  )
}

export default ContenedorHeader