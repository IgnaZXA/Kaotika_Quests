import '../styles/RewardsList.css';
import ItemComponent from './ItemComponent.jsx';

function RewardsList(rewards) {
    const {gold, experience, items} = rewards.rewards;

    const REWARDS_CONTAINER_STYLES = {
        position: 'relative',
        border: '1px solid rgba(172, 166, 67, 1)',
        borderRadius: '4px',
        // border: '1px solid #FFC60B',
        width: '250px',
        height: '220px',
    }

    const REWARDS_ITEMS_CONTAINER_STYLES = {
        border: '1px solid rgba(172, 166, 67, 1)',
        borderRadius: '4px',
        // border: '1px solid #FFC60B',
        margin: '20px',
        height: '100px',
        position: 'relative',
        top: '-50px'

    }

    return(
        <>
            <div style={REWARDS_CONTAINER_STYLES}>
                <div style={{position:'absolute', width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,.5)'}}></div>
                <p style={{textAlign:'center', color:'#FFC60B', position: 'relative', top:'-15px', fontSize:'18px'}}>Rewards</p>
                <ul style={{position:'relative', top:'-37px'}}>
                    <li className="whiteBullet">Gold: 
                        <p style={{position:'relative', top:'-36px', left: '40px', color:'#FF8B00'}}>{gold}</p>
                        <p style={{position:'relative', top:'-73px', left: '69px'}}>coins.</p>
                    </li>
                    <li className="whiteBullet">Experience: 
                        <p style={{position:'relative', top:'-36px', left: '60px', color:'#FF8B00'}}>{experience}</p>
                        <p style={{position:'relative', top:'-73px', left: '90px'}}>exp.</p>

                    </li>

                    <li className="whiteBullet">Items:</li>
                </ul>
                <div style={REWARDS_ITEMS_CONTAINER_STYLES}>
                    {items.map((item) => {return <ItemComponent key={item.id} itemJson={item}/>})}
                </div>
            </div>
        
        </>
    );



}

export default RewardsList;