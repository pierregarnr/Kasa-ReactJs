import { PureComponent } from 'react';

import redStarImg from '../Rating/Star.png';
import greyStarImg from './Stargrey.png';


export default class Rating extends PureComponent {

      render() {

            const { rating } = this.props;

            const starRed = Array.from({ length: rating }, (e, id) => <img src={redStarImg} alt="etoile rouge" className="stars" key={id} />);
            const emptyStar = Array.from({ length: 5 - rating }, (e, id) => <img src={greyStarImg} alt="etoile grise" className="stars" key={id} />);
            return (
                  <div className="rating">
                        {starRed}{emptyStar}
                  </div>
            )
      }
}

