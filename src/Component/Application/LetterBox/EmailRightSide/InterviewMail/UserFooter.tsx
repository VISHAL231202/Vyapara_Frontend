import DownloadLink from "react-download-link";
import SimpleMdeReact from "react-simplemde-editor";
import { Image, P } from "../../../../../AbstractElements";
import SvgIcon from "../../../../../CommonElements/SVG/SvgIcon";
import { dynamicImage } from "../../../../../Service";

const UserFooter = () => {
  const mdeEditorText = `Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`;
  return (
    <div className="user-footer">
      <div>
        <SvgIcon iconId="paperclip" className="feather" />
        <span className="font-light">{"Attachments"}</span>
      </div>
      <div className="d-inline-block">
        <div className="attchment-file common-flex">
          <div className="common-flex align-items-center">
            <Image src={dynamicImage("email-template/pdfs.png")} alt="pdf" />
            <div className="d-block">
              <P>Offer_Letter.pdf</P>
              <P>200KB</P>
            </div>
          </div>
          <DownloadLink filename="myfile.txt" label={<i className="fa fa-download font-light"></i>} />
        </div>
      </div>
      <div className="toolbar-box">
        <SimpleMdeReact id="editor_container" value={mdeEditorText} options={{ autofocus: true, spellChecker: false }} />
      </div>
    </div>
  );
};

export default UserFooter;
