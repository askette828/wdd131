let participantCount = 1;

function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <h2>Participant ${count}</h2>
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" name="name${count}" required>
            <label for="age${count}">Age:</label>
            <input type="number" id="age${count}" name="age${count}" required>
            <label for="fee${count}">Fee:</label>
            <input type="number" id="fee${count}" name="fee${count}" required>
        </section>
    `;
}

function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.fees} in Fees.`;
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, element) => total + Number(element.value), 0);
}

document.getElementById('addParticipant').addEventListener('click', () => {
    participantCount++;
    const newParticipant = participantTemplate(participantCount);
    document.getElementById('addParticipant').insertAdjacentHTML('beforebegin', newParticipant);
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const adultName = document.getElementById('adult').value;
    const totalFee = totalFees();
    
    const summary = document.getElementById('summary');
    summary.innerHTML = successTemplate({
        name: adultName,
        participants: participantCount,
        fees: totalFee
    });
    
    this.style.display = 'none';
    summary.classList.remove('hide');
});
