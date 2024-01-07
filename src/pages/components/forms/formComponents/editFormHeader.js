export default function editFormHeader() {
    let newFormHeader = document.createElement('div');
    newFormHeader.classList.add('new-form-header');
    newFormHeader.innerHTML = "Edit task...";
    return newFormHeader;
}