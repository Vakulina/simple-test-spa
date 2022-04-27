import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import CardsList from './components/CardsList/CardsList';
import { IAddress, ICompany, IUser } from "./types/types";
import { url } from './assets/config';
import Sidebar from './components/Sidebar/Sidebar';
import './assets/main-styles.scss';
import './components/Spinner/Spinner'
import Spinner from './components/Spinner/Spinner';


function App() {
  const [users, setUsers] = React.useState<IUser[]>([])
  const [isLoader, setStatusLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    fetchUser()
  }, [])

  function fetchUser() {
    fetch(url)
      .then((res) => {
        if (res.ok) {
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

        setStatusLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }


  return (
    <BrowserRouter>

      <Sidebar />
<Spinner/>

      <CardsList users={users} />

    </BrowserRouter>
  );
}

export default App;
