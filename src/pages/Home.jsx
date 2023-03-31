import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserName } from "../store/slices/userName.slice";
import Ash from '../../public/Ash.png';

const Home = () => {
  const [ name, setName ] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goPokedex = () => {
    dispatch(getUserName(name));
    navigate("/pokedex")
  }

  return (
    <div className="home">
      <div className="home__title-grid">
        <h1>Hello trainer..!</h1>
        <img src={Ash} alt="logo"/>
      </div>
      <p>Give me your name tor start</p>
      <div className="home__button">
      
        <input 
          type="text" 
          value={name}
          placeholder="Your name"
          onChange={ e => setName(e.target.value)}
        />
        <button 
          onClick={() => goPokedex()}>
            Go
        </button>
      </div>
    </div>
  )
}

export default Home
