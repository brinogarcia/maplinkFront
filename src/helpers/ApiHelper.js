const API_URL = 'http://localhost:8080/api'

export const doGet = (path) => {
    const url = `${API_URL}${path}`;
    return fetch(url).then(response => response.json());
};

export const doPost = (path) => {
    const url = `${API_URL}${path}`;
    return fetch(url).then(response => response.json());    
};