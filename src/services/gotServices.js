export default class GotServices {
    constructor(){ 
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url){
        const res = await fetch (`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error (`Could not fecth ${url} `+ `, received ${res.status}`);
        }
        return await res.json();
    }
    getAllCharacters(){
        return this.getResource (`/characters?page=5&pageSize=10`);
    }
    getChatacter(id){
        return this.getResource(`/characters/${id}`);
    }
    getAllBooks(){
        return this.getResource('/books/');
    }
    getBook(id){
        return this.getResource(`/books/${id}`);
    }
    getAllHouses(){
        return this.getResource('/houses/');
    }
    getHouse(id){
        return this.getResource(`/houses/${id}`);
    }
}


  