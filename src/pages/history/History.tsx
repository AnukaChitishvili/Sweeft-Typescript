import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Wrapper,
  ListWrapper,
  Button,
  BackButton,
  TitleContentWrapper,
  Title,
} from "./history.style";
import { FetchContext, FetchContextProps } from '../../context/FetchContext/FetchContext';
import Modal from "../../components/modal/Modal";

const History: React.FC = () => {
  const { history, images, inputValue } = useContext<FetchContextProps>(FetchContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const navigateToPrevPage = () => {
    navigate("/");
  }; 
  console.log('history', history)

  return (
    <Container>
      <BackButton onClick={navigateToPrevPage}>Go back</BackButton>
      <Wrapper>
        {inputValue === "" ? (
          <h1>Your data is empty, Click enter before moving</h1>
        ) : (
          <TitleContentWrapper>
            <Title>History List</Title>
            <ListWrapper>
              {history.map((item, index) => {
                return (
                  <Button onClick={toggleModal} key={index}>
                    {item}
                  </Button>
                );
              })}
            </ListWrapper>
          </TitleContentWrapper>
        )}
        {isModalOpen && <Modal images={images} toggleModal={toggleModal} />}
      </Wrapper>
    </Container>
  );
};

export default History;
