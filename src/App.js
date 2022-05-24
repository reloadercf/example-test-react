import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import {Paths} from './components/Paths'

import {auth} from './lib/firebaseconfig'

const App =()=> {
  const [isAuthenticate, setIsAuthenticate] = useState(null)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticate(user)
    } else {
      setIsAuthenticate(null)
    }
  });
  return (
    <BrowserRouter>
      <Paths isAuthenticate={isAuthenticate} />
    </BrowserRouter>
  );
}

export default App;
