export const cufFormField = () => {
    const styles = `
        .cuf-regform-field {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            justify-content: center;
            background-color: #343A40;
            padding: 50px
        }

        .cuf-regform-title {
            font-size: 30px;
            text-transform: uppercase; 
        }

        .cuf-form-field {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .cuf-inputfield-box {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .cuf-inputfield-lable {
            font-size: 16px;
        }

        .cuf-inputfield-input {
            width: 300px;
            height: 40px;
            border: 2px solid #343A40
        }

        .cuf-inputfield-input:focus {
            border: none;
        }

        .cuf-inputfield-input::placeholder {
            padding-left: 10px;
            font-size: 12px;
        }`;
    
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";    
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}


