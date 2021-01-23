import { Button } from '@material-ui/core';
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
    height: 45px;
    object-fit: contain;
  }
`;

export const Navigation = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const Clickable = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    text-transform: none;
  }

  & + button {
    margin-left: 5px;
  }

  :focus {
    outline: none;
  }
`;
