import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 80px;
  max-width: 250px;

  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: var(--red);
  color: var(--white);

  transition: all ease 0.6s;

  &:hover {
    width: 100%;
    transition: all ease 0.8s;
  }
`;

export const Header = styled.div``;

export const Body = styled.div``;

export const Footer = styled.div``;
