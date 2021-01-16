import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  width: 100%;
  padding: 0 100px;

  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white);
  box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.2);

  > img {
    height: 50px;
    object-fit: contain;
  }
`;

export const InputSearch = styled.div`
  height: 35px;
  width: 300px;
  border: 1px solid var(--border-gray);
  border-radius: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: relative;

  background-color: var(--gray);

  > svg {
    position: absolute;
    margin-left: 10px;
    z-index: 2;
  }

  > input {
    flex: 1;
    padding: 0 35px;

    border: none;

    color: var(--black);
    background-color: var(--gray);

    font-family: 'Airbnb Cereal App light', serif;
  }

  &:hover {
    border-color: var(--dark-gray);
  }
`;

export const Navigation = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;

    & + div {
      margin-left: 15px;
    }
  }
`;
