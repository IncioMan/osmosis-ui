import React, { useContext, useRef, useState  } from 'react';
import PairDropdownItem from '../PairDropdownItem/PairDropdownItem'
import './PairDropdown.css'
import { logos } from '../../data/logos';
import SwapContext from '../../context/SwapContext';
import AppStageContext from '../../context/AppStageContext';

export default function PairDropdown() {
    
    const tokens = ['ATOM','OSMO','LUNA',
                    'USDC','JUNO','wBTC',
                    'wETH','CRO']
    const availablePairs = []
    tokens.forEach(element1 => {
        tokens.forEach(element2=>{
            if(element1===element2){
                return
            }
            availablePairs.push(
                {
                    pool: '',
                    from: 
                        {symbol:element1,
                        token:element1
                    },
                    to: 
                        {symbol:element2,
                        token:element2
                    },
                    focused:false
                })
        })
    });
    const [isListOpen, setListOpen] = useState(false)
    const [suggestionsShown, setSuggestionsShown] = useState(availablePairs)
    const [inputText, setInputText] = useState(null)
    const [focusedOption, setFocusedOption] = useState(-1)
    const {swapContextValue, setSwapContextValue} = useContext(SwapContext)
    const {appStage, setAppStage} = useContext(AppStageContext)
    let inputRef = useRef();

    const processInput = (text) => {
        const textCleaned = text.replace(' ','')
                                .replace('->','')
        setListOpen(text.length>0)
        setInputText(text)
        setSuggestionsShown(availablePairs.filter(
            pair => {
                var filteredStrings = {search: textCleaned.toUpperCase(), select: (pair.from.symbol + pair.to.symbol).toUpperCase()}
                for(let c of filteredStrings.search) 
                if(!filteredStrings.select.includes(c)){
                    return false;
                }
            return true
            }))
    }

    const arrowHandler = (index, change) => {
            var newSuggestionsShown = [...suggestionsShown]
            var newFocusedOption = index
            if(index+change < newSuggestionsShown.length){
                newFocusedOption = index + change
            }
            if(newFocusedOption>=0){
                newSuggestionsShown[newFocusedOption].focused = true;
            }
            if(index>=0){
                newSuggestionsShown[index].focused = false;
            }
            if(newFocusedOption<0){
                newSuggestionsShown.forEach((s)=> s.focused = false);
                inputRef.current.focus()
            }
            setFocusedOption(newFocusedOption)
            setSuggestionsShown(newSuggestionsShown)
    }

    const resetFocusOptions = () => {
            var newSuggestionsShown = [...suggestionsShown]
            newSuggestionsShown.forEach((s)=> s.focused = false);
            setFocusedOption(-1)
            setSuggestionsShown(newSuggestionsShown)
    }

    const closeWindow = () => {
          var newSuggestionsShown = [...suggestionsShown]
          newSuggestionsShown.forEach((s)=> s.focused = false);
          setListOpen(false)
          setInputText('')
          setFocusedOption(-1)
          setSuggestionsShown(newSuggestionsShown)
    }
    
    const escapeWindow = () => {
        closeWindow()
        inputRef.current.focus()
    }

    const setState = (pair) => {
        setAppStage('inputAmount')
        setSwapContextValue(
            {assetFrom:{
                token: pair.from.symbol,
                amount: 0
            },
            assetTo: {
                token: pair.to.symbol
            }}
        )
    }

    return (
        <div className="dd-wrapper">
        <input className='dd-input' tabIndex="1" placeholder="Swap Pair" type="text" ref={inputRef}
                value={inputText} 
                onChange={(e)=>{
                    processInput(e.target.value)
                    if(e.target.value===''){closeWindow()}
                }}
                onFocus={()=>resetFocusOptions()}
                autoFocus
                onKeyDown = {(e) =>{
                    if (e.key === 'ArrowDown') {
                        arrowHandler(-1,1)
                }}}/>
        {isListOpen && (
            <div className='dropdown-list-container' role="list">
                    {isListOpen && suggestionsShown.map((pair, index) => (
                    <div className="dd-list-item">
                        <PairDropdownItem 
                                asset1={pair.from.symbol}
                                logo1={logos[pair.from.symbol].icon}
                                asset2={pair.to.symbol}
                                logo2={logos[pair.to.symbol].icon}
                                focused={pair.focused}
                                onClick={() => {
                                    setState(pair)
                                    closeWindow();
                                }}
                                onKeyUp = {(e) =>{
                                    if (e.key === 'Enter') {
                                        setState(pair)
                                        closeWindow();
                                    }
                                    if (e.key === 'Escape') {
                                        escapeWindow();
                                    }
                                }}
                                onKeyDown = {(e)=>{
                                    if (e.key === 'ArrowDown') {
                                        arrowHandler(index, 1)
                                    }
                                    if (e.key === 'ArrowUp') {
                                        arrowHandler(index, -1)
                                    }
                                }}
                        ></PairDropdownItem>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}