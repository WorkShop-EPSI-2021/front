import react, { Fragment, useState, useEffect } from "react";
import AppAppBar from "./modules/views/AppAppBar";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Result() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);
  const path = window.location.pathname;
  const IDPath = path.split("/").at(-1);
  console.log(data);

  useEffect(() => {
    setLoading(true);
    console.log(IDPath, "inside useffedt");
    axios
      .get(`https://cubecesi.online/v1/return?id=${IDPath}`)
      .then((result) => {
        const data = result.data;
        console.log(data);
        if (data.success === true) {
          setData(data.body.result);
          setTotal(data.body.total);
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="result">
      <h2>Resultats de l'analyse de mail : </h2>
      <div>
        {loading ? (
          <Box sx={{ display: "flex", marginRight: "auto" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Fragment>
            <div className="result-top">
              <h3> Le mail est fiable à <span className={`${total > 50 ? "success" : "danger"}`}>{total}%</span></h3>
              <PieChart
                data={data}
                lineWidth={15}
                label={(data) =>
                  `${data.dataEntry.title} : ${data.dataEntry.value}%`
                }
                labelPosition={110}
                labelStyle={{
                  fontSize: "4px",
                  fontWeight: "600",
                }}
                animate={true}
              />
            </div>

            <div className="result-advanced">
              {data.map((oneData) => (
                <div className="result-details">
                 <PieChart
                data={[oneData]}
                lineWidth={50}
                totalValue={25}
                background="#eeeeee"


              />
                  <h3>{oneData.title}</h3>
                  <p className={`${oneData.value > 13 ? "success" : "danger"}`}>{oneData.value}/25</p>
                  {oneData.title === "Positivité" &&
                    (oneData.value > 13 ? (
                      <p>Le message renvoit des ondes positives, il semble donc fiable grâce à cela.</p>
                    ) : (
                      <p>Le message renvoit des ondes négatives, vous devriez vous méfier, c'est une caractéristique des mails frauduleux.</p>
                    ))}
                  {oneData.title === "Orthographe" &&
                    (oneData.value > 13 ? (
                      <p>Il n'y a que très peu de fautes dans le mail, il semble donc ne pas être frauduleux.</p>
                    ) : (
                      <p> Il y a pas mal de fautes dans ce message, vous devriez vous méfier des mails à la syntaxe approximative.  </p>
                    ))}
                  {oneData.title === "Engageant" &&
                    (oneData.value > 13 ? (
                      <p>Le message ne contient pas de phrases d'actions, il ne vous pousse pas à agir, c'est une bonne chose. Il contient des phrases informatives, ça baisse la probabilité d'obtenir des informations de votre part.</p>
                    ) : (
                      <p>Le message vous incite à agir, à effection des actions. C'est une caractéristique forte d'un mail fraduleux, faites attention !</p>
                    ))}
                  {oneData.title === "Alarmant" &&
                    (oneData.value > 13 ? (
                      <p>Le mail ne contient pas de messages suspects utilisés par la plupart des fraudes.</p>
                    ) : (
                      <p>Le message contient des phrases classiques d'arnaques diverses, faites attention !</p>
                    ))}
                </div>
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
