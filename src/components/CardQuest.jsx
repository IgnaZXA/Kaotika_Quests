import RewardsList from './RewardsList.jsx';
import ObjectivesList from './ObjectivesList.jsx';
import imag_1 from '../assets/images/imag_1.jpg';
import imag_2 from '../assets/images/imag_2.jpg';
import imag_3 from '../assets/images/imag_3.jpg';
import imag_4 from '../assets/images/imag_4.jpg';
import imag_5 from '../assets/images/imag_5.jpg';
import imag_6 from '../assets/images/imag_6.jpg';
import imag_7 from '../assets/images/imag_7.jpg';
import imag_8 from '../assets/images/imag_8.jpg';



function CardQuest({ questJson, questHandleClick }) {
    const { id, title, description, isActive, levelRequirement, rewards, objectives, location } = questJson.quest;

    const imag_arr = [imag_1, imag_2, imag_3, imag_4, imag_5, imag_6, imag_7, imag_8];

    const value = parseInt(id.split('-')[1]);

    const CARD_STYLES = {
        // backgroundImage: `url(src/assets/images/imag_${value}.jpg)`,
        backgroundImage: `url(${imag_arr[value - 1]})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        border: '2px solid rgba(87, 84, 34, 1)',
        borderRadius: '4px',
        width: '600px',
        height: '400px',
        position: 'relative',
        margin: '10px',

    };

    const CARD_TITLE_STYLES = {
        textAlign: 'center',
        position: 'relative',
        top: '-30px',
        color: 'rgba(165, 139, 23, 1)',
        zIndex: 2
    };

    const CARD_DESCR_STYLES = {
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1)',
        zIndex: 2,
        position: 'relative',
        top: '-40px'
    };

    const CARD_IS_ACTIVE_STYLES = {
        backgroundColor: 'rgb(0,255,0)',
        width: '20px',
        height: '20px',
        borderRadius: '999px',
        margin: '5px',
        position: 'relative',
        zIndex: '2'
    };

    const CARD_IS_NOT_ACTIVE_STYLES = {
        backgroundColor: 'rgb(255,0,0)',
        width: '20px',
        height: '20px',
        borderRadius: '999px',
        margin: '5px',
        position: 'relative',
        zIndex: '2'
    };

    const CARD_LVL_REQ_STYLES = {
        width: '115px',
        color: 'rgba(121, 109, 3, 1)',
        position: 'relative',
        top: '-130px',
        left: '83%',
        zIndex: '2',
    };



    const CARD_OBJECTIVES_STYLES = {
        position: 'relative',
        zIndex: '2',
        border: '1px solid rgba(172, 166, 67, 1)',
        borderRadius: '4px',
        width: '250px',
        height: '220px',
        top: '-78px',
        margin: '20px'

    }

    const LOCATION_CONTAINER_STYLES = {
        border: '1px solid rgba(172, 166, 67, 1)',
        borderRadius: '4px',
        width: '550px',
        height: '60px',
        position: 'relative',
        top: '-330px',
        zIndex: '2',
        margin: '20px'
    };

    return (
        <div className="CardQuest" style={CARD_STYLES} onClick={() => {
            const questModified = questJson.quest;
            questModified.isActive = !(questModified.isActive);
            questHandleClick(questModified);
        }}>
            <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 1
            }}></div>


            <div style={(isActive) ? (CARD_IS_ACTIVE_STYLES) : (CARD_IS_NOT_ACTIVE_STYLES)} />

            <h2 style={CARD_TITLE_STYLES}>{title}</h2>
            <p style={CARD_DESCR_STYLES}><i>{description}</i></p>
            <p style={CARD_LVL_REQ_STYLES}><i>Level Required: {levelRequirement}</i></p>



            <div style={CARD_OBJECTIVES_STYLES}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.5)', zIndex: '1' }} />
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <p style={{ textAlign: 'center', color: '#FFC60B', position: 'relative', top: '-15px', fontSize: '18px' }}>Objectives</p>
                    <div style={{ position: 'relative', top: '-35px' }}>
                        {objectives.map((objective) => {
                            return <ObjectivesList key={objective.id} objectivesJson={objective}></ObjectivesList>
                        })}

                    </div>
                </div>
            </div>


            <div style={{ position: 'relative', top: '-319px', left: '320px', width: '250px', height: '220px', zIndex: '2' }}>
                {/* Mejora esto aprendiendo a usar react createPortal(), de momento con el div funciona pero no es una solución elegante */}
                <RewardsList rewards={rewards}></RewardsList>
            </div>


            <div style={LOCATION_CONTAINER_STYLES}> {/* Convertirlo a componente!! */}
                <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.5)', zIndex: '1' }} />
                <p style={{ color: '#FFC60B', fontSize: '18px', textAlign: 'center', position: 'relative', top: '-20px', zIndex: '2' }}>Location</p>
                <p style={{ color: 'rgb(255,255,255)', textAlign: 'center', position: 'relative', top: '-35px', zIndex: '2' }}>{location.zone}</p>

            </div>
        </div>
    );
}

export default CardQuest;