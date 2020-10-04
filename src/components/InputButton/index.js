import React from 'react'
import Wrapper from './styles';

const InputButton = ({
    onChange,
    submitText = 'add',
    onSubmit,
    value
    }) => (
        <Wrapper className="input-button">
            <input onChange={onChange} type="text" value={value} />
            <button onClick={onSubmit}>{submitText}</button>
        </Wrapper>
    )

export default InputButton
