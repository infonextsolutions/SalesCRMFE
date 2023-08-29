import { setSuccess } from "@/store/ai";
import { useAppDispatch } from "@/store/store";
import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";

const AddText = ({ top, title, width, change }) => {
  return (
    <div
      className="w-[100%] "
      style={{
        width: width ? width : "100%",
        marginTop: top,
      }}
    >
      <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
        {title}*
      </p>
      <input
        onChange={(e) => {
          change(e.target.value);
        }}
        type="text"
        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
      />
    </div>
  );
};

const UploadAudio = ({ onChange }) => {
  const [file, setFile] = useState();
  const [fileSelected, setFileSelected] = useState(false);
  const [dropzoneActive, setDropzoneActive] = useState(false);
  const [dragActive, setDragActive] = React.useState(false);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  function isAudioFile(file) {
    const audioExtensions = [
      "mp3",
      "wav",
      "ogg",
      "m4a",
      "aac",
      "flac",
      "wma",
      "aiff",
      "alac",
      "opus",
    ];

    const fileName = file.name;
    const fileExtension = fileName.split(".").pop().toLowerCase();

    return audioExtensions.includes(fileExtension);
  }

  const [error, setError] = useState({ show: false, error: "" });
  const handleDrop = function (e) {
    console.log(e[0], "please check here");
    if (isAudioFile(e[0])) {
      setFile(e);
      onChange(e);
      setError({
        show: true,
        error: (
          <p className="text-[14px] font-medium  text-center">
            File Recieved
            <br />
            {Array.isArray(e) && (
              <>
                {e.length > 0 &&
                  e.map((item, i) => {
                    return (
                      <span key={i} className="text-[#000]">
                        {item.name}
                        {","}
                      </span>
                    );
                  })}
              </>
            )}
            <span className="text-renal-blue underline cursor-pointer">
              Browse
            </span>
          </p>
        ),
      });
    } else {
      setError({
        show: true,
        error: (
          <p className="text-[14px] font-medium  text-center">
            wrong type of file
            <br />
            <span className="text-renal-blue underline cursor-pointer">
              Browse
            </span>
          </p>
        ),
      });
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files[0]) {
      // at least one file has been selected so do something
      // handleFiles(e.target.files);

      setFile(e.target.files[0]);
      setFileSelected(true);
      console.log(e.target.files[0]);
    }
  };
  console.log(file);
  const inputRef = React.useRef(null);

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const dispatch = useAppDispatch();

  return (
    <div className="w-[100%] min-h-[200px]  py-[30px] relative">
      <Dropzone
        onDrop={handleDrop}
        // onDragEnter={() => setDropzoneActive(true)}
        // onDragLeave={() => setDropzoneActive(false)}
        // accept={{
        //   "application/pdf": [],
        // }}
        onDragEnter={() => setDropzoneActive(true)}
        onDragLeave={() => setDropzoneActive(false)}
        accept={{}}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            id="form-file-upload"
            className="w-[100%] h-[250px]"
          >
            <input
              // accept="application/pdf"
              ref={inputRef}
              {...getInputProps()}
            />
            <label
              id="label-file-upload"
              htmlFor="input-file-upload"
              className={dragActive ? "drag-active" : ""}
            >
              <div>
                <p className="text-[#000]  ">
                  {error.show ? (
                    <> {error.error}</>
                  ) : (
                    <>
                      {" "}
                      Drop or{" "}
                      <span className="text-renal-blue underline cursor-pointer">
                        Browse
                      </span>{" "}
                      to upload your file.
                      <br />
                      {"("}.MP3, .AAC formats supported{")"}
                    </>
                  )}
                </p>
              </div>
            </label>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default React.memo(UploadAudio);
