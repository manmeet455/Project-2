import { useEffect, useState } from "react";
import jsonData from "../data/data.json";

export const Card = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating fetching data from a JSON file
    setData(jsonData);
  }, []);

  return (
    <>

      {data.map((item) => (
        <div key={item.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.name}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.percentage}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.date}</p>
        </div>
      ))}



    </>
  )
}
