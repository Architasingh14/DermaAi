import { useState } from "react";

function DermaForm({ setAdvice }) {
  const [form, setForm] = useState({ age: "", skinType: "", concerns: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dermaai-2-ph59.onrender.com/api/derma", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server Error:", errorText);
        setAdvice(["⚠️ Something went wrong on the server."]);
        return;
      }

      const data = await res.json();

      let formattedAdvice = [];
      if (typeof data.advice === "string") {
        formattedAdvice = data.advice
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line.length > 0);
      } else if (Array.isArray(data.advice)) {
        formattedAdvice = data.advice;
      } else {
        formattedAdvice = ["⚠️ Unexpected response format"];
      }

      setAdvice(formattedAdvice);
    } catch (err) {
      console.error("Fetch Error:", err);
      setAdvice(["⚠️ Network error. Please try again."]);
    }
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-4">
        🧴 Get Personalized Skin Advice
      </h2>

      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          required
          placeholder="Enter your age"
        />
      </div>

      <div className="form-group">
        <label>Skin Type:</label>
        <select
          name="skinType"
          value={form.skinType}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="oily">Oily</option>
          <option value="dry">Dry</option>
          <option value="combination">Combination</option>
          <option value="sensitive">Sensitive</option>
        </select>
      </div>

      <div className="form-group">
        <label>Skin Concerns:</label>
        <input
          type="text"
          name="concerns"
          value={form.concerns}
          onChange={handleChange}
          placeholder="e.g., acne, wrinkles"
          required
        />
      </div>

      <button type="submit">Get Advice</button>
    </form>
  );
}

export default DermaForm;
