import Footer from "./components/footer";
import Navbar from "./components/navbar";
import WelcomeSection from "./components/homeComponents/welcome-section";
import Section from "./components/homeComponents/section";
import UserExpSection from "./components/homeComponents/userExpSection";
import FinalSection from "./components/homeComponents/finalSection";
import styles from "./page.module.css"
export default function Home() {
  return (
    <>
    <Navbar/>
    <WelcomeSection/>
    <Section
     id="section1"
     heading="Estudia en la UPTAEB" 
     src="/ImageSection1.jpg" 
     pContent="En la UPTAEB nos esforzamos por aportar la mejor educacion gratuita posible, ofreciendo diversos campos de estudio en distintos niveles academicos, como PNF,
      Licenciatura, TSU, o Ingernieria Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, rerum aut vero eligendi quae aliquam facilis optio autem harum vel
      fugiat dignissimos molestiae necessitatibus ipsum corrupti consequuntur dolore eos tempora?">
     </Section>
     <UserExpSection/>
    <Section 
     id="section2" 
     heading="Aporta al futuro" 
     src="/ImageSection2.jpg" 
     reverse 
     pContent="En la UPTAEB nos esforzamos por aportar la mejor educacion gratuita posible, ofreciendo diversos campos de estudio en distintos niveles academicos, como PNF,
      Licenciatura, TSU, o Ingernieria Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, rerum aut vero eligendi quae aliquam facilis optio autem harum vel
      fugiat dignissimos molestiae necessitatibus ipsum corrupti consequuntur dolore eos tempora?">
     </Section>
     <FinalSection/>
    <Footer/>
    </>
  );
}
