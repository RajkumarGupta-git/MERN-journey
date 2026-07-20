function sum(a, b=2) {
    return a + b;
}

const data = {
    email : "rajkumar73282864@gmail.com",
    pasword : "abcd",
};

const dataCopy = {...data, id:123, country: "India"};


function summ(...args) { 
    // return args.reduce((add, el) => add + el); }
    for(let i=0; i<args.length;i++) {
        console.log("You gave us : ", args[i]);
    }
}

function min(a,b,c,d) {
    console.log(arguments);
    console.log(arguments.length);
}


let names =["raj", "nikhli", "ravi","abc","xyz","mno","ijk"];
// let winner =names[0];
// let runnerup =names[1];
// let secondRunnerup =names[2];

let [winner, runnerup,secondRunnerup ,...others] = names;


const studentt = {
    name :"raj",
    age:20,
    class:"BCA",
    subjects: ["hindi","english","C","Java","Pyhton"],
    username:"raj@123",
    password:"abc123",
};

let { username: user , password: secret, city="Maharajganj"} = studentt;