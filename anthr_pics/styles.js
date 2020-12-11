let styles = `

    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        align-items: center;
        min-height: calc(80vh);
        height: auto;
    }

    form {
        display: flex;
        width: 100%;
        max-width: 200px;
        align-items: center;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        border: 1px solid lightgray;
        padding: 2rem 3rem;
        border-radius: 4px;
    }

    label {
        font-size: 1.10rem;
        line-height: 1.5;
        width: 100%;
        text-align: left;
    }
    input {
        padding: 7px 15px;
        border-radius: 4px;
        font-size: 1rem;
    }
    input:focus, button:focus {
        outline: none;
    }

    button {
        padding: 8px 15px;
        font-size: 1.15rem;
        border-radius: 4px;
        margin: 2rem 0;
        width: 100%;
        background: #FF5722;
        color: white;
        cursor: pointer;
    }

    #form, #output {
        flex: 1;
    }
    #output {
        font-size: 1.25rem;
        text-align: center;
        letter-spacing: .25px;
        line-height: 3;
        font-variant: small-caps;
    }

    ::-webkit-input-placeholder {
        color: lightgray !important;
        font-size: .8rem;
    }
    :-ms-input-placeholder {
        color: lightgray !important;
        font-size: .8rem;
    }
    ::placeholder {
        color: lightgray !important;
        font-size: .8rem;
    }


`;


const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);