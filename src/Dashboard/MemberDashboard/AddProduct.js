import React, { useState , useEffect} from "react";
import axios from "../../Api Base URL/axios";
import "./AddProduct.css";
import Grid from "@mui/material/Grid";

const AddProduct = () => {
  console.log("AddProduct component rendered");
  const initialImageState = {
    image: null,
    altText: "",
  };
  const [productName, setProductName] = useState("");
  const [productImages, setProductImages] = useState([initialImageState]);
  const [videoFile, setVideoFile] = useState(null);
  const initialFormData = {
    product_name: "",
    video_url: null,
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
    console.log("Name:", name);
    console.log("Value:", value);
    setFormData({ ...formData, [name]: value });
  };
  

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    const updatedFormData = new FormData();
    updatedFormData.append("product_name", formData.product_name);
    updatedFormData.append("total_stocks_added", formData.total_stocks_added);
    updatedFormData.append("no_of_stocks_available", formData.no_of_stocks_available);
    updatedFormData.append("commission_rate", formData.commission_rate);
    updatedFormData.append("mrp_price", formData.mrp_price);
    updatedFormData.append("offer", formData.offer);
    updatedFormData.append("final_price", formData.final_price);
    updatedFormData.append("video_url", file);
  
    setFormData(updatedFormData);
  };
  
 

  const addImageField = () => {
    setProductImages([...productImages, initialImageState]);
  };

  const removeImageField = (index) => {
    const updatedImages = [...productImages];
    updatedImages.splice(index, 1);
    setProductImages(updatedImages);
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    const updatedFormData = new FormData();
    updatedFormData.append("product_name", formData.product_name);
    updatedFormData.append("total_stocks_added", formData.total_stocks_added);
    updatedFormData.append("no_of_stocks_available", formData.no_of_stocks_available);
    updatedFormData.append("commission_rate", formData.commission_rate);
    updatedFormData.append("mrp_price", formData.mrp_price);
    updatedFormData.append("offer", formData.offer);
    updatedFormData.append("final_price", formData.final_price);
    updatedFormData.append(`product_images_${index}`, file);
  
    setFormData(updatedFormData);
  };
  
  
  useEffect(() => {
    // Log the FormData object when formData state changes
    const logFormData = async () => {
      console.log("Form Data is", formData);
    };

    logFormData();
  }, [formData]);

const handleSubmit = async (e) => {
  e.preventDefault();
  
  console.log("AddProduct component rendered");
  try {
    const formDataToSend = new FormData();
    formDataToSend.append("product_name", formData.product_name);
    formDataToSend.append("total_stocks_added", formData.total_stocks_added);
    formDataToSend.append("no_of_stocks_available", formData.no_of_stocks_available);
    formDataToSend.append("commission_rate", formData.commission_rate);
    formDataToSend.append("mrp_price", formData.mrp_price);
    formDataToSend.append("offer", formData.offer);
    formDataToSend.append("final_price", formData.final_price);

    // Append video file
    if (videoFile) {
      formDataToSend.append("video_url", videoFile);
    }

    // Append each image file separately
    productImages.forEach((image, index) => {
      formDataToSend.append(`product_images_${index}`, image.image);
    });

    console.log("Form Data is", formDataToSend);

    // Make the API call using Axios
    const response = await axios.post("api/products/createProduct", formDataToSend);

    // Handle the response as needed
    console.log("Products are:", response.data);

    // Reset form fields
    setFormData(initialFormData);
    setProductImages([initialImageState]);
    setVideoFile(null);

    // Optionally, you can redirect to another page or show a success message
  } catch (error) {
    console.error("An error occurred while adding products:", error);
  }
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
                <label className="lbl-field">Product Images</label>
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
