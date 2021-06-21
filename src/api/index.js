export const getTodos = () => {
    return fetch('http://localhost:3001/').then(res => res.json())
}

//export const getTodos;