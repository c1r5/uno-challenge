import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background: #dcdcdc;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.5rem;
`;

export const ListContainer = styled.div`
  width: 600px;
  background: #dcdcdc;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const ScrollContainer = styled.div`
  background: #efefef;
  padding: 1rem;
  border-radius: 0.5rem;
  max-height: 400px;
  overflow-y: auto;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;
  
export const Title = styled.h1`
  margin-bottom: 1rem;
`;
