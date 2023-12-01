function openSidebar(){
    const sidebar = document.querySelector(".sidebar")  /*open sidebar when mouseclick on menu button*/
    sidebar.style.display = 'flex';
}
function closeSidebar(){
    const sidebar = document.querySelector(".sidebar") /*close sidebar when mouseclick on the X button*/
    sidebar.style.display = 'none';
}
function toggleDropdown(){
    var content = document.getElementById("dropdownID"); /*function to show/hide size options*/
    if (content.style.display === "none" || content.style.display === ""){
        content.style.display = "block";
    }
    else{
        content.style.display = "none"
    }
}
