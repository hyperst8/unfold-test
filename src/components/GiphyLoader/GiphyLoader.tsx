"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./giphyLoader.module.css";

const GiphyLoader = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    setImages([]);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY;
      const urls: string[] = [];

      const res = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=3&offset=0&rating=g`
      );
      const data = await res.json();
      data.data.forEach((gif: any) => {
        urls.push(gif.images.fixed_width.url);
      });
      setImages(urls);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {images.length === 0 && (
        <button
          className={styles.fetchButton}
          onClick={fetchImages}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load images"}
        </button>
      )}

      {loading && <p className={styles.loadingText}>Loading...</p>}
      {images.length > 0 && (
        <div className={styles.imageContainer}>
          {images.map((url, index) => (
            <div key={index}>
              <Image
                src={url}
                alt={`Random Gif ${index + 1}`}
                width={200}
                height={200}
                unoptimized
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GiphyLoader;
