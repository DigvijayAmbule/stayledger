import React, { useState, useRef, useEffect } from "react";
import "../assets/css/style.css";

// drag drop file component
function DragDropFile() {
  // drag state
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [validFiles, setValidFiles] = useState([]);

  useEffect(() => {
    let filteredArray = selectedFiles.reduce((file, current) => {
      console.log("in use effect =" + file);
      const x = file.find((item) => item.name === current.name);
      if (!x) {
        return file.concat([current]);
      } else {
        return file;
      }
    }, []);
    setValidFiles([...filteredArray]);
  }, [selectedFiles]);

  // ref
  const inputRef = useRef(null);
  //Validate files
  const validateFile = (file) => {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/x-icon",
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const handleFiles = function (files) {
    if (validateFile(files[0])) {
      // add to an array so we can display the name of file
      setSelectedFiles((prevArray) => [...prevArray, files[0]]);
    } else {
      // add a new property called invalid
      files[0]["invalid"] = true;
      // add to the same array so we can display the name of the file
      setSelectedFiles((prevArray) => [...prevArray, files[0]]);

      // set error message

      setErrorMessage("File type not permitted");
    }
  };

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

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
      fileName
    );
  };
  const fileSize = (size) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const removeFile = (name) => {
    // find the index of the item
    // remove the item from array

    const validFileIndex = validFiles.findIndex((e) => e.name === name);
    validFiles.splice(validFileIndex, 1);
    // update validFiles array
    setValidFiles([...validFiles]);
    const selectedFileIndex = selectedFiles.findIndex((e) => e.name === name);
    selectedFiles.splice(selectedFileIndex, 1);
    // update selectedFiles array
    setSelectedFiles([...selectedFiles]);
  };

  const shortFileName = function (name) {
    var filename = name;
    var extension = filename.split(".").pop();

    // Ensure the extension is not longer than 10 characters
    var shortenedFilename = filename.substring(0, 5);

    // Combine the shortened filename and the extension
    var result = shortenedFilename + "." + extension;
    return result;
  };

  return (
    <>
      <form
        id="form-file-upload"
        className="form-group"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={dragActive ? "drag-active" : ""}
        >
          <div>
            <p>Drag and drop Property photo</p>
            <button className="upload-button" onClick={onButtonClick}>
              Upload a file
            </button>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
      <div className="file-display-container">
        {selectedFiles.map((data, i) => (
          <div className="file-status-bar" key={i}>
            <div>
              <span className={`file-name ${data.invalid ? "file-error" : ""}`}>
                {shortFileName(data.name)}
              </span>
              <span className="file-size">({fileSize(data.size)})</span>{" "}
              {data.invalid && (
                <span className="file-error-message">({errorMessage})</span>
              )}
            </div>
            <div className="file-remove" onClick={() => removeFile(data.name)}>
              X
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DragDropFile;
