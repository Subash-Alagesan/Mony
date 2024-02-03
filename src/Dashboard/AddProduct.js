import React, { useState } from "react";
import "./AddProduct.css";
import Grid from "@mui/material/Grid";

const AddProduct = () => {
  // State variables for input values

  const initialImageState = {
    image: null,
    altText: "",
  };
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState([initialImageState]);
  const [videoFile, setVideoFile] = useState(null); // Use null for video files

  const initialFormData = {
    product_name: "",
    product_images: "",
    video_url: "",
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setFormData({
      ...formData,
      product_images: file,
    });
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    const updatedImages = [...productImage];
    updatedImages[index] = {
      image: file,
      altText: "",
    };
    setProductImage(updatedImages);
  };

  const addImageField = () => {
    setProductImage([...productImage, initialImageState]);
  };

  const removeImageField = (index) => {
    const updatedImages = [...productImage];
    updatedImages.splice(index, 1);
    setProductImage(updatedImages);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with the input values (e.g., send data to server)
    console.log("Product Name:", productName);
    console.log("Product Image:", productImage);
    console.log("Video File:", videoFile);

    // Reset form fields
    setProductName("");
    setProductImage([initialImageState]);
    setVideoFile(null);
  };

  // Function to handle file input change for video file
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  return (
    <div className="Add-product">
      <div className="container">
        <h2 className="h2-tag">Add Product</h2>
        <form onSubmit={handleSubmit} className="form">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field"> Product Name</label>
                <p>
                  <input
                    className="input-field"
                    type="text"
                    name="name"
                    placeholder="Enter product name"
                    value={formData.product_name}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field">Product Image</label>
                {productImage.map((image, index) => (
                  <div key={index}>
                    <input
                      type="file"
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
                    className="input-field"
                    type="file"
                    name="product_images"
                    onChange={handleFileChange}
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
                    name="stocks"
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
                    name="stock"
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
                    name="rate"
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
                    name="price"
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
                    name="final rice"
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
