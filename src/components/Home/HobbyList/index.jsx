import React from 'react';
import PropTypes from 'prop-types';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    onHobbyClick: PropTypes.func,
};
HobbyList.defaultProps = {
    hobbyList: [],
    onHobbyClick: null
}

function HobbyList(props) {
    const { hobbyList, onHobbyClick } = props;
    function handleClick(item) {
        if (!onHobbyClick) return;
        onHobbyClick(item);
    }
    return (
        <div>
            {hobbyList.map((item, index) =>
                (<p key={index}
                    className={item.active === true ? 'active' : ''}
                    onClick={() => handleClick(item)}>
                    {item.id}-{item.name}
                </p>))}
        </div>
    );
}

export default HobbyList;