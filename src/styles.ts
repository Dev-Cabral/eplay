import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#111',
  cinza: '#333',
  verde: '#10ac84',
  cinzaClaro: '#a3a3a3',
  vermelho: ' #E66767',
  rosa: '#FFEBD9',
  rosaFundo: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    // list-style: none;
  }

  body {
    background-color: ${cores.branca};
    // color: ${cores.branca};
    // padding-top: 40px;
  }

  .container {
    background-color: ${cores.rosaFundo};
    max-width: 1366px;
    margin: 0 auto;
  }

`
