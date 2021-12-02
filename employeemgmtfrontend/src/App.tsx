import React from 'react';



import { MainBody } from './styles/body_style';

import { SignIn } from './components/signin';
const App: React.FC = () => {
  
  return (
    <div className="App">
      <MainBody>
     <SignIn></SignIn>
     </MainBody>
      
    </div>
  );
}

export default App;
{/* <Button bgColor="violet" >Login</Button>
      <Button bgColor="green" >SignUp</Button>
      <Button bgColor="yellow" >Register</Button> */}
