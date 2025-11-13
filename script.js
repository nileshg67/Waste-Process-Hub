// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.getElementById('process-tabs');
    const contentContainer = document.getElementById('process-content');
    const tabs = tabsContainer.querySelectorAll('.process-tab');
    const panels = contentContainer.querySelectorAll('.process-panel');

    // Add click event listener to the tabs container
    tabsContainer.addEventListener('click', (event) => {
        const clickedTab = event.target.closest('button');

        // If the click wasn't on a button, do nothing
        if (!clickedTab) return;

        const tabToActivate = clickedTab.dataset.tab;

        // Deactivate all tabs
        tabs.forEach(tab => {
            tab.classList.remove('tab-active');
            tab.classList.add('tab-inactive');
        });

        // Activate the clicked tab
        clickedTab.classList.add('tab-active');
        clickedTab.classList.remove('tab-inactive');

        // Hide all content panels
        panels.forEach(panel => {
            panel.style.display = 'none';
        });

        // Show the corresponding content panel
        const panelToShow = document.getElementById(tabToActivate);
        if (panelToShow) {
            panelToShow.style.display = 'block';
        }
    });
});