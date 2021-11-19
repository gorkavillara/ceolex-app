import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeHero from "../components/Home/HomeHero";
import HomeReclamaciones from "../components/Home/HomeReclamaciones";
import HomeColaborador from "../components/Home/HomeColaborador";
import HomeNovedades from "../components/Home/HomeNovedades";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="home page">
        <HomeHero />
        <HomeReclamaciones />
        <HomeColaborador />
        <HomeNovedades />
      </div>
    </div>
  )
}
