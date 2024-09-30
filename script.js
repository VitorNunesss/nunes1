document.getElementById('report-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issue = document.getElementById('issue').value;
    const location = document.getElementById('location').value;

    const demandItem = document.createElement('li');
    demandItem.textContent = `Nome: ${name}, E-mail: ${email}, Problema: ${issue}, Localização: ${location}`;

    document.getElementById('demands').appendChild(demandItem);

    // Limpar o formulário
    document.getElementById('report-form').reset();
});
