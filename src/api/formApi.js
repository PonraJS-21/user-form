export const submitForm = async (props) => {
  const { formData, setFormData } = props;
  try {
    const response = await fetch("http://localhost:8080/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    console.log("Success:", result);

    // Optional: reset form
    setFormData({
      name: "",
      email: "",
      message: "",
      country: "",
      address: "",
      city: "",
      state: "",
    });
  } catch (error) {
    console.error("Submission error:", error);
    alert("Something went wrong while submitting the form.");
  }
};
