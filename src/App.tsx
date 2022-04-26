import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Card from './components/Card';
import {IAddress, ICompany, IUser} from "./types/types";
import { url} from './assets/config';

function App() {
  const [users, setUsers] = React.useState<IUser | null>(null)
  const [isLoader, setStatusLoading] = React.useState<boolean>(true)
 
  React.useEffect(() => {
      fetchUser()
  }, [])

  function fetchUser() {
    fetch(url)
    .then((res)=> {   if (res.ok) {
      return res.json();
    } else {
      return res.json()
        .then(data => {
          const message = `Что-то пошло не так... ${data.message}`;
          return Promise.reject(new Error(message));
        });
    }
    })


    .then((response) => {
      setUsers(response);
      console.log(response, users)
      setStatusLoading(false);
    })
    .catch((error) => {
    console.log(error);
    })
  }


  return (
    <BrowserRouter>
  
<Card name="kfkf" city="fffff" company="russia"/>

    </BrowserRouter>
  );
}

export default App;
