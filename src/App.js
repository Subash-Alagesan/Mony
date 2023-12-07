import React from "react";
import * as Components from './Form/Components';
import './App.css';

function App() {
    const [signIn, toggle] = React.useState(true);
     return(
        
         <Components.Container>
             
             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sigin In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

              

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title1>Welcome to login</Components.Title1>
                       <Components.Paragraph>
                           Don't have an account?
                       </Components.Paragraph>
                           <Components.GhostButton1 onClick={() => toggle(true)}>
                               SignUp
                           </Components.GhostButton1> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default App;