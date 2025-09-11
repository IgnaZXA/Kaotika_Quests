import RewardsList from './RewardsList.jsx';


function CardQuest(questJson){

    const {id, title, description, isActive, levelRequirement, rewards, objectives, location} = questJson.questJson.quest;

    const value = parseInt(id.split('-')[1]);

    const CARD_STYLES = {
        background: `url(src/assets/images/imag_${value}.jpg)`,
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
        margin : '5px',
        position: 'relative',
        zIndex: '2'
    };

    const CARD_IS_NOT_ACTIVE_STYLES = {
        backgroundColor: 'rgb(255,0,0)',
        width: '20px',
        height: '20px',
        borderRadius: '999px',
        margin : '5px',
        position: 'relative',
        zIndex: '2'
    };

    const CARD_LVL_REQ_STYLES = {
        color: 'rgba(121, 109, 3, 1)',
        position: 'relative',
        top: '-130px',
        left: '83%',
        zIndex: '2',
    };

    return(
        <div className="CardQuest" style={CARD_STYLES}>
            <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 1
                
            }}></div>


            <div style={(isActive) ? (CARD_IS_ACTIVE_STYLES) : (CARD_IS_NOT_ACTIVE_STYLES)}/>

            <h2 style={CARD_TITLE_STYLES}>{title}</h2>
            <p style={CARD_DESCR_STYLES}><i>{description}</i></p>
            <p style={CARD_LVL_REQ_STYLES}><i>Level Required: {levelRequirement}</i></p>


            <div style={{position:'relative', zIndex:'2'}}> 
                {/* Mejora esto aprendiendo a usar react createPortal(), de momento con el div funciona pero no es una solución elegante */}
                <RewardsList rewards={rewards}></RewardsList>            
            </div>

            {/* <div>
                <p>Rewards: {rewards.gold} {rewards.experience} {rewards.items.map((item) => {return item.name})}</p>
            </div>
            <p>Objectives: {objectives.map((item) => {return item.description})}</p>
            <p>Location: {location.zone} in coordinates: X:{location.coordinates.x}, Y:{location.coordinates.y}</p> */}
        </div>
    );
}

export default CardQuest;