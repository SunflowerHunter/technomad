import { useEffect } from 'react'

const DisplayTrack = ({ 
    currentTrack, 
    audioRef, 
    setDuration,
    progressBarRef,
}) => {
    
    const onLoadedMetadata = () => {
        console.log(audioRef.current.duration);
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
        
    };
    
    return (
        <div>
            <audio 
                src={currentTrack.src} 
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}

            />
            <div className="text">
                <p className="title">{currentTrack.title}</p>
                <p>{currentTrack.author}</p>
            </div>
        
        
        
        </div>
    );
  };
  export default DisplayTrack;