// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import BCRLogo from './assets/img/img_logo.png'
// import Button from 'react-bootstrap/Button';
import fotoMobil from './assets/img/car01.min.jpg'
import styles from './assets/css/card.module.css'
// import {View} from 'react-native';

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { useEffect, useState } from "react";
// import axios from "axios";

const Cards = () => {
  return (

    <div className="card p-4 my-3 mx-1">
      <img src={fotoMobil} className="car-img pb-3" alt=".." />

      <div>
        <h5 className={styles.textTitle}>manufacture model / type</h5>
        <h4 className={styles.textTitle}>Rp.900000 / hari</h4>
      </div>

      <div>
        <p className={styles.textSubtitle}>lorem</p>
      </div>

      <div>
        <p className={styles.textSubtitle}>
          <span className="fa-solid fa-users"></span>
          9 Orang
        </p>
        <p className={styles.textSubtitle}>
          <i className="fa fa-cog" aria-hidden="true"></i>
          transmission
        </p>
        <p className={styles.textSubtitle}>
          <span className="fa-solid fa-calendar"></span>
          tahun 3000
        </p>
        <a href="./pilih-mobil">
          <button className={styles.Button} style={{width: "100%"}}> Pilih Mobil </button>
        </a>
      </div>

    </div>


  )
}

export default Cards;