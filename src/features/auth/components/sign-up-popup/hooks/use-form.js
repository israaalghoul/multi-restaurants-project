// src/components/RestaurantForm/useRestaurantForm.js
import { useState } from "react";

export function useForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    owner: "",
    email: "",
    password: "",
    confirm:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (field) => formData[field].trim() !== "";

  const isStepValid = (fields) => fields.every(validateField);

  return { formData, handleChange, validateField, isStepValid };
}
