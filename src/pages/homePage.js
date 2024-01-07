import './index.css';

import header from './components/header';
import mainContent from './components/mainContentHome';
import sidebar from './components/sidebar';

export default function homePage() {
    let homePage = document.createElement('div');
    homePage.classList.add('content');
    homePage.appendChild(header());
    homePage.appendChild(sidebar());
    homePage.appendChild(mainContent());
    return homePage;
}