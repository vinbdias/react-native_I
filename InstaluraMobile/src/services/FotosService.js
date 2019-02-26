export default class FotosService {

    constructor() {

        this.apiUrl = 'https://instalura-api.herokuapp.com/api/public/fotos/';
    }

    obterFotos() {

        return fetch(`${this.apiUrl}rafael`);
    }
}