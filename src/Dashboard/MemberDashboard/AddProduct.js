import React, { useState } from "react";
import axios from "../../Api Base URL/axios";
import "./AddProduct.css";
import Grid from "@mui/material/Grid";

const AddProduct = () => {
  const initialImageState = {
    image: null,
    altText: "",
  };
  const [productName, setProductName] = useState("");
  const [productImages, setProductImages] = useState([initialImageState]);
  const [videoFile, setVideoFile] = useState(null);
  const initialFormData = {
    product_name: "",
    video_url:null,
    total_stocks_added: "",
    no_of_stocks_available: "",
    commission_rate: "",
    mrp_price: "",
    offer: "",
    final_price: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    const updatedImages = [...productImages];
    updatedImages[index] = {
      image: file,
      altText: "", // You may want to handle alt text as well
    };
    setProductImages(updatedImages);
  };
  
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };
  
  const addImageField = () => {
    setProductImages([...productImages, initialImageState]);
  };

  const removeImageField = (index) => {
    const updatedImages = [...productImages];
    updatedImages.splice(index, 1);
    setProductImages(updatedImages);
  };

    
  return (
    <div className="Add-product">
      <div className="container">
        <h2 className="h2-tag">Add Product</h2>
        <form onSubmit={handleSubmit} className="form">
          <Grid container spacing={3}>
            {/* ... (your form fields) ... */}
            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field">Product Image</label>
                {productImages.map((image, index) => (
                  <div key={index}>
                    <input
                      type="file"
                      name={`product_images_${index}`}
                      onChange={(e) => handleImageChange(index, e)}
                    />
                    <button
                      type="button"
                      onClick={() => removeImageField(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={addImageField}>
                  Add Image
                </button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field">Video Url</label>
                <p>
                  <input
                    type="file"
                    name="video_url"
                    accept="video/*"
                    onChange={handleVideoChange}
                  />
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field">Total Stocks</label>
                <p>
                  <input
                    className="input-field"
                    type="text"
                    name="total_stocks_added"
                    placeholder="Enter total stocks"
                    value={formData.total_stocks_added}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field">No of Stocks</label>
                <p>
                  <input
                    className="input-field"
                    type="text"
                    name="no_of_stocks_available"
                    placeholder="Enter no of stocks"
                    value={formData.no_of_stocks_available}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field">Commission Rate</label>
                <p>
                  <input
                    className="input-field"
                    type="text"
                    name="commission_rate"
                    placeholder="Enter commission rate"
                    value={formData.commission_rate}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field"> MRP Price</label>
                <p>
                  <input
                    className="input-field"
                    type="text"
                    name="mrp_price"
                    placeholder="Enter  price"
                    value={formData.mrp_price}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field">Offer</label>
                <p>
                  <input
                    className="input-field"
                    type="text"
                    name="offer"
                    placeholder="Enter  Offer"
                    value={formData.offer}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field"> Final Price</label>
                <p>
                  <input
                    className="input-field"
                    type="number"
                    name="final_price"
                    placeholder="Enter final price"
                    value={formData.final_price}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="video-card"></div>
            </Grid>
          </Grid>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
