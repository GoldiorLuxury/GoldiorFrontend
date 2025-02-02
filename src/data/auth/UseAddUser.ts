// http://35.154.187.94:5100/api/product/672c49008681df2dabc8ad20

import { useQuery } from "@tanstack/react-query";

export default function UseAddUser(formData: any) {
  const { data: user, isLoading: isSavingUser } = useQuery({
    queryFn: () => saveUser(formData),
    queryKey: ["user"],
  });
  return { user, isSavingUser };
}

export async function saveUser(formData: any) {
  console.log(formData, "form data saving...");
  try {
    // Send the POST request to the backend API
    const res = await fetch("http://35.154.187.94:5100/api/auth/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send the form data in the body
    });

    const data = await res.json();

    if (res.ok) {
      // Handle success (e.g., redirect or show success message)
      console.log("User created successfully:", data);
    } else {
      // Handle failure (e.g., show error message)
      console.error("Error:", data.message || "Failed to create user");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}
