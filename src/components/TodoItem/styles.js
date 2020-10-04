import styled from 'styled-components';

const Wrapper = styled.div`
    background: #c5c5c5;
    width: 100%;
    display: flex;
    padding: 20px 0;
    border-bottom: solid 1px black;
    justify-content: space-between;
    border-radius: 5px;

    .button-container, .label-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .label-container{
        flex: 8;
    }

    .button-container{
        flex: 2;
    }

    button{
        padding: 10px;
        background: red;
        border: none;
        color: white;
        border-radius: 5px;
        font-weight: 800px;
        letter-spacing: .15em;
        cursor: pointer;
    }
`;

export default Wrapper;