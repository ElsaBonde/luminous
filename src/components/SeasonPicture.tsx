import seasonPicture from '../assets/seasonpic.jpg';
import "../App.css";

export default function SeasonPicture() {
    return (
        <div className="season-picture">
            <img src={seasonPicture} alt="Season" /> 
            <div className='overPicture'>
            <h1 className='newSeason'>NEW SEASON, NEW LOOK</h1>    
            <button className='newInButton'>New In -&gt; </button>
            </div>
        </div>
    );
};