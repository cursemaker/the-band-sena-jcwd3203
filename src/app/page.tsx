
import { MainContent } from "./components/main.content";
import { NavBar } from "./components/navbar";
import ContentComponent from "./components/content.component";


export default function Home() {
  return (
    <>
      <NavBar/>
      <MainContent/>
      <ContentComponent/>
    </>    
  );
}

