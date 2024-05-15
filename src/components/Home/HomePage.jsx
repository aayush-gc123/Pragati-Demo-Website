import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import About from '../../About/About'
import Slider from '../Slider/Sliders'


const HomePage = () => {

  const images = [
    // to displat images in sliders 
    "https://static.vecteezy.com/system/resources/previews/011/844/757/non_2x/back-to-school-background-with-doodle-light-bulb-and-rocket-pencil-launching-to-space-online-learning-and-web-page-template-digital-education-concept-free-vector.jpg",
    "https://png.pngtree.com/background/20210709/original/pngtree-creative-housing-sun-background-books-education-poster-picture-image_557788.jpg",
    "https://thumbs.dreamstime.com/z/pile-books-white-design-doodles-against-teal-background-digital-composite-89406022.jpg"
      ];
    
  return (
    <div>
<Navbar/>
<Slider images={images}/>
<About/>

    </div>
  )
}

export default HomePage