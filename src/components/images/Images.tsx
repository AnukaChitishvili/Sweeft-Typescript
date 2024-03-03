
import { Container } from './images.styles';
import IndividualImage from '../individual-image/IndividualImage';

import { Image } from '../individual-image/IndividualImage';

interface ImagesProps {
  images: Image[];
}


const Images: React.FC<ImagesProps> = ({ images }) => {
  return (
    <Container>
      {images.map((image) => {
        return <IndividualImage key={image.id} image={image} />;
      })}
    </Container>
  );
};

export default Images;