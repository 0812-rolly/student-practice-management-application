import React from 'react';
import SvgIcon from './SvgIcon/SvgIcon';
import AreasSvgItems from './AreasSvgItems';

function AreasItems() {
  return (
    <>
      {AreasSvgItems.map((item) => (
        <div className="areas-block__items" key={item.name}>
          <SvgIcon
            className={item.className}
            width={item.width}
            height={item.height}
            iconOptions={item.lines}
          />
          <p className="areas-block__name">{item.name}</p>
        </div>
      ))}
    </>
  );
}

export default AreasItems;
