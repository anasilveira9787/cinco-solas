import { useNavigate } from "react-router-dom"
import { HandsPraying, BookOpenText, Crown, Cross, HandHeart } from "@phosphor-icons/react";

function MenuHeader() {

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
    <>
    <ul>
      <li onClick={goToSolaFide}><HandsPraying size={25} /></li>
      <li onClick={goToSolaGratia}><HandHeart size={25} /></li>
      <li onClick={goToSolaScriptura}><BookOpenText size={25} /> </li>
      <li onClick={goToSolusChristus}><Cross size={25} /></li>
      <li onClick={goToSoliDeoGloria}><Crown size={25} /></li>
    </ul>

    </>
  )
}

export default MenuHeader
