import IndividualImage from '../individual-image/IndividualImage';
import { Container, Wrapper, Button, Paragraph } from './modal.style';
import { Image } from '../individual-image/IndividualImage';

// interface Image {
//   id: number;
//   urls: {
//     regular: string;
//   };
//   alt_description: string;
//   likes: number;
// }

interface ModalProps {
  images: Image[];
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ images, toggleModal }) => {
  return (
    <Container>
      <Button onClick={toggleModal}>Close Modal</Button>
      <Wrapper>
        {images.map((item) => (
          <div key={item.id}>
            <IndividualImage image={item} />
            <Paragraph>Liked by {item.likes} by user</Paragraph>
          </div>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Modal;