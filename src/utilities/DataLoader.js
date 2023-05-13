import { useEffect, useState } from "react";

export default function DataLoader({ url, render }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {throw new Error(`HTTP error: ${response.status}`)}
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        console.error(`Could not load data: ${error}`);
      }
    }
    fetchData();
  }, [url]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return render(data);
}
