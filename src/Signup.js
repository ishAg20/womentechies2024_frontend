import React, { useState } from "react";

interface User {
  name: string;
  city: string;
  state: string;
  pincode: string;
  language: string;
  imageFile: File;
  contact: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const indianLanguages = [
  { value: "hi", label: "Hindi" },
  { value: "eng", label: "English" },
  { value: "ta", label: "Tamil" },
  { value: "te", label: "Telugu" },
  { value: "mr", label: "Marathi" },
  { value: "kn", label: "Kannada" },
  { value: "ml", label: "Malayalam" },
  { value: "gu", label: "Gujarati" },
  { value: "pa", label: "Punjabi" },
  { value: "or", label: "Odia" },
  { value: "bn", label: "Bengali" },
];
const indianStates = [
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  {
    value: "Dadra and Nagar Haveli and Daman and Diu",
    label: "Dadra and Nagar Haveli & Daman and Diu",
  },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Puducherry", label: "Puducherry" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
  { value: "Aland Islands", label: "Aland Islands" },
  { value: "Daman and Diu", label: "Daman and Diu" },
  { value: "Delhi", label: "Delhi" },
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "NCR", label: "NCR" },
];
const SignUpWomen: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    city: "",
    state: "",
    pincode: "",
    language: "",
    imageFile: null!, // Required image file
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setErrorMessage(null); // Clear error on change
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setUser({ ...user, imageFile: event.target.files[0] });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let allErrors = "";
    const phoneRegex = /^\d{10}$/; // Matches 10-digit phone numbers
    if (!phoneRegex.test(user.contact)) {
      allErrors += "Invalid phone number format.\n";
    }
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(user.email)) {
      allErrors += "Invalid email format.\n";
    }
    if (user.password !== user.confirmPassword) {
      allErrors += "Passwords do not match.\n";
    }
    if (allErrors) {
      window.alert(allErrors);
      return; // Prevent form submission
    }
    // Send data (user object) to your backend for signup
    console.log("Submitted user data:", user);

    // Reset form after successful submission (optional)
    setUser({
      name: "",
      city: "",
      state: "",
      pincode: "",
      language: "",
      imageFile: null!,
      contact: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <br></br>
        <label htmlFor="state">State:</label>
        <select
          id="state"
          name="state"
          value={user.state}
          onChange={handleChange}
          required
        >
          <option value="">Select State</option>
          {indianStates.map((state) => (
            <option key={state.value} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
        <br></br>
        <label htmlFor="city">City/Town/Village:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={user.city}
          onChange={handleChange}
          required
        />
        <br></br>
        <label htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          value={user.pincode}
          onChange={handleChange}
          required
        />
        <br></br>
        <label htmlFor="language">Language:</label>
        <select
          id="language"
          name="language"
          value={user.language}
          onChange={handleChange}
          required
        >
          <option value="">Select Language</option>
          {indianLanguages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>{" "}
        <br></br>
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          required
        />{" "}
        <br></br>
        <label htmlFor="contact">Contact Number:</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={user.contact}
          onChange={handleChange}
          required
        />{" "}
        <br></br>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />{" "}
        <br></br>
        <label htmlFor="password">Create Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <br></br>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          required
        />
        <br></br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpWomen;
