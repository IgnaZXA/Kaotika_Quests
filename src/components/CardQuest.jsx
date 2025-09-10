

function CardQuest(questJson){

    const {id, title, description, isActive, levelRequirement, rewards, objectives, location} = questJson.questJson.quest;
    
    const CARD_STYLES = {
        border: '1px solid rgba(73, 71, 35, 1)',
        background: '',

    };

    const CARD_TITLE_STYLES = {
        textAlign: 'center'
    }

    const CARD_DESCR_STYLES = {
        textAlign: 'center',
    
    }

    const CARD_IS_ACTIVE_STYLES = {
        backgroundColor: 'rgb(0,255,0)',
        width: '40px',
        height: '40px',
        borderRadius: '999px',
        margin : '5px'
    }

    const CARD_IS_NOT_ACTIVE_STYLES = {
        backgroundColor: 'rgb(255,0,0)',
        width: '40px',
        height: '40px',
        borderRadius: '999px',
        margin : '5px'
    }

    return(
        <div className="CardQuest" style={CARD_STYLES}>
            <div style={(isActive) ? (CARD_IS_ACTIVE_STYLES) : (CARD_IS_NOT_ACTIVE_STYLES)}/>

            <h2 style={CARD_TITLE_STYLES}>{title}</h2>
            <h3 style={CARD_DESCR_STYLES}> {description}</h3>
            <p>Lvl: {levelRequirement}</p>
            <p>Rewards: {rewards.gold} {rewards.experience} {rewards.items.map((item) => {return item.name})}</p>
            <p>Objectives: {objectives.map((item) => {return item.description})}</p>
            <p>Location: {location.zone} in coordinates: X:{location.coordinates.x}, Y:{location.coordinates.y}</p>
        </div>
    );
}

export default CardQuest;