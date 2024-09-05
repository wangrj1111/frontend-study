interface Person{
    filstName:string
    lastName:string
    age:number
    greet:()=>string
}

function createPerson(
    filstName:string,
    lastName:string,
    age:number
):Person{
    return{
        filstName,
        lastName,
        age,
        greet:function(){
            return`Hello,my name is${this.filstName} ${this.lastName} and  I am ${this.age} years old`
        }
    }
}

const person:Person =createPerson('John','Doe',30)
console.log(person.greet())