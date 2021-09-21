interface Player {
    name:string,
    age:number,
    salary:number,
    club:string[],
    wife?:boolean
}
const messi:Player ={
    name:'messi',
    age:32,
    salary:34355,
    club:["PSG","FCB"],
    wife:true



}
const neymar:Player ={
    name:'neymar',
    age:23,
    salary:39355,
    club:["PSG","FCB"],
    



}
interface Employee {
    name:string,
    age:number,
    designation: string,
    salary:number
}

interface Developer extends Employee{
    language:string[],
    experience:number,
    expert: string
}

const shawon:Developer ={
    name:"shawon",
    age:22,
    designation:"web developer",
    salary:342555,
    language:["c","c#","c++","javaScript"],
    experience:3,
    expert:"javaScipt"

}