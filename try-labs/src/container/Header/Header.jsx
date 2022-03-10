import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Hay bala" />
      <h1 className='app__header-h1'>Soluciones digitales</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Somos una empresa fundada en Argentina con amplia experencia en el rubro, Nuestro compromiso es hacer realidad los proyectos de nuestros clientes en tiempo y forma.</p>
      <a href='#about' className='custom__button'>Conocenos</a>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="'header img" />
    </div>
  </div>
);

export default Header;
