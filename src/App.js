import { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import { carouselList } from './services/carouselList';

const App = () => {
  const [toShow, setToShow] = useState(7);
  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 64
      }}
    >
      <Carousel show={toShow}>
        {carouselList.map((item) => {
          const { id, image, title } = item;
          return (
            <div key={id} style={{ width: `calc(100% / ${toShow}` }}>
              <div className='child'>
                {id}
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default App;
