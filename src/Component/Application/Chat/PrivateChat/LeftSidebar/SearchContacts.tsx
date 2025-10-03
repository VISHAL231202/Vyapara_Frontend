import { Input } from "reactstrap";
import { NameAndPhoneNumber } from "../../../../../utils/Constant";
import SvgIcon from "../../../../../CommonElements/SVG/SvgIcon";

const SearchContacts = () => {
  return (
    <div className="search-contacts">
      <Input type="text" placeholder={NameAndPhoneNumber}/>
      <SvgIcon className="feather" iconId="mic" />
      <i className="fa fa-search"></i>
    </div>
  );
};

export default SearchContacts;
