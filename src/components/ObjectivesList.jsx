import '../styles/ObjectivesList.css';


function ObjectivesList(objectivesJson){


    const {id, description, completed} = objectivesJson.objectivesJson;

    const OBJECTIVE_DESC_STYLES = {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '14px',
        display: 'inline'
    };

    return (
        <div style={{display:'inline'}}>
            {(completed) ? (<input className='checkboxChecked' type="checkbox" disabled checked/>) : (<input type="checkbox" disabled/>)}
            <p style={OBJECTIVE_DESC_STYLES}>{description}</p>
            <br/>

        </div>
    );
}


export default ObjectivesList;