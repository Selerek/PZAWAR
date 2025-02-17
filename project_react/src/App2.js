import React, { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
const queryClient = new QueryClient();
export default function Pictures() {
  const [tablica_zdjec, setZdjecia] = useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
  function goleft(tab) {
    const tablica_przed = tab;
    const tablica_po = [];
    for (let i = 0; i < tablica_przed.length; i++) {
      if(i === tablica_przed.length - 1){
        tablica_po.push(tablica_przed[0]);
      }
      else{
      tablica_po.push(tablica_przed[i + 1])
      }
    }
    setZdjecia(tablica_po);
  }
  function goright(tab) {
    const tablica_przed = tab;
    const tablica_po = [];
    for (let i = 0; i < tablica_przed.length; i++) {
      console.log(tablica_przed[0], tablica_przed[tablica_przed.length - 1])
      if(i === 0){
        tablica_po.push(tablica_przed[tablica_przed.length - 1]);
      }
      else{
        tablica_po.push(tablica_przed[i - 1]);
      }
    }
    setZdjecia(tablica_po);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="d-flex align-items-center h-auto w-auto m-0 gap-2">
        <button
          className="h-50 w-15 border-2 background-color:rgb(126, 129, 133)"
          onClick={() => goleft(tablica_zdjec)}
        >
            &#8592;
        </button>
        <div className="d-flex justify-content-between h-auto w-auto m-0 p-0">
          {tablica_zdjec.slice(0, 5).map((id) => (
            <PictureItem key={id} id={id} />
          ))}
        </div>
        <button
          className="h-50 w-15 border-2"
          onClick={() => goright(tablica_zdjec)}
        >
            &#8594;
        
        </button>
      </div>
    </QueryClientProvider>
  );
}

function PictureItem({ id }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["pictureData", id],
    queryFn: () =>
      fetch(`http://localhost:8000/picture/${id}`).then((res) => res),
  });

  if (isLoading) return <p>{id}</p>;
  if (error) return <p> {error.message}</p>;

  return (
    <div className="m-2">
      <img src={data.url} alt={`Picture ${id}`} className="w-75 h-75" />
    </div>
  );
}