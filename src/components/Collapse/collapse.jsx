import { useState } from 'react';

const Collapse = (props) => {


      const [open, setOPen] = useState(false);
      let textContent = document.querySelector('.content > div');

      const openIt = () => {
            if (setOPen(!open)) {
                  textContent.style.display = "none";
            }
            else {
                  textContent.style.padding = "36px 27px 19px 18px";
            }
      };

      return (
            <section>
                  <button onClick={openIt} className='bandeau'>
                        <h1>{props.title}</h1>
                        <p className='fleche' alt="Deployer">{open === true ? '❯' : '❮'}
                        </p>
                  </button>

                  <div className='text-wrapper'>
                        {open && <p className='content-text'>{props.content}</p>}
                  </div>
            </section>
      );
}
export default Collapse


