
import Carousel, { CarouselItem } from './carousel/Carousel'

function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem>
          <img alt='image1'src='https://images.unsplash.com/photo-1656354441535-1b207a18af11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60'/>
        </CarouselItem>

        <CarouselItem>
          <img alt='image2'src='https://images.unsplash.com/photo-1656421798392-5bdf04714b37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60'/>
        </CarouselItem>

        <CarouselItem>
          <img alt='image3'src='https://images.unsplash.com/photo-1656432542310-f6344f5563b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60'/>
        </CarouselItem>
      </Carousel>
    </div>
  );
}


export default App;
