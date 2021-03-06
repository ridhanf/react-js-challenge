import styled from 'styled-components';

export const StyledModal = styled.div`
    position: relative;
    width: 390px;
    height: 255px;
    margin: 5px;
    .modal-rectangle {
        position: absolute;
        height: 2px;
        left: 0%;
        right: 0%;
        top: 0px;
        background: linear-gradient(83.47deg, #0084F8 9.02%, #001B36 90.81%);
    }
    .modal-container {
        width: 391px;
        height: 253px;
        position: absolute;
        left: 0%;
        right: 0%;
        top: 2px;
        bottom: 0%;
        background: #FFFFFF;
        border: 2px solid #C9D6DF;
        display: flex;
        justify-content: center;
        input {
            width: 295px;
            height: 40px;
            padding-left: 8px;
            position: absolute;
            left: 48px;
            right: 0%;
            top: 57px;
            bottom: 0%;
            background: #FFFFFF;
            border: 1px solid #C9D6DF;
            box-sizing: border-box;
            font-family: "Open Sans";
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 27px;
            &::placeholder {
                position: absolute;
                width: 216px;
                height: 28px;
                left: 8px;
                top: 6px;
                font-family: "Open Sans";
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 27px;
                display: flex;
                align-items: center;
                color: #C9D6DF;
            }
        }
    }
    .title {
        position: absolute;
        width: 150px;
        height: 17px;
        left: 48px;
        top: 40px;
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        display: flex;
        align-items: center;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #001B36;
    }
    .add-message {
        background: #FFFFFF;
        border: none;
        position: absolute;
        width: 114px;
        height: 28px;
        left: 48px;
        top: 113px;
        font-family: "Open Sans";
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 27px;
        display: flex;
        align-items: center;
        color: #0084F8;
    }
    .copy-button {
        background: #FFFFFF;
        width: 194px;
        height: 40px;
        position: absolute;
        left: 99px;
        bottom: 40px;
        border: 1px solid #0084F8;
        box-sizing: border-box;
        font-family: "Open Sans";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 34px;
        text-align: center;
        color: #0084F8;
    }
`