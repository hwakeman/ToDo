import './index.css';

import header from './components/header';
import mainContent from './components/mainContentProject';
import sidebar from './components/sidebar';

export default function projectPage(projectName) {
    let projectPage = document.createElement('div');
    projectPage.classList.add('content');
    projectPage.appendChild(header());
    projectPage.appendChild(sidebar());
    projectPage.appendChild(mainContent(projectName));
    return projectPage;
}