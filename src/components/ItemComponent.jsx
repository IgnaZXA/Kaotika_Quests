

function ItemComponent(itemJson) {
  const { id, name, type, ...more } = itemJson.itemJson;

  // EXTRA: Hacer que por cada posible valor de type se escriba con un color diferente
  //   - Si un item es unique el color del texto debe ser #FF8B00
  const colorValue = (more.isUnique) ? ('rgba(255, 139, 0, 1)') : ('rgba(255, 255, 255, 1)');

  //   - El color del type será definido:
  const typeColorPalette = [];
  typeColorPalette['sword'] = 'rgba(118, 161, 49, 1)';
  typeColorPalette['consumable'] = 'rgba(219, 156, 20, 1)';
  typeColorPalette['quest_item'] = 'rgba(255, 0, 0, 1)';
  typeColorPalette['scroll'] = 'rgba(102, 255, 0, 1)';
  typeColorPalette['dagger'] = 'rgba(255, 0, 157, 1)';
  typeColorPalette['armor'] = 'rgba(0, 255, 200, 1)';
  typeColorPalette['artifact'] = 'rgba(238, 255, 0, 1)';
  typeColorPalette['amulet'] = 'rgba(0, 140, 255, 1)';
  typeColorPalette['dagger'] = 'rgba(25, 0, 255, 1)';
  typeColorPalette['dagger'] = 'rgba(153, 0, 255, 1)';
  typeColorPalette['helm'] = 'rgba(0, 255, 242, 1)';
  typeColorPalette['weapon'] = 'rgba(0, 255, 115, 1)';


  return (
    <div style={{ margin: '0px', padding: '0px', marginLeft: '10px', borderRadius: '5px', width: '200px', height: '35px', position: 'relative', top: '-3px' }}>
      <p style={{ color: colorValue, margin: '0px', padding: '5px', }}> {name}</p>
      <p style={{ color: typeColorPalette[type], margin: '0px', marginLeft: '10px', height: '14px', fontSize: '12px', position: 'relative', top: '-10px', }}><i>{type}</i></p>
    </div>
  );
}

export default ItemComponent;

