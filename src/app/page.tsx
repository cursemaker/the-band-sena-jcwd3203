import Image from "next/image";
import styles from "./page.module.css";
import { MainContent } from "./components/main.content";
import { NavBar } from "./components/navbar";
import { Members } from "./components/members.content";


export default function Home() {
  return (
    <>
      <NavBar/>
      <MainContent/>
      <Members/>
    </>    
  );
}

