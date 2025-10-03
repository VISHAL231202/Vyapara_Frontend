import { useState } from 'react';
import { H5, Image, LI } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import UserProfileIcons from './UserProfileIcons';

const UserProfile = () => {
  const [show, setShow] = useState(false);
  return (
    <LI
      className="profile-dropdown custom-dropdown"
      aria-expanded={show}
      aria-haspopup="true"
    >
      <div
        role="button"
        className="d-flex align-items-center"
        onClick={() => setShow(!show)}
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && setShow(!show)}
      >
        <Image
          src={dynamicImage('profile.png')}
          alt="avatar"
          className="img-fluid"
          width={40}
        />
        <div className="flex-grow-1">
          <H5>Wade Warren</H5>
          <span>UI Designer</span>
        </div>
      </div>
      <div
        className={`custom-menu overflow-hidden ${show ? 'show' : ''}`}
        role="menu"
      >
        <UserProfileIcons setShow={setShow} show={show} />
      </div>
    </LI>
  );
};

export default UserProfile;
