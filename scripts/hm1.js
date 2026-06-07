const button = document.getElementById("generate-btn");
const calendarBody = document.getElementById("calendar-body");
button.addEventListener("click", () => {
	const month = Number(document.getElementById("month").value);
	const year = Number(document.getElementById("year").value);
	if (month < 1 || month > 12 || !year) {
		alert("Enter correct data");
		return;
	}
	generateCalendar(month, year);
});
function generateCalendar(month, year) {
	calendarBody.innerHTML = "";
	// Перший день місяця
	const firstDay = new Date(year, month - 1, 1);
	// Останній день місяця
	const lastDay = new Date(year, month, 0).getDate();
	// День тижня
	let startDay = firstDay.getDay();
	// Робимо понеділок першим днем
	if (startDay === 0) {
		startDay = 7;
	}
	let date = 1;
	for (let i = 0; i < 6; i++) {
		const row = document.createElement("tr");
		for (let j = 1; j <= 7; j++) {
			const cell = document.createElement("td");
			if (i === 0 && j < startDay) {
				cell.textContent = "";
			} else if (date > lastDay) {
				cell.textContent = "";
			} else {
				cell.textContent = date;
				date++;
			}
			row.appendChild(cell);
		}
		calendarBody.appendChild(row);
		if (date > lastDay) {
			break;
		}
	}
}
