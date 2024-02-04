import logo from './assets/bg-logo.jpg';
import './App.css';
import {useEffect, useRef, useState} from 'react'
import { UploadFile } from './services/api';
import { BiCopy } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const fileInputRef = useRef()
  const [fileName, setFileName] = useState("")
  const [result, setResult] = useState("")
  const [show, setShow] = useState(false)
  const [loader,setLoader] = useState(true)

  function unUploadClick(){
    fileInputRef.current.click();
  }

  function copyToClipBoard(){
    navigator.clipboard.writeText(result)
    toast.success("Copied!")
  }

  useEffect(() => {
    const getImage = async () => {
      if(fileName){
        const data = new FormData();
        data.append("name", fileName.name);
        data.append("file", fileName);
        let response = await UploadFile(data);
        setResult(response.data.path)
        //console.log(fileName, result)
        setShow(true);
      }
    }
    setShow(false);
    getImage();
    if(fileName){
      setLoader(true)
    } else {
      setLoader(false);
    }
    
  },[fileName])

  return (
    <div className="container">
      <img src={logo} alt='logo'/>
      <div className="wrapper">
        <h1>File sharing</h1>
        <br/>
        <p>Upload and share the download link easily</p>

        <button className='button-86' onClick={() => unUploadClick()}>Upload</button>
        <input type='file'
          ref={fileInputRef}
          style={{display:'none'}}
          onChange={(e) => (setFileName(e.target.files[0]))}
        />

        {show ? (
            <div className='link-div'>
              Link for you file. You can share with anyone.<br/>
              <a className='a-tag' href={result}>{result} </a>
              <i onClick={() => copyToClipBoard()}><BiCopy /></i>
            </div>
            ) 
            : (
              loader ? (<div><span className="loader"></span></div>):(<></>)
            )
          }
        
      </div>
    </div>
  );
}

export default App;
