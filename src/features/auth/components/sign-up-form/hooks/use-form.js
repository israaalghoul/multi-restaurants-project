import { useState } from "react";

export function useForm(initialState={}) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

    const validateField = (fieldName) => {
    const value = formData[fieldName];
    return typeof value === 'string' && value.trim() !== '';
  };

  const isStepValid = (fields) => {
    if (!fields || fields.length === 0) return true;
    return fields.every(validateField);
  };

  return { formData, handleChange, isStepValid };
}
