import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: var(--gray);
  color: var(--black);
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px 'Airbnb Cereal App Medium', serif;
}

h1, h2, h3, h4, h5, h6, strong {
 font-family: 'Airbnb Cereal App Bold';
}
button{
  cursor: pointer;
}

.pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
  }
  .pagination > .active > a{
    background-color: #47ccde ;
    border-color: #47ccde ;
    color: #fff;
  }
  .pagination > li > a{
    border: 1px solid #47ccde ;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
    background-color: #47ccde ;
    border-color: #47ccde;
    outline: none ;
  }
  .pagination > li > a, .pagination > li > span{
    color: #47ccde
  }
  .pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
    border-radius: unset
  }
:root {
  --gray: #f2f2f2;
  --dark-gray: #d1d0d0;
  --white: #ffffff;
  --border-gray: #ebebeb;
  --black: #212121;
  --red: #ff0150;
}
`;
