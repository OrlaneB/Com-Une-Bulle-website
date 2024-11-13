import Image from "next/image";
import styles from "./page.module.css";

import Header from "./components/Header";
import Newsletter from "./components/Newsletter";

import "./globals.css"
import "./styles/Homepage.css"
import GridPrestations from "./components/GridPrestations";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id="Homepage">
      <Header />

      <GridPrestations />

      <div id="intro">
        <h1>L'agence qui fait <br/> éclore ton business</h1>
        <p>Communication - Administratif - Réseau de professionnels</p>
        <button className="pink">Découvre comment je peux t'aider</button>
      </div>

      <div id="services">
        <div>
          <h2>Les services Com'Une Bulle</h2>
          <p>On identifie ensemble tes forces et axes d'amélioration.<br/>On crée un plan d'action sur-mesure.<br/>Tu rencontres des prestataires fiables et de qualité.<br/>Tu progresses à ton rythme, en toute sérénité.<br/>On reste en contact régulierpour ajuster et te soutenir tout au long du chemin.</p>
          <button className="blue">Je prends RDV</button>
        </div>

        <img src="/images/img1.jpg" alt="Femmes travaillant ensemble" />
      </div>

      <Newsletter />

      <div id="reseau">
        <img src="/images/img2.jpg" className="round" alt="Deux femmes qui travaillent ensemble"/>

        <div>
          <h2>Une communauté, un réseau</h2>
          <p>L’agence Com’Une Bulle, c’est un accès à un réseau de professionnels garantis et approuvés  pour faire grandir ton entreprise en confiance.C’est aussi une communauté d’entrepreneurs  qui se soutiennent pour faire évoluer ton réseau de clients et de partenaires.</p>
          <button className="blue">Réseau membre</button>
          <button className="pink" style={{marginLeft:"15px"}}>Contact</button>
        </div>
      </div>

      <Footer />
      
    </div>
  );
}
