// Q.1 ----------finding even numbers in agiven array---------------------
const num = [10,18,16,15,13,12,10,16,15,13,17,19,15,14];
const even = num.filter(e=>{
        if(e%2 === 0){
            return e
        }
    })
// console.log("even",even);
// ------------output-------------
// even [
//     10, 18, 16, 12,
//     10, 16, 14     
//   ]
// Q.2 ------------to find consecutive----------------
let c =0
let arr = [];
for (let a of '00110001001110'){
    if(arr.includes(a)){
        c++
        a = a + '-' + c
    }
    arr.push(a)
    c = 0
  }

//   console.log("arrr", arr)

// Q.3 ----------finding duplicate elements in Array-----------------------
const data = [10,18,16,15,13,12,10,16,15,13,17,19,15,14];
const dataObj = {};
const dataArray = [];
for(let a of data){
    if(!dataObj[a]){
        dataObj[a]=1
        dataArray.push(a)
    }
    else{
        dataObj[a]++
    }
}
// console.log("no. of occurence of elements",dataObj);
// console.log("removing Duplicates",dataArray);

let duplicateArray = [];
for(let b in dataObj){
    if(dataObj[b]>1){
        duplicateArray.push(b)
    }
}
// console.log("repeated Elememnts",duplicateArray);
// -----------output-------------
// repeated Elememnts [ '10', '13', '15', '16' ]

// Q.4-------------- fetching api in reactjs using hooks-----------------------
const fetchData = async () => {
    try {
        const response = await fetch("www.example.com/api/get/1");
        const data = await response.json();
    } catch (error) {
        console.log("fetching data error",error);
    }
    // Here we can set the data using useState 
}


// Q.5-------------code to short object by id-----------
var objArr = [
    {id: 4,  name : "abc"},
    {id: 10, name : "ab2"},
    {id: 5, name : "abc3"},
    {id: 6, name : "abc5"}
]

const compare = (a,b) => {
    if(a.id<b.id) return -1;
    if(a.id>b.id) return 1;
    return 0;
}
const a = objArr.sort(compare)
// console.log("a",a)
// -----------output-------
// a [
//     { id: 4, name: 'abc' },
//     { id: 5, name: 'abc3' },
//     { id: 6, name: 'abc5' },
//     { id: 10, name: 'ab2' }
//   ]

