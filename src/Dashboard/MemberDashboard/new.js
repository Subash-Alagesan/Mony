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
  const [videoFile, setVideoFile] = useState(null); // Use null for video files

  const initialFormData = {
    product_name: "",
    video_url: "",
    total_stocks_added: "",
    no_of_stocks_available: "",
    commission_rate: "",
    mrp_price: "",
    offer: "",
    final_price: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  // const formDataToSend = new FormData();
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
    const updatedImages = [...productImages];
    updatedImages[index] = {
      image: file,
      altText: "",
    };
    setProductImages(updatedImages);
  };
  // const handleImageChange = (index, event) => {
  //   const file = event.target.files[0];
  
  //   console.log("Selected file:", file);
  
  //   const updatedImages = [...productImages];
  //   updatedImages[index] = {
  //     image: file,
  //     altText: "",
  //   };
  
  //   console.log("Updated images array:", updatedImages);
  
  //   setProductImages(updatedImages);
  
  //   // Update the form data with the new images
  //   formDataToSend.set(`product_images_${index}`, file);
  
  //   console.log("Before updating form data:", formDataToSend);
  
  //   // Set the updated FormData to the state
  //   setFormData(formDataToSend);
  
  //   console.log("After updating form data:", formDataToSend);
  // };
  

  const addImageField = () => {
    setProductImages([...productImages, initialImageState]);
  };

  const removeImageField = (index) => {
    const updatedImages = [...productImages];
    updatedImages.splice(index, 1);
    setProductImages(updatedImages);
  };

  // Function to handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // const formDataToSend = new FormData();
  //     formDataToSend.append("product_name", formData.product_name);
  //     formDataToSend.append("video_url", videoFile);
  //     formDataToSend.append("total_stocks_added", formData.total_stocks_added);
  //     formDataToSend.append(
  //       "no_of_stocks_available",
  //       formData.no_of_stocks_available
  //     );
  //     formDataToSend.append("commission_rate", formData.commission_rate);
  //     formDataToSend.append("mrp_price", formData.mrp_price);
  //     formDataToSend.append("offer", formData.offer);
  //     formDataToSend.append("final_price", formData.final_price);
  //     productImages.forEach((image, index) => {
  //       formDataToSend.append(`product_images_${index}`, image.image);
  //     });

  //     console.log("Form Data is", formDataToSend);
  //     console.log("product images are", productImages);
  //     console.log("Video file is ", videoFile);

  //     // Make the API call using Axios
  //     const response = await axios.post(
  //       "api/products/createProduct",
  //       formDataToSend
  //     );

  //     // Handle the response as needed
  //     console.log("Products are:", response.data);

  //     // Reset form fields
  //     setProductName("");
  //     setProductImages([initialImageState]);
  //     setVideoFile(null);

  //     // Optionally, you can redirect to another page or show a success message
  //   } catch (error) {
  //     console.error("An error occur while During Adding Products:", error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Initialize a new FormData for each submission
      const formDataToSend = new FormData();
  
      // Clone state values into the FormData object
      formDataToSend.append("product_name", formData.product_name);
      formDataToSend.append("video_url", videoFile);
      formDataToSend.append("total_stocks_added", formData.total_stocks_added);
      formDataToSend.append("no_of_stocks_available", formData.no_of_stocks_available);
      formDataToSend.append("commission_rate", formData.commission_rate);
      formDataToSend.append("mrp_price", formData.mrp_price);
      formDataToSend.append("offer", formData.offer);
      formDataToSend.append("final_price", formData.final_price);
  
      // Append each image separately
      productImages.forEach((image, index) => {
        formDataToSend.append(`product_images_${index}`, image.image);
      });
  
      console.log("Before updating form data:", formDataToSend);
  
      // Make the API call using Axios
      const response = await axios.post("api/products/createProduct", formDataToSend);
  
      // Handle the response as needed
      console.log("Products are:", response.data);
  
      // Reset form fields
      setProductName("");
      setProductImages([initialImageState]);
      setVideoFile(null);
  
      // Log after updating state
      console.log("After updating form data:", formDataToSend);
      console.log("After updating product images:", productImages);
      console.log("After updating video file:", videoFile);
  
      // Optionally, you can redirect to another page or show a success message
    } catch (error) {
      console.error("An error occurred while adding products:", error);
    }
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
                    name="product_name"
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
                {productImages.map((image, index) => (
                  <div key={index}>
                    <input
                      type="file"
                      name="product_images"
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
