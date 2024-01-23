import React, { useEffect, useState } from "react";

export const GifList = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      const apiKey = "j0MJAtiKWFm06f3gsi4u83ano9D7Aehf"; // Reemplaza con tu propia clave de API de Giphy
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
      const response = await fetch(url);
      const { data } = await response.json();
      const gifsData = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      }));
      setGifs(gifsData);
    };

    fetchGifs();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <div>
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
};
