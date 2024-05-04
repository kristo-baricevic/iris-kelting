import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { gsap } from "gsap";
// import BackgroundAnimation from "@/components/BackgroundAnimation";
import MultiTrackPlayer from "@/components/MultiTrackPlayer";
import LinerNotes from "@/components/LinerNotes";
import { AudioPlayerContext } from "@/components/AudioPlayerContext";
import {
  animationForSong,
  clearAnimations,
} from "@/utils/animations";

function Index() {
  const audio = useContext(AudioPlayerContext);

  useEffect(() => {
    if (audio) {
      const { currentSongIndex } = audio;

      // stop current animation
      clearAnimations();

      animationForSong(120, 0, 0);
    }

    loadNewSong(currentSongIndex);
  }, [audio?.currentSongIndex]);

  // test fetch
  // useEffect(() => {
  //   fetch("http://localhost:8080/api/songs")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((songsData) => {
  //       if (songsData && songsData.length > 0) {
  //         // setMessage(songsData[0].title);
  //         // setPeople(songsData.people) // Uncomment or modify as needed
  //       } else {
  //         console.log("No song data available");
  //         // setMessage("whoops");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Fetch error:", error);
  //     });
  // }, []);

  if (!audio) {
    return null;
  }

  const { currentSongIndex, loadNewSong } = audio;

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <div className="night-sky" id="night-sky"></div>
      <div className="page-title flex justify-center">
        {"kr1st0-beats".split("").map((letter, index) => (
          <span key={index} className="letter text-2xl" id="letter">
            {letter}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center box mb-10 h-80 w-80 bg-cyan-300 rounded-lg">
        <MultiTrackPlayer />
      </div>
      <div id="starburst" className="starburst"></div>
      <div>{/* <BackgroundAnimation /> */}</div>
      <LinerNotes />
    </main>
  );
}

export default Index;