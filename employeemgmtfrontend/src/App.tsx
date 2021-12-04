import React from 'react';
import routes from './route/routes';


import { MainBody } from './styles/body_style';

// import { SignIn } from './components/signin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from './Utils/topNavbar';
import { GlobalStyle } from './styles/gloablstyle';

const App: React.FC = () => {
  
  return (
    <>
      <GlobalStyle/>
    <div >
      <Router>
       <NavBar/>
      <MainBody>
       
        
          <Routes>
            {
              routes.map(el => {
                return <Route key={el.name}  path={el.path} element={<el.component />} />
              })
           }
    
   
  </Routes>

     {/* <SignIn></SignIn> */}
     </MainBody>
      </Router>
    </div>
    </>
  );
}

export default App;
{/* <Button bgColor="violet" >Login</Button>
      <Button bgColor="green" >SignUp</Button>
      <Button bgColor="yellow" >Register</Button> */}
