import '../styles/Banner.css';
// import logoo from'../assets/logoo.png';
import Recommendation from './Recommendation';

function Banner() {
    const title = "La maison Jungle"
    return (
        <div className="lmj-banner">
            {/* <img src={logoo} alt='La maison jungle' className='lmj-logoo'/> */}
            <h1 className='lmj-title'>{title}</h1>
            <Recommendation />
        </div>
        
    )
}

export default Banner