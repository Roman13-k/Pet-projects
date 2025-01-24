import React from "react";

export function MovieVideo({ videos }) {
  const trailer =
    videos.results?.find((video) => video.official == true)?.key || "";
  if (!trailer) {
    return <p>video unavailable</p>;
  }

  const videoURL = `https://www.youtube.com/embed/${trailer}`;
  return (
    <iframe
      className='rounded-[20px] ml-auto'
      width='480'
      height='280'
      src={videoURL}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen></iframe>
  );
}
