#
## Jeton d'API NASA
- Aller sur le site: https://api.nasa.gov/
- Choisissez le menu: Generate API Key
- Remplisser vos coordonnées pour les recevoir
let data = { username: 'nina'};
let url = 'http';

```
    fetch(url, {
        headers: { 'Content-Type': 'application/json'},
        body: JSON.parse(data)
    });
```

```
    fetch(url, {
        headers: { 'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(data)
    });
```

```
    fetch(url, {
        headers: { 'Content-Type': 'application/json'},
        method: 'POST',
        body: data
    });
```

```
    fetch(url, {
        headers: { 'Content-Type': 'application/json'},
        method: 'POST',
    });
```