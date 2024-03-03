import React, { useContext, ChangeEvent, KeyboardEvent } from "react";
import { baseSearchURL } from "../../constants/constants";
import { Container, Wrapper, Input, StyledLink } from "./homepage.style";
import { FetchContext, FetchContextProps } from '../../context/FetchContext/FetchContext'
import Images from "../../components/images/Images";

const Homepage: React.FC = () => {
  const {
    images,
    isLoading,
    error,
    setUrl,
    inputValue,
    setInputValue,
    setHistory,

  } = useContext<FetchContextProps>(FetchContext);



  const handleEnterSearch = (e: KeyboardEvent<HTMLInputElement>) => { 
    if (e.key === "Enter") {
      const newUrl = baseSearchURL + `&query=${(e.target as HTMLInputElement).value}` + "&page=1";
      setUrl(newUrl);
      setHistory((prevState) => {
        return [...prevState, (e.target as HTMLInputElement).value] as string[]
      });
    }
  };
  


  return (
    <Container>
      <Wrapper>
        <Input
          type="search"
          placeholder="Search..."
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target?.value)}
          onKeyDown={handleEnterSearch}
        />
        <StyledLink to="/history">History</StyledLink>
      </Wrapper>
      {isLoading && <p>Loading...</p>}
      {images.length > 0 && <Images images={images} />}
      {error && <p>Error</p>}
    </Container>
  );
};

export default Homepage;
