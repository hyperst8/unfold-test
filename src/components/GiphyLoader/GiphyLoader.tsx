/**
 * GiphyLoader Component
 *
 * This component fetches and displays trending GIFs from the Giphy API.
 *
 * Features:
 * - Fetches trending GIFs using the Giphy API when the "Load images" button is clicked.
 * - Displays a loading state while fetching data.
 * - Renders the fetched GIFs in a responsive layout.
 *
 * State:
 * - `images`: An array of URLs for the fetched GIFs.
 * - `loading`: A boolean indicating whether the data is being fetched.
 *
 * Accessibility:
 * - The button is disabled while loading to prevent multiple requests.
 *
 * @returns {JSX.Element} A functional component that displays trending GIFs.
 */

"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./giphyLoader.module.css";
import { GiphyGif, GiphyApiResponse } from "./types";

const GiphyLoader = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch trending GIFs from Giphy API
  const fetchImages = async () => {
    setLoading(true);
    setImages([]);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY;
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=3&offset=0&rating=g`
      );
      const data: GiphyApiResponse = await res.json();

      const urls = data.data.map((gif: GiphyGif) => gif.images.fixed_width.url);
      setImages(urls);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Render button if no images are loaded */}
      {images.length === 0 && (
        <button
          className={styles.fetchButton}
          onClick={fetchImages}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load images"}
        </button>
      )}

      {/* Show loading text */}
      {loading && <p className={styles.loadingText}>Loading...</p>}

      {/* Render images if available */}
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
