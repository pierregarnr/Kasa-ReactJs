import './home.css'
import photo from './IMG.png'
import { AppartementList } from '../../components'




export function Home() {

  return (
    <section className='section-home'>
      <div className='background-home'>
        <img className='style-img' src={photo} alt='paysage de montagne' draggable="false" />
        <h1 className='text-background'>Chez vous, partout et ailleurs</h1>
      </div>

      <AppartementList />

    </section>

  )
}


