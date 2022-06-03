import React, {useRef, useEffect} from 'react';
import './PairDropdownItem.css'

export default function PairDropdownItem(props) {
    const {asset1, logo1, asset2, logo2, onClick, onKeyUp, onKeyDown, focused} = props;
    const itemRef = useRef(null);

    useEffect(() => {
        if(focused){itemRef.current.focus()};
      }, [focused]);

    return (
        <div onClick={onClick} on onKeyDown={onKeyDown} onKeyUp={onKeyUp} tabIndex="2" ref={itemRef} className='dd-suggest-container'>
            <div className='dd-item-asset-container'>
                <p className='dd-suggest-asset'>{asset1}</p>
                {(logo1.endsWith('.svg'))&&<img className='dd-suggest-logo-svg' src={logo1}></img>}
                {(logo1.endsWith('.png'))&&<img className='dd-suggest-logo-png' src={logo1}></img>}
            </div>
            <div className='dd-suggest-arrow'>&rarr;</div>
            <div className='dd-item-asset-container-to'>
                {(logo2.endsWith('.svg'))&&<img className='dd-suggest-logo-to-svg' src={logo2}></img>}
                {(logo2.endsWith('.png'))&&<img className='dd-suggest-logo-to-png' src={logo2}></img>}
                <p className='dd-suggest-asset'>{asset2}</p>
            </div>
        </div>
    )
}