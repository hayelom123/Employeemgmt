import React from 'react';
import routes from './route/routes';


import { MainBody } from './styles/body_style';

// import { SignIn } from './components/signin';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const App: React.FC = () => {
  
  return (
    <div className="App">
      <MainBody>
        <Router>
          <Routes>
            {
              routes.map(el => {
                return <Route key={el.name}  path={el.path} element={<el.component />} />
              })
           }
    
   
  </Routes>
</Router>
     {/* <SignIn></SignIn> */}
     </MainBody>
      
    </div>
  );
}

export default App;
{/* <Button bgColor="violet" >Login</Button>
      <Button bgColor="green" >SignUp</Button>
      <Button bgColor="yellow" >Register</Button> */}
