import './Sidebar.scss';
import React from 'react';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const handleCitySort = (e: React.MouseEvent<HTMLButtonElement>) => {
  }
  const handleCompanySort = (e: React.MouseEvent<HTMLButtonElement>) => {
  }

  return (
    <div className='sidebar'>
      <p>Сортировка</p>
      <Button onClick={handleCitySort} buttonText="по городу" />
      <Button onClick={handleCompanySort} buttonText="по компании" />
    </div>
  )
}
export default Sidebar;