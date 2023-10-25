

class Key{
    private signature:number= Math.random();
    getSignature(): number{
        return this.signature;
    }
}

class Person {
    private myKey: Key;

    constructor(newSignature: Key) {
        this.myKey = newSignature;
    }

    getKey(){
        return this.myKey;
    }}

abstract class House {
    protected isOpen: boolean;
    protected key: Key;
    private tenants: Person[] = [];

    constructor(key: Key){
        this.isOpen=false;
        this.key=key;
    }
    comeIn(person: Person){
if(this.isOpen){
    this.tenants.push(person);
}}
abstract OpenDoor(key: Key): void;
    }




    class MyHouse extends House {
        OpenDoor(key: Key) {
            if (key.getSignature() === this.key.getSignature()) {
                this.isOpen = true;
            }
        }
    }
    
    



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);


export {};