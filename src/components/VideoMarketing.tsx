import makeupVideo from '../assets/liquidmakeup.mp4';
import '../App.css';

export default function VideoMarketing() {
    return (
        <>
        <video  src={makeupVideo} autoPlay loop muted></video>
        </>
    );
    }