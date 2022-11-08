import { Redirect, useParams } from "react-router-dom";
import { locationList } from '../../datas/locationList'
import ImageSlider from '../../components/ImageSlider/imageSlider'
import Rating from '../../components/Rating/rating';
import Collapse from '../../components/Collapse/collapse';
import Tag from '../../components/Tag/tag';



import './fiche.css'

export function Fiche() {

      const { id } = useParams();
      const currentAppart = locationList.find(element => element.id === id);
      if (currentAppart === undefined) { return <Redirect to="/erreur404" /> }
      // Réglage pour qu'on tombe sur la page erreur quand on modifie l'url dans les appartements


      return (

            <section className='mainFiche'>

                  <div className='containerStyles'>
                        <ImageSlider slides={currentAppart.pictures} />
                  </div>

                  <div className="flex">
                        <div className="text">
                              <div className='titleLocation'>

                                    <span>
                                          <h1 className='title'>{currentAppart.title}</h1>
                                          <h2 className='location'>{currentAppart.location}</h2>
                                    </span>

                              </div>

                              <div className='tagContent'>

                                    <div className='tagWrap'>
                                          {currentAppart.tags.map((tag, index) =>
                                                <Tag text={tag} key={index} />
                                          )}
                                    </div>
                              </div>
                        </div>
                        <div className="ratingOwner">
                              <Rating rating={currentAppart.rating} />
                              <span className='ownerWrap'>
                                    <p>{currentAppart.host.name}</p>
                                    <img src={currentAppart.host.picture} alt="visage du proprietaire" />
                              </span>
                        </div>
                  </div>
                  <span className='collapseWrap'>
                        <Collapse
                              title={'Description'}
                              content={
                                    `${currentAppart.description}`
                              }
                        />
                        <Collapse
                              title={'Equipements'}
                              content={currentAppart.equipments.map((equipment, index) =>
                                    <li key={index}>{equipment}</li>
                              )}
                        />
                  </span>


            </section >
      )
}

export default Fiche;

