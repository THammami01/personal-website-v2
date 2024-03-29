import { createGlobalStyle } from 'styled-components';
import { TransitionStyles } from './transitions';

export default createGlobalStyle`
  /*
  -------------------------------------------------------------------------------
  1.  Base styles
  -------------------------------------------------------------------------------
  */
  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  ::-webkit-scrollbar {
    width: 16px;
    height: 0;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgb(29, 78, 216);
    border: 4px solid transparent;
    background-clip: content-box;
    transition: background-color 300ms;
    border-radius: 2rem;
  
    &:hover {
      background-color: #0693E3;
    }
  }
  
  html {    
    box-sizing: border-box;
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 62.5%; /*16px -> 100%   |   10px -> 62.5%   |   10px = 1rem*/
    line-height: 1.5;
    color: ${(props) => props.theme.text.default};
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: ${(props) => props.theme.fontFamily.fontSans}  
  }

  @media (min-width: 1600px) {
    html {
        font-size: 70%;
    }
  }

  body {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.bg.default};
    /* background-color: rgb(29, 78, 216); */
    width: 100%;
    height: 100%;
    font-weight: 400;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${(props) => props.theme.transitions.defualt}; 
        pointer-events: none;
        user-select: none;
      }
    }

  }

  #root {
    height: 100%;
    width: 100%;
  }

  p,a,b {
    font-size: ${(props) => props.theme.fontSize.md};
  }

  a {
    color: currentColor;
    text-decoration: none;
    display: inline-block;
  }

  a:hover {
    cursor: pointer;
  }

  ul {
    list-style: none
  }
  ${TransitionStyles};
`;
