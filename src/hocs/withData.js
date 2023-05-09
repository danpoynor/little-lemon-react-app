import React, { useState, useEffect } from 'react';

const withData = (WrappedComponent, dataSource) => {
  const WithData = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await fetch(dataSource);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    return (
      <WrappedComponent
        data={data}
        isLoading={isLoading}
        error={error}
        {...props}
      />
    );
  };

  return WithData;
};

export default withData;
