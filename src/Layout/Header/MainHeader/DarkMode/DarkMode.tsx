import { LI, SVG } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";
import { useState } from "react";
import { setMixLayoutType } from "../../../../ReduxToolkit/Reducers/ThemeCustomizerSlice";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useAppDispatch();
  const handleDarkMode = (value: boolean) => {
    if (value) {
      setDarkMode(!darkMode);
      dispatch(setMixLayoutType("dark"));
    } else {
      dispatch(setMixLayoutType("light"));
      setDarkMode(!darkMode);
    }
  };
  return (
    <LI className="modes d-flex">
      <Link className={`dark-mode ${darkMode ? "active" : ""}`} to={Href} onClick={() => handleDarkMode(!darkMode)}>
        <SVG className="svg-color" iconId="Moon" />
      </Link>
    </LI>
  );
};

export default DarkMode;
