var dropdowns = document.querySelectorAll('.navbar .dropdown');

dropdowns.forEach(function (dropdown) {
    var parentItem = dropdown.parentElement;
    var parentLink = parentItem.querySelector('a');

    parentLink.addEventListener('click', function (event) {
        event.preventDefault();  // prevent the default action
        event.stopPropagation(); // stop the event from bubbling up
        dropdown.classList.toggle('active');
    });

    // Prevent dropdown items from closing the dropdown
    var dropdownItems = dropdown.querySelectorAll('li a');
    dropdownItems.forEach(function (dropdownItem) {
        dropdownItem.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});
