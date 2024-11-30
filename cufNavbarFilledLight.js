const cufNavbarFilledLight = `
    .cuf-navbar-filled-light {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        background-color: #E0E0E0;
    }

    .cuf-navbar-filled-ul-list-light {
        display: flex;
        gap: 100px;  
        list-style: none;
    }

    .cuf-navbar-light-fc {
        color: #000;
        text-decoration: none;
        font-size: 20px;
        font-weight: 500;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .cuf-navbar-light-fc:hover {
        transition: 500ms ease-in-out;
        color: #007BFF;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = cufNavbarFilledLight;
document.head.appendChild(styleSheet);

