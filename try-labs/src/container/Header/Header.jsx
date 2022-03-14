import React from 'react';
import { SubHeading } from '../../components';
import image from '../../assets/ReactStock.jpeg';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Desarrolladora de software" />
      <h1 className='app__header-h1'>Soluciones digitales</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Somos una empresa fundada en Argentina con amplia experencia en el rubro, nuestro compromiso es hacer realidad los proyectos de nuestros clientes en tiempo y forma.</p>
      <a href='#about' className='custom__button'>Conocenos</a>
    </div>
    <div className='app__wrapper_img'>
      <img src={image} alt="'header img" className='ImagenPrincipal'/>
    </div>
  </div>
);

export default Header;
