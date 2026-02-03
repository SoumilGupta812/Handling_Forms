import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [isEdit, setIsEdit] = useState(false);
  const valueIsValid = validationFn(enteredValue);
  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setIsEdit(false);
  }
  function handleInputBlur() {
    setIsEdit(true);
  }
  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: isEdit && !valueIsValid,
  };
}
