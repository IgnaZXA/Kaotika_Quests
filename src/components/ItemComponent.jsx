

function ItemComponent(itemJson){
  const {id, name, type, ...more} = itemJson.itemJson;

  // EXTRA: Hacer que por cada posible valor de type se escriba con un color diferente

  const colorValue = 'rgba(255, 255, 255, 1)';
  return (
    <div style={{margin:'0px', padding:'0px',marginLeft:'10px', borderRadius: '5px', width:'200px', height:'35px', position:'relative', top:'-3px'}}>
      <p style={{color: colorValue, margin:'0px', padding:'5px',}}> {name}</p>
      <p style={{color:'rgba(188, 255, 64, 1)', margin:'0px', marginLeft:'10px', height:'14px', fontSize:'12px', position:'relative',top:'-10px',}}><i>{type}</i></p>
    </div>
  );
}

export default ItemComponent; 

