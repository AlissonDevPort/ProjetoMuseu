import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Styles from "./Department.module.css";
import Nav from "../Nav/Nav";

const Department = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams();

  const find = async () => {
    console.log(id);
    const res = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${id}&q=%22%22&hasImage=true`
    ).then((data) => data.json());
    console.log(res);
    const response = await res.objectIDs.map(async (art) => {
      const arts = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${art}`
      ).then((data) => data.json());
      setData((current) => [...current, arts]);
      return arts;
    });
    console.log(response);
    console.log(data);
  };

  useEffect(() => {
    find();
  }, [id]);
  return (
    <div>
      <Nav />
      <input
        className={Styles.search}
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div className={Styles.departs}>
        {data
          .filter((val) => {
            if (searchTerm === "") {
              console.log(data)
              return val;
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              console.log(data)
               return val
            }
          })
          .map((key) => (
            <div className={Styles.items} key={key.objectID}>
              <div className={Styles.img}>
                <a href={`/art/${key.objectID}`}>
                  <img src={key?.primaryImageSmall} />
                </a>
              </div>
              <div className={Styles.name}>{key?.title}</div>
              <div className={Styles.infos}>
                Artist:{key?.artistDisplayName}
                Date:{key?.objectDate}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Department;
