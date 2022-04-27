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

  function sortByCity(x: IUser, y: IUser) {
    if (x.address.city < y.address.city) { return -1; }
    if (x.address.city > y.address.city) { return 1; }
    return 0;
  }
  function sortByCompany(x: IUser, y: IUser) {
    if (x.company.name < y.company.name) { return -1; }
    if (x.company.name > y.company.name) { return 1; }
    return 0;
  }

  const citySort = (e: React.MouseEvent<HTMLButtonElement>) => {
    const sortUsers: IUser[] = [...users].sort(sortByCity);
      setUsers(sortUsers);
  }

  const companySort = (e: React.MouseEvent<HTMLButtonElement>) => {
     const sortUsers: IUser[] = [...users].sort(sortByCompany);
     setUsers(sortUsers);
  }

  return (
    <BrowserRouter>
      <Sidebar citySort={citySort} companySort={companySort} />
      {isLoader ? <Spinner /> : <CardsList users={users} />}
    </BrowserRouter>
  );
}

export default App;
