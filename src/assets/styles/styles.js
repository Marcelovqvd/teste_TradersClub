import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lobster+Two:400,700|Roboto:400,700&display=swap');
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

html, body, #root {
    height: 100%;
}
ul {
    list-style: none;
  }

body {
    background-color: #1f2d40;
    color: #f5f5f5;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
}
.menu {
    background-color: #0e1823;
}
.menu h1 {
    display: inline-block;
    background: url('../img/logo-tc.png') no-repeat;
    width: 80px;
    height: 80px;
    text-indent: -999em;
}
.banner {
    font-family: 'Lobster Two', cursive;
    font-size: 100px;
}

button {
    cursor: pointer;
  }
`;