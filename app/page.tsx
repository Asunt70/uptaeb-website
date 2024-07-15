import Footer from "./components/footer";
import Navbar from "./components/navbar";
import WelcomeSection from "./components/welcome-section";
import Section from "./components/section";
import styles from "./page.module.css"
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <WelcomeSection></WelcomeSection>
    <Section heading="Un lugar con futuro" src="/ImageSection1.jpg"></Section>
    <Section heading="un nuevo mundo" src="/ImageSection2.jpg"></Section>
    <Footer></Footer>
    </>
  );
}
