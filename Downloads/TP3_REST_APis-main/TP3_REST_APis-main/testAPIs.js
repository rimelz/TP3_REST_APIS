const axios = require('axios');

console.log("=== Test des APIs RESTful ===\n");

// 1. Open Library API
async function testOpenLibrary() {
    console.log("1. Open Library API");
    try {
        const response = await axios.get('https://openlibrary.org/search.json', {
            params: { q: 'javascript', limit: 3 }
        });
        console.log("Nombre de livres trouvés:", response.data.numFound);
        response.data.docs.slice(0, 3).forEach((book, i) => {
            console.log(`  ${i+1}. ${book.title} - ${book.author_name ? book.author_name[0] : 'Auteur inconnu'}`);
        });
    } catch (error) {
        console.error("Erreur:", error.message);
    }
    console.log();
}

// 2. NASA API
async function testNASA() {
    console.log("2. NASA API");
    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod', {
            params: { api_key: 'DEMO_KEY' }
        });
        console.log("Titre:", response.data.title);
        console.log("Date:", response.data.date);
        console.log("URL:", response.data.url);
    } catch (error) {
        console.error("Erreur:", error.message);
    }
    console.log();
}

// 3. RandomUser API
async function testRandomUser() {
    console.log("3. RandomUser API");
    try {
        const response = await axios.get('https://randomuser.me/api/', {
            params: { results: 3 }
        });
        response.data.results.forEach((user, i) => {
            console.log(`  ${i+1}. ${user.name.first} ${user.name.last} - ${user.email}`);
        });
    } catch (error) {
        console.error("Erreur:", error.message);
        if (error.response) {
            console.error("Statut:", error.response.status);
        }
    }
    console.log();
}

// Exécuter tous les tests
async function runTests() {
    await testOpenLibrary();
    await testNASA();
    await testRandomUser();
}

runTests();
