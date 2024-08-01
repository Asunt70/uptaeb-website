import Footer from "./components/globalComponents/footer";
import Navbar from "./components/globalComponents/navbar";
import WelcomeSection from "./components/homeComponents/welcome-section";
import Section from "./components/homeComponents/section";
import UserExpSection from "./components/homeComponents/userExpSection";
import FinalSection from "./components/homeComponents/finalSection";
export default function Home() {
  return (
    <>
    <Navbar/>
    <WelcomeSection/>
    <Section
     id="section1"
     heading="Estudia en la UPTAEB" 
     src="/ImageSection1.jpg" 
     pContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed semper tellus. Fusce convallis, quam a consectetur tincidunt, libero lacus posuere tortor, nec condimentum mi diam quis ligula. Nam pretium euismod neque at iaculis. Aenean turpis orci, varius sed ex ut, volutpat ultricies arcu. Aenean enim libero, commodo et hendrerit non, congue vehicula ligula. Vivamus auctor tempus leo a elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris cursus sed lacus eget mattis. Integer quis sapien nec dui blandit pretium quis eu est. Donec quis orci vel risus facilisis venenatis. Phasellus et arcu blandit, lacinia sem non, pretium lacus.

Sed aliquet imperdiet felis at tempor. Sed sed mauris dui. Pellentesque ultricies dapibus nunc euismod dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nulla turpis, tristique aliquam nisl quis, fermentum ultrices enim. Nullam sed dolor dolor. Integer maximus tortor pulvinar, efficitur est ac, laoreet augue. Ut placerat magna at dui scelerisque volutpat. Vestibulum finibus pulvinar molestie. Vestibulum interdum orci justo, a dictum ligula ultricies at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Duis at facilisis orci. Quisque aliquam euismod nunc at elementum.">
     </Section>
     <UserExpSection/>
    <Section 
     id="section2" 
     heading="Aporta al futuro" 
     src="/ImageSection2.jpg" 
     reverse 
     pContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed semper tellus. Fusce convallis, quam a consectetur tincidunt, libero lacus posuere tortor, nec condimentum mi diam quis ligula. Nam pretium euismod neque at iaculis. Aenean turpis orci, varius sed ex ut, volutpat ultricies arcu. Aenean enim libero, commodo et hendrerit non, congue vehicula ligula. Vivamus auctor tempus leo a elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris cursus sed lacus eget mattis. Integer quis sapien nec dui blandit pretium quis eu est. Donec quis orci vel risus facilisis venenatis. Phasellus et arcu blandit, lacinia sem non, pretium lacus.

Sed aliquet imperdiet felis at tempor. Sed sed mauris dui. Pellentesque ultricies dapibus nunc euismod dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nulla turpis, tristique aliquam nisl quis, fermentum ultrices enim. Nullam sed dolor dolor. Integer maximus tortor pulvinar, efficitur est ac, laoreet augue. Ut placerat magna at dui scelerisque volutpat. Vestibulum finibus pulvinar molestie. Vestibulum interdum orci justo, a dictum ligula ultricies at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Duis at facilisis orci. Quisque aliquam euismod nunc at elementum.">
     </Section>
     <FinalSection/>
    <Footer/>
    </>
  );
}
