"use strict";
const friendsSalaries = [234, 466, 8899, 5764, 564];
const friendsName = ['rejuyan', 'hossain', 'shawon'];
// for of
let max = 0;
for (const salary of friendsSalaries) {
    if (salary > 0) {
        max = salary;
    }
}
