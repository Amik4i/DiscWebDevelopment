function showInfo(optionId) {
    // Hide all info-content elements
    const infoContents = document.querySelectorAll('.info-content');
    infoContents.forEach(content => {
        content.classList.remove('active');
    });

    // Show the selected info-content
    const selectedContent = document.getElementById(optionId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}
