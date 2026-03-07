document.getElementById('memoryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;

    // Yeni kart oluşturma
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.innerHTML = `
        <h3>${title}</h3>
        <p>"${message}"</p>
        <span class="author">- ${name}</span>
    `;

    // Gride ekleme
    document.getElementById('memoryGrid').appendChild(card);

    // Formu temizle
    this.reset();
    alert("Anınız başarıyla eklendi!");
});