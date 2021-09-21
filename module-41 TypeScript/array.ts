const friendsSalaries:number[] = [234,466,8899,5764,564];
const friendsName: string[] = ['rejuyan','hossain','shawon'];

// for of
let max:number =0;
for(const salary of friendsSalaries){
    if(salary>0){
        max = salary;
    }
}