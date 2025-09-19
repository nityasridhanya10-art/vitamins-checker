const foodVitaminMap = {
  banana: ['Vitamin B6', 'Vitamin C', 'Manganese', 'Potassium'],
  apple: ['Vitamin C', 'Vitamin K', 'Fiber'],
  spinach: ['Vitamin A', 'Vitamin C', 'Vitamin K', 'Folate', 'Iron'],
  carrot: ['Vitamin A', 'Vitamin K', 'Vitamin B6'],
  egg: ['Vitamin B12', 'Vitamin D', 'Vitamin A', 'Choline'],
  milk: ['Vitamin D', 'Calcium', 'Vitamin B12', 'Riboflavin'],
  orange: ['Vitamin C', 'Thiamine', 'Folate'],
  almond: ['Vitamin E', 'Magnesium', 'Calcium', 'Riboflavin'],
  broccoli: ['Vitamin C', 'Vitamin K', 'Vitamin A', 'Folate'],
  salmon: ['Vitamin D', 'Vitamin B12', 'Omega-3 fatty acids', 'Selenium']
};

function checkVitamins() {
  const input = document.getElementById('foodInput').value.trim().toLowerCase();
  const resultList = document.getElementById('resultList');
  resultList.innerHTML = ''; // Clear previous results

  if (input === '') {
    resultList.innerHTML = '<li>Please enter a food name.</li>';
    return;
  }

  const vitamins = foodVitaminMap[input];

  if (!vitamins) {
    resultList.innerHTML = `<li>No data found for "<strong>${input}</strong>". Try foods like banana, milk, spinach, etc.</li>`;
    return;
  }

  vitamins.forEach(vitamin => {
    const li = document.createElement('li');
    li.textContent = vitamin;
    resultList.appendChild(li);
  });
}
