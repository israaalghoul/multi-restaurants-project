// src/components/RestaurantForm/useStepProgress.js
import { useState } from "react";

export function useProgress(totalSteps = 4) {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const resetSteps = () => setStep(1);

  return { step, nextStep, prevStep, resetSteps, setStep };
}
