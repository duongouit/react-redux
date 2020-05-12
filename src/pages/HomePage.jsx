import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

function HomePage() {
    if(1 === 2){
        
    }
    const [value, setValue] = useState('');
    const hobbyList = useSelector(state => state.hooby);
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        let action = addNewHobby({ id: hobbyList.length + 1, name: value, active:false })
        dispatch(action);
    }
    function handleClickItem(item){
        let action = setActiveHobby(item);
        dispatch(action);
    }
    return (
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <input onChange={e => setValue(e.target.value)}
                    value={value} id="txtName" />
            </form>
            <HobbyList
                hobbyList={hobbyList}
                onHobbyClick = {handleClickItem}
            />
        </div>
    );
}

export default HomePage;