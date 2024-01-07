import './components.css';

import headerIconUrl from '../../images/main-icon.png'

export default function header() {
    let header = document.createElement("div");
    header.classList.add("header");

    let headerIcon = document.createElement("button");
    headerIcon.classList.add("header-icon");

    let headerIconImage = document.createElement("img");
    headerIconImage.classList.add("header-icon-image");
    headerIconImage.src = headerIconUrl;
    
    headerIcon.appendChild(headerIconImage);
    header.appendChild(headerIcon);
    document.body.appendChild(header);
    return header;
}