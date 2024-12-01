// javascript stylesheet in cuf-navbar-filled-2 component
export const cufNavbarFilledCurvedDark = () => {
    const styles = `
        .cuf-navbar-filled-curved-dark {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1500px;
            height: 50px;
            border-radius: 50px;
            background-color: #343A40;
            
        }

        .cuf-navbar-dark-ul-list {
            display: flex;
            gap: 100px;
            list-style: none;
        }

        .cuf-navbar-dark-fc {
            font-size: 20px;
            font-weight: 500;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            text-transform: uppercase;
            color: #E9ECEF;
            text-decoration: none;
            letter-spacing: 2px;
        }

        .cuf-navbar-dark-fc:hover {
            transition: 500ms ease-in-out;
            color: #007BFF;
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}