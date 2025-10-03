/* eslint-disable array-callback-return */
import convertSize from 'convert-size';
import { ChangeEvent, useState } from 'react';
import { CardHeader, Form, Input } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon';
import { filesData } from '../../../../Data/Application/FileSideBar/FileSideBar';
import { AddNew, Upload } from '../../../../utils/Constant';
import FileContentBody from './FileContentBody';
import SearchBar from './SearchBar';

const FileContent = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [myFile, setMyFile] = useState(filesData);
    const fileList = myFile.filter((data) => {
      if (searchTerm == null) return data;
      if (data.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return data;
      }
    });
    const getFile = () => {
      document.getElementById('upfile')?.click();
    };
    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        setSelectedFile(files[0]);
      }
    };
    const onFileUpload = () => {
      let myFiles = [...myFile];
      if (selectedFile !== null) {
        myFiles.push({
          icons:"file-excel-o",
          title: `${selectedFile.name}`,
          details: `${convertSize(selectedFile.size)}`,
          color:"success"
        });
        setMyFile(myFiles);
      }
    };
    return (
      <>
        <CardHeader className='d-md-flex d-sm-block'>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className='flex-grow-1 d-flex align-items-center justify-content-end'>
              <Form className='d-inline-flex'>
                <Btn color='primary' className='plus-square' onClick={getFile}>
                  <SvgIcon className='feather stroke-white' iconId='plus-square'/> {AddNew}
                </Btn>
                <div style={{height: "0px",width: "0px", overflow:"hidden"}}>
                  <Input id='upfile' multiple type='file' onChange={(e) => onFileChange(e)} />
                </div>
              </Form>
              <Btn outline color='primary' className='ms-2 upload' onClick={onFileUpload}>
                <SvgIcon iconId='upload' className='feather stroke-primary' />
                {Upload}
              </Btn>
            </div>
        </CardHeader>
        <FileContentBody myFile={fileList} />
      </>
    )
}

export default FileContent