import styled from 'styled-components';

const Wrapper = styled.form`
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    height: 60px;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: flex-start;
    
    input{
        border-radius: 5px 0px 0px 5px;
        border: none;
        border: solid 1px black;
        width: 78%;
        padding: 20px;
        text-align: center;
        font-size: 1.3em;
    }
    
    button{
        border-radius: 0px 5px 5px 0px;
        border: none;
        width: 20%;
        height: 100%;
        font-size: 1.2em;
        color: white;
        background: black;
        font-weight: 800;
        cursor: pointer;
    }
`

export default Wrapper;