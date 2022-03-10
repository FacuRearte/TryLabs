import React from 'react';

import { images } from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center' id="about">
    {/* <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div> */}
    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Quiénes somos</h1>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      </div>
      <div className='app__aboutus-content_history' >
        <h1 className='headtext__cormorant'>Our History Us</h1>
        <p className='p__opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
      </div>

    </div>
  </div>
);

export default AboutUs;
