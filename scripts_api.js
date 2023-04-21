console.log('Выводим 1ый fetch - ', fetch('https://api.randomuser.me/?nat=US&results=1'));

// -------------------------------------------------------------

const getUser = count => fetch(`https://api.randomuser.me/?nat=US&results=${count}`)
    .then(res => res.json())
    .then(json => json.result)
    .then(console.log)
    .catch(console.error);

getUser(1).then(user => console.log('Выводим пользователя: ', user))

// -------------------------------------------------------------

const getFakeUser = async () => {
    try {
        let res = await fetch(`https://api.randomuser.me/?nat=US&results=0`);
        let { results }  = res.json();
        console.log('Вывожу 3ий fetch: ', results);
    } catch {
        console.error(error)
    }
}

getFakeUser();

// -------------------------------------------------------------

const getPeople = count =>
    new Promise((resolves, rejects) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`;
        const request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = () => 
            request.status === 200 ? resolves(JSON.parse(request.response).results) : rejects(Error(request.statusText));
        request.onerror = err => rejects(err);
        request.send();
    })

getPeople(5).then(members => console.log('Вывожу функцию getPeople - ', members))

// -------------------------------------------------------------