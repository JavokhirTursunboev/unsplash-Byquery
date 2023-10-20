import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
const url =
  "https://api.unsplash.com/search/photos?client_id=5tYOQSMJU4ViQEf2_O7a2_syq1NppI7j_isSxBVpFAo&query=horse";
const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result;
    },
  });

  // ============ Loading ===================//
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  // ========= Error ==================//
  if (response.error) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }
  // =============== Not existing search ====================//
  const results = response.data.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>Not result found...</h4>
      </section>
    );
  }
  console.log(results);
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item.urls.regular;
        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
