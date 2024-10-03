import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface IApiData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Ajuste o tipo inicial do contexto
export const FetchApiContext = createContext<IApiData | null>(null);

function FetchApiProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<IApiData | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <FetchApiContext.Provider value={data}>
      {children}
    </FetchApiContext.Provider>
  );
}

export default FetchApiProvider;
