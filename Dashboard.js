// Budget Chart
const ctx = document.getElementById('budgetChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Used', 'Remaining'],
    datasets: [{
      data: [296900, 53000],
      backgroundColor: ['#3b82f6', '#d1d5db'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ffffff', // 👈 આ લાઈન white color માટે છે
          padding: 20
        }
      },
      tooltip: {
        callbacks: {
          label: ctx => `$${(ctx.raw / 1000).toFixed(1)}K`
        }
      }
    }
  }
});
// 2. Update Footer Clock
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.querySelector('.footer p').textContent = `Powered by Geckoboard • ${time}`;
}
updateClock();
setInterval(updateClock, 60000);

// 3. Open Tickets Filter Button
const openTicketCard = document.querySelector('.card');
const filterBtn = document.createElement('button');
filterBtn.textContent = 'Filter Old Tickets';
filterBtn.className = 'btn-filter';
openTicketCard.appendChild(filterBtn);

filterBtn.addEventListener('click', () => {
  const totalEl = openTicketCard.querySelector('.value');
  const oldEl = openTicketCard.querySelector('.highlight');
  if (oldEl.style.display === 'none') {
    oldEl.style.display = 'block';
    totalEl.innerHTML = '15 <span class="small">total</span>';
    filterBtn.textContent = 'Filter Old Tickets';
  } else {
    oldEl.style.display = 'none';
    totalEl.innerHTML = '7 <span class="small">older than 4 hours</span>';
    filterBtn.textContent = 'Show All Tickets';
  }
});

// 4. New Joiner Search
const joinerCard = document.querySelectorAll('.card')[1];
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = '🔍 Search joiners...';
searchInput.className = 'input-search';
joinerCard.insertBefore(searchInput, joinerCard.children[2]);

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  joinerCard.querySelectorAll('ul li').forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(query) ? 'list-item' : 'none';
  });
});


// Dark Mode Toggle Button (top-right corner)
const darkBtn = document.createElement('button');
darkBtn.textContent = '🌗 Dark Mode';
darkBtn.className = 'btn-dark';
document.body.appendChild(darkBtn);

// Toggle Dark Mode Class
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌗 Dark Mode';
});


