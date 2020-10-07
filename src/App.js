import React,{Suspense,lazy} from "react";
import {createGlobalStyle} from 'styled-components';
import {BrowserRouter , Route,Switch} from "react-router-dom"

const TodoList = lazy (()=>import("./pages/TodoList"))
const GlobalStyle = createGlobalStyle`
  
html,
body,
#root {
  height: 100vh;
  width: 100vw;
  font-size: 30px;
  font-family: "Roboto", sans-serif;
}
* {
  margin: 0;
  padding: 0;
}
`;


export default function App() {
 
  return (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Suspense fallback="...loading">
      <Switch>
        <Route path="/" exact component={TodoList} />
      </Switch>
      </Suspense>
    </BrowserRouter>
    </>
  );
}
