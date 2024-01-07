export default function newFormHeader() {
    let newFormHeader = document.createElement('div');
    newFormHeader.classList.add('new-form-header');
    newFormHeader.innerHTML = "Create new...";
    return newFormHeader;
}