import { useState } from "react";
import chevron from '../../components/ImageSlider/chevron.png'



const ImageSlider = ({ slides }) => {

      const [currentIndex, setCurrentIndex] = useState(0);

      const totalSlides = slides.length;

      const slideStyles = {
            backgroundImage: `url(${slides[currentIndex]})`,
            width: "100%",
            height: "100%",
            borderRadius: "25px",
            backgroundPosition: "center",
            backgroundSize: "cover",
      };

      const sliderStyles = {
            height: "100%",
            position: "relative",
      };
      const leftArrowStyles = {
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)",
            left: "32px",
            fontSize: "45px",
            color: "black",
            zIndex: 1,
            cursor: "pointer",
      };
      const rightArrowStyles = {
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)rotate(180deg)",
            right: "32px",
            fontSize: "45px",
            color: "black",
            zIndex: 1,
            cursor: "pointer",

      };
      const currentIndexStyles = {
            position: 'absolute',
            fontSize: "22px",
            color: "white",
            zIndex: 1,
            bottom: "5%",
            right: "50%",

      }

      //On creer une fonction qui regarde si notre prochaine slide est la premiere et ds les deux cas on fais un -1 en implémentant le résultat dans notre index
      const goToPrevious = () => {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
      };

      const goToNext = () => {
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
      };

      //Si une seule photo est disponible ne rien afficher
      const soloPicture = () => (totalSlides <= 1) ? null : <span>{currentIndex + 1} / {totalSlides}</span>


      console.log()
      return (
            <div style={sliderStyles}>
                  <div onClick={goToPrevious} style={leftArrowStyles} ><img src={chevron} alt="precedent" draggable='false'></img></div>
                  <div onClick={goToNext} style={rightArrowStyles} ><img src={chevron} alt="suivant" draggable='false'></img></div>
                  <div style={slideStyles} draggable='false'></div>
                  <div style={currentIndexStyles}>{soloPicture()}</div>
            </div >
      )
}
export default ImageSlider;

