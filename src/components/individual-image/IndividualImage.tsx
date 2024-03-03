import { Img } from './individualImage.style';

export interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
   id?: string; 
   key?: string;
   likes?: number;
}

interface IndividualImageProps {
  image: Image;
}

const IndividualImage: React.FC<IndividualImageProps> = ({ image }) => {
  return (
    <div>
      <Img src={image.urls.regular} alt={image.alt_description} />
    </div>
  );
};

export default IndividualImage;