import React from 'react';
import PropTypes from 'prop-types';
import TabContent from './TabContent';
import './Tabs.scss';

function Tabs({ tabItems }) {
  const [active, setActive] = React.useState(0);

  const openTab = (e) => {
    e.preventDefault();
    setActive(+e.target.dataset.index);
  };

  return (
    <div className="tab-container">
      <div className="tab">
        {tabItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`tab__tablinks tab__tablinks_${index === active ? 'active' : ''}`}
            onClick={openTab}
            data-index={index}
          >
            {item.title}
          </button>
        ))}
      </div>
      {tabItems[active] && <TabContent content={tabItems[active].content} />}
    </div>
  );
}

Tabs.propTypes = {
  tabItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.node,
  })),
};

Tabs.defaultProps = {
  tabItems: [],
};

export default Tabs;
