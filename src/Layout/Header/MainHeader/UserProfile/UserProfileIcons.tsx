import { Link, useNavigate } from 'react-router-dom';
import { LI, SVG, UL } from '../../../../AbstractElements';
import { userProfilesData } from '../../../../Data/Layout/HeaderData';

interface PropsInterface {
  show: boolean;
  setShow: (loading: boolean) => void;
}

const UserProfileIcons: React.FC<PropsInterface> = ({ show, setShow }) => {
  const navigate = useNavigate();
  const handleClick = (name: string) => {
    if (name === 'Log Out') {
      setShow(!show);
      localStorage.removeItem('login');
      navigate(`${process.env.PUBLIC_URL}/login`);
    }
    setShow(!show);
  };
  return (
    <UL>
      {userProfilesData.map((item, i) => (
        <LI className="d-flex" key={i}>
          <SVG className="svg-color" iconId={item.icon} />
          <Link
            className="ms-2"
            to={item.link}
            onClick={() => handleClick(item.title)}
          >
            {item.title}
          </Link>
        </LI>
      ))}
    </UL>
  );
};

export default UserProfileIcons;
