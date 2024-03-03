import styled from "styled-components";


export const Container = styled.div`
  position: relative;
  background: #e6e6fa;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border: none;
  font-size: 24px;
  border-radius: 12px;
  background: none;
  color: black;
  margin-top: 20px;
  font-size: 80px;
  cursor: pointer;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 80px;
  left: 50px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const TitleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 90px;
`;
