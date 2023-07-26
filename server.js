const express = require("express");
const app = express();
const axios = require("axios").create({baseUrl: "http://20.244.56.144/numbers/odd"});

app.listen(5000, () => {
	console.log("Server started at port 5000");
});

const arr = [1,2,3,4,5];


// const url = 'https://jsonplaceholder.typicode.com/posts'

// axios
//   .get(url, {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json;charset=UTF-8",
//     },
//   })
//   .then(({data}) => {
//     console.log(data);
// });
async function doGetRequest() {

let res = await axios.get('http://20.244.56.144/numbers/odd');
let rand = await axios.get('http://20.244.56.144/numbers/rand');
let fib = await axios.get('http://20.244.56.144/numbers/fibo');
let prime = await axios.get('http://20.244.56.144/numbers/primes');
let ra = rand.data;
let data = res.data;
let fi = fib.data;
let pri = prime.data;
 const ds = data.numbers;
 const fibs = fi.numbers;
 const ras = ra.numbers;
 const pris = pri.numbers;
//  console.log(ds);
//  console.log(fibs);

 const combinedArray = [...ds, ...fibs,...ras,...pris];

 

 let uniqueArr = [];
 for(let i of combinedArray) {
	if(uniqueArr.indexOf(i) === -1) {
		uniqueArr.push(i);
	}
}
// for( let i of combinedArray){
// 	if(combinedArray[i] < com)
// }


let result = uniqueArr.slice(0,12)
console.log(result);
// console.log(ra);
// console.log(fi);
// console.log(pri);

// const combinedArray = [...ra, ...data, ...fi];

app.get('/', (req, res) => {
	return res.status(200).json({ // Check if email is not valid
		result
	});

})

}

doGetRequest();

// app.get('/', (req, res) => {
// 	return res.status(200).json({ // Check if email is not valid
// 		message: arr
// 	});

// })