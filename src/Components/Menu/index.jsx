import { useNavigate } from "react-router-dom"
import { HandsPraying, BookOpenText, Crown, Cross, HandHeart } from "@phosphor-icons/react";

function Menu() {

  const navigate = useNavigate();

  function goToSolaFide(){
    navigate("/solafide");
  }



  function goToSolaGratia(){
    navigate("/solagratia");
  }

  function goToSolaScriptura(){
    navigate("/solascriptura");
  }
  
  function goToSoliDeoGloria(){
    navigate("/solideogloria");
  }

  function goToSolusChristus(){
    navigate("/soluschristus");
  }
  
  

  return (
    <div id="navigation">
      <ul>
        <li onClick={goToSolaFide}><HandsPraying size={75} /> <p>Sola Fide</p></li>
        <li onClick={goToSolaGratia}><HandHeart size={75} /><p>Sola Gratia</p></li>
        <li onClick={goToSolaScriptura}><BookOpenText size={75} /> <p>Sola Scriptura</p></li>
        <li onClick={goToSolusChristus}><Cross size={75} /><p>Solus Christus</p></li>
        <li onClick={goToSoliDeoGloria}><Crown size={75} /><p>Soli Deo Gloria</p></li>
      </ul>
    </div>
  )
}

export default Menu
