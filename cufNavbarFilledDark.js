const cufNavbarFilledDark = `
    .cuf-navbar-filled-dark {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        background-color: #343A40;
    }

    .cuf-navbar-filled-ul-list-dark {
        display: flex;
        gap: 100px;
        list-style: none;
    }

    .cuf-navbar-dark-fc {
        color: #E0E0E0;
        text-decoration: none;
        font-size: 20px;
        font-weight: 500;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .cuf-navbar-dark-fc:hover {
        transition: 500ms ease-in-out;
        color: #007BFF;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = cufNavbarFilledDark;
document.head.appendChild(styleSheet);

