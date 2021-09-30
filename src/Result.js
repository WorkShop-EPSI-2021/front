import react from "react";
import AppAppBar from "./modules/views/AppAppBar";
import {Pie} from 'react-chartjs-2';


export default function Result() {
  return (
    <div className= "result">
      <h2>Resultats de l'analyse de mail : </h2>
      <div className="result-top">
          <Pie />
      </div>
      <div className="result-advanced">
          <p>suce</p>
          <p>suce 2</p>
          <p>suce 3</p>
          <p>suce 4</p>


      </div>
    </div>
  );
}
