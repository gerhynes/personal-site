import { useState, useEffect } from "react";

// Custom hook to format dates on client side only
// Formatting dates serverside can cause hydration issues
const useFormattedDate = (date: string) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => setFormattedDate(new Date(date).toLocaleDateString()), []);

  return formattedDate;
};

export default useFormattedDate;
