import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <BsLinkedin />
    </div>
  </div>
);

export default SocialMedia;
