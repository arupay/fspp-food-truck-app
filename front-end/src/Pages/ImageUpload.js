import React, { useState, useRef } from "react";
import axios from "axios";
import "./ImageUpload.scss";
import { toast } from "react-toastify";
const API = process.env.REACT_APP_API_URL;

function ImageUpload(props) {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [uploadedImage, setUploadedImage] = useState({});

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const fileInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("caption", caption);
    formData.append("user_id", props.userId);
    formData.append("truck_id", props.truckId);
    try {
      const response = await axios.post(`${API}/multer/upload`, formData);
      setUploadedImage(response.data.backendresult);
      // Reset file state
      setFile({ file: null });
      //Clear Inputs
      setCaption("");
      fileInputRef.current.value = "";

      toast.success(
        "Image uploaded! Below is a preview, you will rerouted to the gallery.",
        {
          autoClose: 5000, // 5 seconds
        }
      );
      setTimeout(() => {
        props.closeModal();
      }, 5000);
      props.onSuccess();
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error uploading image");
      }

      console.error(error);
    }
  };

  return (
    <div className="formcontainer">
      <form onSubmit={handleSubmit} className="formcontainer__newform">
        <div className="largegroup">
          <label htmlFor="image">Image:</label>
          <input
            ref={fileInputRef}
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="largegroup">
          <label htmlFor="caption">
            Caption:
            <div className="text-lowercase small text-muted">
              max 40 characters
            </div>
          </label>
          <input
            type="text"
            id="caption"
            maxLength="40"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="newtrucksubmit  mw-50">
            Upload Image
          </button>
        </div>
      </form>
      {uploadedImage.image_url && (
        <div className="text-center m-auto">
          <img src={uploadedImage.image_url} width="200px" alt="Uploaded" />
          <p>{uploadedImage.caption}</p>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
