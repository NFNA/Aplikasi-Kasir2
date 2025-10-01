// Function to render the header
function renderHeader(activeView = 'pos') {
    const header = document.createElement('header');
    const navItems = [
        { id: 'pos', label: 'POS' },
        { id: 'stock', label: 'Manajemen Stok' },
        { id: 'staff', label: 'Manajemen Staf' },
        { id: 'dashboard', label: 'Dashboard' },
    ];

    let navButtons = '';
    navItems.forEach(item => {
        navButtons += `<button class="nav-item ${activeView === item.id ? 'active' : ''}" onclick="switchView('${item.id}')">${item.label}</button>`;
    });

    header.innerHTML = `
        <nav>
            <div class="nav-container">
                <div class="logo">POS</div>
                <div class="nav-items">${navButtons}</div>
            </div>
        </nav>
    `;
    return header;
}

// Main render function
function renderApp(view = 'pos') {
    const root = document.getElementById('root');
    root.innerHTML = ''; // Clear previous content

    // Render header
    root.appendChild(renderHeader(view));

    // Render main content based on view
    const main = document.createElement('main');
    main.innerHTML = `<h1>Welcome to the ${view.charAt(0).toUpperCase() + view.slice(1)} View</h1>`;
    root.appendChild(main);
}

// Function to switch views
function switchView(view) {
    renderApp(view);
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderApp();
});
