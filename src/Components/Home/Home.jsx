import React, { useEffect, useState } from "react";
import american from "../../Assets/american.jpg";
import ancient from "../../Assets/ancient.png";
import africa from "../../Assets/africa.jpg";
import armor from "../../Assets/armor.jpg";
import asia from "../../Assets/asia.jpg";
import cloister from "../../Assets/cloister.jpg";
import costume from "../../Assets/costume.jpg";
import drawing from "../../Assets/drawing.jpg";
import egypt from "../../Assets/egypt.jpg";
import europa from "../../Assets/europa.jpg";
import greek from "../../Assets/greek.jpg";
import islamic from "../../Assets/islamic.jpg";
import library from "../../Assets/library.jpg";
import loud from "../../Assets/loud.jpg";
import medieval from "../../Assets/medieval.jpg";
import music from "../../Assets/music.jpg";
import photo from "../../Assets/photo.jpg";
import robert from "../../Assets/robert.jpg";
import sculpt from "../../Assets/sculpt.jpg";
import styles from "./Home.module.css";
import Nav from "../Nav/Nav";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      id: 1,
      src: ancient,
      departament: 1,
      name: "Ancient Near Eastern Art",
    },
    {
      id: 2,
      src: american,
      departament: 3,
      name: "American Decorative Arts",
    },
    {
      id: 3,
      src: africa,
      departament: 4,
      name: "Arts of Africa, Oceania, and the Americas",
    },
    { id: 4, src: greek, departament: 5, name: "Greek and Roman Art" },
    {
      id: 5,
      src: armor,
      departament: 6,
      name: "Arms and Armor",
    },
    {
      id: 6,
      src: asia,
      departament: 7,
      name: "Asian Art",
    },
    { id: 7, src: cloister, departament: 8, name: "The Cloisters" },
    { id: 8, src: costume, departament: 9, name: "The Costume Institute" },
    { id: 9, src: drawing, departament: 10, name: "Drawings and Prints" },
    {
      src: egypt,
      departament: 11,
      name: "Egyptian Art",
    },
    { id: 10, src: europa, departament: 12, name: "European Paintings" },
    { id: 11, src: islamic, departament: 13, name: "Islamic Art" },
    { id: 12, src: library, departament: 14, name: "The Libraries" },
    { id: 13, src: loud, departament: 15, name: "Mordern Art" },
    ,
    { id: 13, src: medieval, departament: 15, name: "Medieval Art" },
    { id: 14, src: music, departament: 16, name: "Musical Instruments" },
    { id: 15, src: photo, departament: 17, name: "Photographs" },
    {
      id: 16,
      src: robert,
      departament: 19,
      name: "The Robert Lehman Collection",
    },
    {
      id: 17,
      src: sculpt,
      departament: 21,
      name: "European Sculpture and Decorative Arts",
    },
  ];

  return (
    <div>
      <Nav />
      <section className={styles.mainsec}>
        <input className={styles.search}
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div className={styles.grid}>
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((key) => (
              <div className={styles.content} key={key.id}>
                <div className={styles.img}>
                  <a href={`/department/${key.departament}`}>
                    <img src={key?.src} />
                  </a>
                </div>
                <div className={styles.body}>{key?.name}</div>
              </div>
            ))}
        </div>
      </section>{" "}
    </div>
  );
};

export default Home;
