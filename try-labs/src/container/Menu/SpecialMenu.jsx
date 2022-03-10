import React from 'react';

import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id="menu">
    <div className='app__specialMenu-title'>
      <SubHeading title={'Menu that fits you palatte'} />
      <h1 className='headtext__cormorant'>Today Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu-items'>
          {
            data.wines.map((e, i) => (
              <MenuItem key={e.title + i} title={e.title} price={e.price} tags={e.tags} />
            ))
          }
        </div>
      </div>
      <div className='app__specialMenu-menu_img flex__center'>
        <img src={images.menu} alt="mune-img" />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu-items'>
          {
            data.cocktails.map((e, i) => (
              <MenuItem key={e.title + i} title={e.title} price={e.price} tags={e.tags} />
            ))
          }
        </div>
      </div>
    </div>
    <div>
      <button type='button' style={{marginLeft:'3rem'}} className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
