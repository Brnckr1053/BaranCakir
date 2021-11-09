import React from "react";


const Result = props => {
    const {myIdea, setMyIdea} = props;

    const checkNoStyle = {
        textDecoration:"none"
    }

    const checkYesStyle = {
        textDecoration:"line-through"
    }

    const deleteIdea = (idx) => {
        props.setMyIdea(idx)
    
    }


const completeItem = e => {
    props.updateStyle(e.target.value)
}

    return(
        <div className="col-6">
            <h1>Ideas</h1>
            <table>
                <tr>
                    <th>Idea</th>
                    <th>Check</th>
                    <th> </th>
                </tr>
                {
                    props.myIdea.map((idea, i) => {
                        return <tr style={idea.completed ? checkYesStyle : checkNoStyle} key={i}>
                            <td>{idea.todo}</td>
                            <td><input type="checkbox" name="check" checked={idea.completed} onChange={completeItem} value={i}/> </td>
                            <td> <button onClick={()=> deleteIdea(i)}> DELETE </button></td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}
export default Result;

