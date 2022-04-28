import './Sidebar.scss';
import React from 'react';
import Button from '../Button/Button';
import { NavLink, useNavigate } from 'react-router-dom';

interface SidebarProps {
  citySort: (e: React.MouseEvent<HTMLButtonElement>) => void;
  companySort: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ citySort, companySort }) => {
  const navigation = useNavigate()

  const handleCitySort = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigation('/');
    citySort(e);
  
  }
  const handleCompanySort = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigation('/');
    companySort(e);
  }

  return (
    <div className='sidebar'>
      <p className='sidebar__paragraf'>Сортировка</p>
      <Button onClick={handleCitySort} buttonText="по городу" />
      <Button onClick={handleCompanySort} buttonText="по компании" />
    </div>
  )
}
export default Sidebar;