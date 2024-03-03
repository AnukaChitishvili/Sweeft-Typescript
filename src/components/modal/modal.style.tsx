import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 1000px;
  position: fixed;
  background: #d3d3d3;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding: 100px;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border: none;
  font-size: 24px;
  border-radius: 12px;
  background: none;
  color: black;
  cursor: pointer;
  position: absolute;
  top: 30px;
`;

export const Paragraph = styled.p`
  margin-left: 10px;
`;
