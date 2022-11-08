import './error.css'


export function Error() {
      return (
            <div className='section-error'>
                  <h1 className='title-error'>404</h1>
                  <p className='p-error'> Oups ! La page que vous demandez n'existe pas.</p>
                  <a href="/" className='a-error'>Retourner sur la page d’accueil</a>
            </div>
      )
}
