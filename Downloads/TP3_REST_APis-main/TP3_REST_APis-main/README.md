# TP3 - RESTful APIs

A simple Node.js project to learn how to consume RESTful APIs using `fetch` and `axios`.

---

## Project Structure
```
TP3_APIs_RESTful/
├── index.js              # Weather API using fetch
├── indexAxios.js         # Weather API using axios
├── testAPIs.js           # Testing other public APIs
├── package.json
└── README.md
```

---

## Usage

### Test with fetch
```bash
node index.js
```

### Test with axios
```bash
node indexAxios.js
```

### Test other APIs
```bash
node testAPIs.js
```

Tests Open Library, NASA, and RandomUser APIs.

---

## Expected Output
### index.js output
```
=== Météo à Sousse ===
Description: partiellement nuageux
Température: 12.88 °C
Humidité: 76 %
=====================
```

### indexAxios.js output
```
=== Météo à Sousse (AXIOS) ===
Description: partiellement nuageux
Température: 12.88 °C
Humidité: 76 %
==============================
```

### sortie de (testAPIs.js)
```
=== Test des APIs RESTful ===

1. Open Library API
Nombre de livres trouvés: 2867
  1. JavaScript - David Flanagan
  2. Javascript - Andy Vickler
  3. JavaScript - Douglas Crockford

2. NASA API
Titre: Miranda Revisited
Date: 2026-02-09
URL: https://apod.nasa.gov/apod/image/2602/Miranda_Voyager2Zelario12_960.jpg

3. RandomUser API
  1. Mads Jensen - mads.jensen@example.com
  2. Steven Edwards - steven.edwards@example.com
  3. Evelyn Patel - evelyn.patel@example.com
```
