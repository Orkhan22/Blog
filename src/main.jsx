// import { Imgxx } from "./img"
// // import {Imgs} from "./img"
// import { Mainimg } from "./photo"

// export function Main () {
//   let imgx = Mainimg
//     return (
//         <Imgxx class="main-img" ssss={imgx}></Imgxx>
//   )
// }

// import { Container } from "./main-container";
// import {Button} from "./button"
import {Img} from "./img"
import { MainImgs } from "./photo";
// import { About } from "./about";
export function Main() {
  let Mainimg=MainImgs
  return (
    <main className="main">
     <section className="main-container">
     {/* <Container class="main-container-top">
        Hey there 👋 <br /> I am Amirhossein
      </Container>
      <Container class="main-container-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Container>
    <Button class="main-container-btn" /> */}
    <Img class="main-img" img={Mainimg}></Img>
     </section> 
     {/* <About ></About> */}
    </main>
  );
}
