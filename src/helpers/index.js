export const sendMessage = async contactInfo => {
  // Perform the mutation logic, e.g., make an API request to update the user
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/contact`,
    {
      method: "POST",
      body: JSON.stringify(contactInfo),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};

export const addSubscriber = async subscriberInfo => {
  // Perform the mutation logic, e.g., make an API request to update the user
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/subscribe`,
    {
      method: "POST",
      body: JSON.stringify(subscriberInfo),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add subscriber");
  }

  return response.json();
};
