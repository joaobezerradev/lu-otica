import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .MuiButtonBase-root.MuiIconButton-root {
    :focus {
      outline: none;
    }
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid var(--red);
  }

  .MuiInput-underline:before {
    border-bottom: 1px solid var(--black);
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid var(--red);
  }
`;
