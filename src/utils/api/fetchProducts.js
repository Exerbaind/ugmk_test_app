export const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:3001/products");
    if (response) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }

  return null;
};
