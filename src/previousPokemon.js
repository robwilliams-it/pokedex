const PreviousPokemon = {

    currentIndex: 0,
    
    collection: [],

    hasNextPokemon () {
        return this.currentIndex < this.collection.length - 1;
    },

    hasPreviousPokemon () {
        return this.currentIndex > 0;
    },

    getPrevious () {
        if (this.hasPreviousPokemon()) {
            this.currentIndex -= 1;
        }
        return this.collection[this.currentIndex];
    },
    
    getNext () {
        if (this.hasNextPokemon()) {
            this.currentIndex += 1;
        } 
        return this.collection[this.currentIndex];
    },

    addToPrevious (ind) {
        this.collection.push(ind);
        this.currentIndex = this.collection.length - 1;
        console.log(this.currentIndex);
    }

};

export default PreviousPokemon;
