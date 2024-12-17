// Handle Reservation Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;

            alert(`Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been booked.`);
            form.reset();
        });
    }
});
