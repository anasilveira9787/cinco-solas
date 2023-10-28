import { useNavigate } from "react-router-dom"
import { FlowerTulip } from "@phosphor-icons/react";
import MenuHeader from "../MenuHeader";

function Header() {

  const navigate = useNavigate();

  function goToHome(){
    navigate("/");
  }



  return (
    <header>
              <nav onClick={goToHome}>

                    <FlowerTulip size={50} color="hotpink" weight="duotone" /> 
                    <span>Home</span>

                </nav>
               
                <MenuHeader/>
                <span>Os 5 Solas da Reforma Protestante</span>
    </header>

  )
}

export default Header
