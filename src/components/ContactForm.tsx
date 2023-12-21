import {useRef, useState} from 'react';

const ContactForm = () => {
  const predictionCarRef = useRef(null);

  // State to store form data
  const [formData, setFormData] = useState({
    contactInfo: '',
    serviceType: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (you can customize this)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission, e.g., sending data to a server
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{textAlign: "left"}} id="top_scroll">
      <h1 style={{width: "450px", marginBottom: "50px"}}>Let’s start a project together </h1>
      <form onSubmit={handleSubmit}>
        <div style = {{marginBottom: "30px"}}>
          <h5 style={{marginBottom: "20px"}}>- Type your email or phone number and we will contact you soon!</h5>
          <label htmlFor="contactInfo" style={{width: "500px"}}></label>
            <input
              type="text"
              id="myTextField"
              name="myTextField"
              placeholder="john.doe@gmail.com"
            />
        </div>
        <div style = {{marginBottom: "30px"}}>
          <h5 style={{marginBottom: "20px"}}>- What service are you looking for?</h5>
          <label htmlFor="serviceType"></label>
            <input
                width="400px"
                type="text"
                id="myTextField"
                name="myTextField"
                placeholder="Web Design, Web Development..."
              />
        </div>

      </form>
    </div>
  );
};

export default ContactForm;
