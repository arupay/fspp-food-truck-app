import React, { useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function ImageUpload(props) {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("caption", caption);
    formData.append("user_id", props.userId);
    formData.append("truckId", props.truckId);

    try {
      const response = await axios.post(`${API}/multer/upload`, formData);
      console.log(response.data);
      setImageUrl(response.data.backendresult.image_url);
    } catch (error) {
      console.error(error);
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label htmlFor="caption">Caption:</label>
        <input
          type="text"
          id="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>
      <button type="submit">Upload</button>
      {imageUrl && (
        <div>
          <h3>Caption:</h3>
          <p>{caption}</p>

          <h3>Image URL:</h3>
          <img src={imageUrl} alt="Uploaded" />
        </div>
      )}
    </form>
  );
}

export default ImageUpload;
