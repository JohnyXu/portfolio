import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/flyingBird520" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/JohnyXu" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/johnyxu/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
