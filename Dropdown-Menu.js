// Optional: Toggle accessibility for click-based dropdowns
document.querySelectorAll('.dropdown > a').forEach(menu => {
  menu.addEventListener('click', function (e) {
    const parent = this.parentElement;
    const submenu = parent.querySelector('.submenu');

    if (submenu) {
      e.preventDefault();
      submenu.classList.toggle('active');

      document.querySelectorAll('.submenu').forEach(s => {
        if (s !== submenu) s.classList.remove('active');
      });
    }
  });
});

// Close dropdowns if clicked outside
document.addEventListener('click', function (e) {
  const isDropdown = e.target.closest('.dropdown');
  if (!isDropdown) {
    document.querySelectorAll('.submenu').forEach(sub => sub.classList.remove('active'));
  }
});

