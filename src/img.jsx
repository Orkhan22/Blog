// export function Imgxx(props) {
//   let imgs = props.ssss;
//   return imgs.map((element, index) => (

//     <img className={element.class} src={element.src} key={index} alt="" />
 
 
 
//     )
  
  
//   );
// }


export function Img(props) {
  let imgs=props.img
return (
  imgs.map((element,index)=>(
          <img className={element.class} src={element.src} key={index} alt="" />
      ))


  )
}