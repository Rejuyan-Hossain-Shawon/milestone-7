console.log(111);
console.log(111);
console.log(111);
console.log(121);
console.log(111);
console.log(111);
// fetech also asynchronus like as set time out all other code will be executed first before the data request response
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(111);
console.log(111);