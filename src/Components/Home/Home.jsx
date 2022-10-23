import React, { useState, useEffect } from "react";
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
  return (
    <div>
      <Nav />
      <section className={styles.mainsec}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/1">
                <img src={american} alt="" />
              </a>
            </div>
            <div className={styles.body}>American Decorative Arts</div>
          </div>{" "}
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/3">
                <img src={ancient} alt="" />
              </a>
            </div>
            <div className={styles.body}>Ancient Near Eastern Art</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/4">
                <img src={africa} alt="" />
              </a>
            </div>
            <div className={styles.body}>
              Arts of Africa, Oceania, and the Americas
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/5">
                <img src={greek} alt="" />
              </a>
            </div>
            <div className={styles.body}>Greek and Roman Art</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/6">
                <img src={armor} alt="" />
              </a>
            </div>
            <div className={styles.body}>Arms and Armor</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/7">
                <img src={asia} alt="" />
              </a>
            </div>
            <div className={styles.body}>Asian Art</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/8">
                <img src={cloister} alt="" />
              </a>
            </div>
            <div className={styles.body}>The Cloisters</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/9">
                <img src={costume} alt="" />
              </a>
            </div>
            <div className={styles.body}>The Costume Institute</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/10">
                <img src={drawing} alt="" />
              </a>
            </div>
            <div className={styles.body}>Drawings and Prints</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/11">
                <img src={egypt} alt="" />
              </a>
            </div>
            <div className={styles.body}>Egyptian Art</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/12">
                <img src={europa} alt="" />
              </a>
            </div>
            <div className={styles.body}>European Paintings</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/13">
                <img src={islamic} alt="" />
              </a>
            </div>
            <div className={styles.body}>Islamic Art</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/14">
                <img src={library} alt="" />
              </a>
            </div>
            <div className={styles.body}>The Libraries</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/15">
                <img src={loud} alt="" />
              </a>
            </div>
            <div className={styles.body}>Mordern Art</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/16">
                <img src={medieval} alt="" />
              </a>
            </div>
            <div className={styles.body}>Medieval Art</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/17">
                <img src={music} alt="" />
              </a>
            </div>
            <div className={styles.body}>Musical Instruments</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/18">
                <img src={photo} alt="" />
              </a>
            </div>
            <div className={styles.body}>Photographs</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/19">
                <img src={robert} alt="" />
              </a>
            </div>
            <div className={styles.body}>The Robert Lehman Collection</div>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <a href="/department/21">
                <img src={sculpt} alt="" />
              </a>
            </div>
            <div className={styles.body}>
              European Sculpture and Decorative Arts
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Home;
