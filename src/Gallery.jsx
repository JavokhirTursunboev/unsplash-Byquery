import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
const url =
  "https://api.unsplash.com/search/photos?client_id=5tYOQSMJU4ViQEf2_O7a2_syq1NppI7j_isSxBVpFAo&query=office";
const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result;
    },
  });
  console.log(response);
  return <div>Gallery</div>;
};

export default Gallery;
