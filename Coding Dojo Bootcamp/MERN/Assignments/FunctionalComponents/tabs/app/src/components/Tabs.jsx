import React, {useState} from 'react'

const Tabs = props => {
    const [tabBox, setTabBox] = useState(0);

    const onClickHandler = (e, value) => {
        setTabBox(value);
    }

    return (
        <div>
            {
            props.tabs.map( (tab, index) => {
                return(
                    <button onClick={ (e) => onClickHandler(e, index) }><span key={index}>{tab.label}</span></button>
                )
            })
        }
            <div>
                {<p>{props.tabs[tabBox].content}</p>}
            </div>
        </div>
    );
    
}

export default Tabs;