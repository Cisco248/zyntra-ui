export const cufFormFieldLight = () => {
    const styles = `
        .cuf-regform-field-light {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            justify-content: center;
            background-color: #F8F9FA;
            padding: 50px;
            border-radius: 10px;
        }

        .cuf-regform-title {
            font-size: 30px;
            text-transform: uppercase; 
            letter-spacing: 3px;
        }

        .cuf-form-field {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .cuf-inputfield-box {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .cuf-inputfield-lable {
            font-size: 16px;
            padding-left: 5px;
        }

        .cuf-inputfield-input {
            width: 300px;
            height: 40px;
            border-radius: 5px;
        }

        .cuf-inputfield-input:focus {
            border: none;
        }

        .cuf-inputfield-input::placeholder {
            padding-left: 10px;
            font-size: 12px;
            // color: #E9ECEF
        }
            
        .cuf-inputfield-button {
            margin-top: 20px;
            height: 30px;
            width: 100px;
            font-size: 16px;
            border-radius: 5px;
        }`;
    
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";    
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}


