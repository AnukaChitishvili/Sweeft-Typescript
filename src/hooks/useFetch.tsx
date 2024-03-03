import { useState, useEffect, useCallback } from "react";
import { baseDefaultUrl } from "../constants/constants";

import { Image } from "../components/individual-image/IndividualImage";

interface UseFetchProps {
  images: Image[]; 
  isLoading: boolean;
  error: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  page: number;
}

const useFetch = (): UseFetchProps => {
  const [images, setImages] = useState<Image[]>([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [url, setUrl] = useState(baseDefaultUrl);
  const [page, setPage] = useState(1);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      const newPage = page + 1;
      setPage(newPage);
      const splittedArray = url.split("&page=");
      const newUrl = splittedArray[0] + `&page=${newPage}`;
      setUrl(newUrl);
    }
  }, [page, url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(url);
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setImages(parsedData);
        } else {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();
          let data: any[] = [];

          if (Array.isArray(result?.results)) {
            data = result.results;
          } else {
            data = result;
          }
          const splittedArray = url.split("&page=");
          if (+splittedArray[1] > 1) {
            setImages((prevState) => [...prevState, ...data]);
          } else {
            setImages(data);
          }

          localStorage.setItem(url, JSON.stringify(data));
        }
      } catch (error:any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    images,
    isLoading,
    error,
    setUrl,
    page,
  };
};

export default useFetch;

