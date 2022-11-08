import { locationList } from "../../datas/locationList";

import './display.css'
import { Card } from "../Card/card";

export function AppartementList() {



      const listItems = locationList.map((item) => <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />);


      return (

            <section className='carts-wrapper'>
                  {listItems}
            </section>
      );
}

