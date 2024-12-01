// javascript stylesheet in cuf-navbar-filled-2 component
export const cufNavbarFilledCurvedLight = () => {
    const styles = `
        .cuf-navbar-filled-curved-light {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1500px;
            height: 50px;
            border-radius: 50px;
            background-color: #E0E0E0;
        }

        .cuf-navbar-light-ul-list {
            display: flex;
            gap: 100px;
            list-style: none;
            text-decoration: none;
        }

        .cuf-navbar-light-fc {
            font-size: 20px;
            font-weight: 500;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            text-transform: uppercase;
            color: #000;
            letter-spacing: 2px;
            list-style: none;
            text-decoration: none;
        }

        .cuf-navbar-light-fc:hover {
            transition: 500ms ease-in-out;
            color: #007BFF;
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}