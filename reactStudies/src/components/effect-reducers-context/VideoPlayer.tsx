import { useEffect, useRef, useState } from "react";

export const VideoPlayer = () => {

    const [playing, setPlaying] = useState(false);

    const videoTag = useRef<HTMLVideoElement>(null);

    useEffect(() => {

        playing ? videoTag.current?.play() : videoTag.current?.pause();

    }, [playing]);

    return(
        <>
            <div className="flex justify-center items-center">
                <div className="flex relative max-w-200 border-2 border-slate-800 rounded-md">
                    <button onClick={() => setPlaying(!playing)}>
                        <video className="rounded-md" ref={videoTag} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" loop playsInline />

                        <div className="bg-slate-800 rounded-full p-1 absolute right-5 bottom-5">
                            {playing ? (
                                <img src="assets/videoPlayer/pause-32.png" alt="Pausar" />
                            ) : (
                                <img src="assets/videoPlayer/play-32.png" alt="Reproduzir" />
                            )}
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}