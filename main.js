 class Bag {
    constructor() {
        this.slot_1 = []
    }
    CheckSlots() {
        const slots = keys(this).length
        return slots
    }
    NewSlot() {
        this[`slot_${this.CheckSlots() + 1}`] = []
    }
    PutOnBag(slot, item, peso) {
        this[`slot_${slot}`] = new Item(item, peso)
    }
};

class Item {
    constructor(name, peso) {
        
        if ( peso <= 301 ) 
        {
            this.peso = peso
            this.name = name; 
        } 
        else 
        { 
            console.log(peso) 
        }
    }
}
const BAG = new Bag;