import React from 'react';

const Form = (props) => {


    const { boxSize, setBoxSize} = props;
    const { box, setBox } = props;

    const onChangeHandler = (e) => {
        setBoxSize(
            {...boxSize, [e.target.name]: e.target.value,}
        )
    }

    const createBox = (e) => {
        e.preventDefault();
        setBox(box => [...box, {"color": boxSize.color, "size": boxSize.size}]);

    }

    return (
        <form onSubmit={createBox}>
            <div>
                <label htmlFor="color"> Color </label>
                <input onChange={ onChangeHandler } type="text" name="color" />
                <label htmlFor="size"> Height and Length </label>
                <input onChange={ onChangeHandler } type="number" name="size" />
                <button value="color"> Add a Box </button>
            </div>
        </form>
        )
}

export default Form;