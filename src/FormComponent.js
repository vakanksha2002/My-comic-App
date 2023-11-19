import React, { useState } from "react";
import "./styles2.css";


const FormComponent = (props) => {
  const initialFormData = {
    Image1: "Cartoon House",
    Image2: "Tom and Jerry Laughing",
    Image3: "Mouse",
    Image4: "Cat Fight",
    Image5: "Kitchen",
    Image6: "Rat smells Cheese",
    Image7: "Rat inside Cage",
    Image8: "Cat Waiting",
    Image9: "Staircase",
    Image10: "Running Mouse",
  };

  // State to manage form data
  const [formData, setFormData] = useState(initialFormData);
  // Function to update form data on input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    // Add your logic here for handling form submission
    // You can access form data using event.target elements or via form references
    console.log("Form submitted");
    //for loop on initialFormData
    //for each key, get value
    //push value to textInputs

    const updatedImageUrls = { ...props.imageUrls };
    let countdfe = 0;
    for (const key in formData) {
      console.log(formData[key]);
      fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: {
            Accept: "image/png",
            Authorization:
              "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ inputs: formData[key] }),
        }
      )
        .then((response) => {
          console.log(key);
          return response.blob();
        })
        .then((blob) => {
          console.log(key + " blob");
          const imageUrl = "url(" + URL.createObjectURL(blob) + ")";
          const num = parseInt(key.substring(5));
          updatedImageUrls[num] = imageUrl; // Update the new object with the fetched imageUrl
          // props.setImageUrls(updatedImageUrls);
          countdfe++;
          if (countdfe === 10) {
            props.setImageUrls(updatedImageUrls);
            // If it's the last image, update the state once
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    // Promise.all(fetchCalls).then(() => {
    //   props.setImageUrls(updatedImageUrls); // Update the state with all fetched image URLs
    // });
  };

  return (
    
    <div className="container">
      <form id="textForm" onSubmit={handleSubmit}>
        <div className="column">
          <h1>MY COMIC HUB</h1>
          <button type="submit">CREATE MY COMIC</button>
        </div>
        <div className="column">
          <label htmlFor="Image1">Image 1:</label>
          <input
            type="text"
            id="Image1"
            name="Image1"
            value={formData.Image1}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Image2">Image 2:</label>
          <input
            type="text"
            id="Image2"
            name="Image2"
            value={formData.Image2}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Image3">Image 3:</label>
          <input
            type="text"
            id="Image3"
            name="Image3"
            value={formData.Image3}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Image4">Image 4:</label>
          <input
            type="text"
            id="Image4"
            name="Image4"
            value={formData.Image4}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Image5">Image 5:</label>
          <input
            type="text"
            id="Image5"
            name="Image5"
            value={formData.Image5}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="column">
          <label htmlFor="Image6">Image 6:</label>
          <input
            type="text"
            id="Image6"
            name="Image6"
            value={formData.Image6}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Image7">Image 7:</label>
          <input
            type="text"
            id="Image7"
            name="Image7"
            value={formData.Image7}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Image8">Image 8:</label>
          <input
            type="text"
            id="Image8"
            name="Image8"
            value={formData.Image8}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Image9">Image 9:</label>
          <input
            type="text"
            id="Image9"
            name="Image9"
            value={formData.Image9}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Image10">Image 10:</label>
          <input
            type="text"
            id="Image10"
            name="Image10"
            value={formData.Image10}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <br />
        <br />
      </form>
    </div>
  );
};
export default FormComponent;
