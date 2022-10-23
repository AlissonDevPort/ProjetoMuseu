import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Styles from "./Art.module.css";
import Nav from "../Nav/Nav";

const Art = () => {
  const { artId } = useParams();
  const [data, setData] = useState([]);

  const artes = async () => {
    const res = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    ).then((data) => data.json());
    console.log(res);
    setData(res);
  };
  useEffect(() => {
    artes();
  }, [artId]);

  return (
    <div>
      <Nav/>
      <div className={Styles.conteudog}>
        <div className={Styles.conteudo}>
          <div className={Styles.work}>
            <div className={Styles.wTitle}>
              <h1> {data.title}</h1>
            </div>

            <h2>
              Artist:{" "}
              <a
                href={`https://www.metmuseum.org/art/collection/search/${artId}`}
              >
                {data.artistDisplayName}
              </a>{" "}
            </h2>

            <div>Department: {data.department}</div>
            <div>Repository: {data.repository}</div>
            <div>Culture: {data?.culture}</div>
            <div>{data.objectDate}</div>
          </div>{" "}
          <div className={Styles.primaryImg}>
            <img className={Styles.primary} src={data.primaryImage} alt="" />
            <p className={Styles.txt}>{data.creditLine}</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Art;
