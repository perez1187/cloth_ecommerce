import {Routes, Route} from 'react-router-dom';
// npm install react-router-dom@6
import Home from './routes/home/home-component';
import Navigation from './routes/navigation/navigation-component';
import SignIn from './routes/sign-in/sign-in-component';




function App() {

  return  (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}> </Route> 
        {/* index = ta strona, jesli path="home" to /home/ */}
        <Route path='sign-in' element={<SignIn />}> </Route> 
      </Route>          
    </Routes>    
  );
};
export default App
