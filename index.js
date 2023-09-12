//////////CONST - deyisendi, deyise bilmeyen deyisen
//LET - deyiseni deyise bilendi
//Var - deyise bilendi

const a = 25;

const b = 24;

const c = 25;

function check(a, b, c) {
  return a + b + c;
}

const totalAge = check(a, b, c);

console.log(totalAge);

if (a + b + c > 75) {
  console.log("died");
} else {
  console.log("not died");
}

/////////////////////////////////////////////////////////// Object and Array


const person = {
  name: "gulsare",
  surname: "sadsa",
  age: "24",
};

const person2 = {
  name: "parvina",
  surname: "sdasad",
  age: "25",
};

const person3 = {
  name: "ismayil",
  surname: "das",
  age: "25",
};

const people = [person, person2, person3];

console.log(people);

/////////////////////////////////////////////////////////////////// CRUD = Create, Read, Update, Delete FETCH sorgu gonderir

const arr = [];

console.log(arr);

//FETCH GET Method

fetch(`https://northwind.vercel.app/api/categories`) //fetch atiriq - request atiriq
  .then((res) => res.json()) // res geldi, json oldu , gelen  datani istifade edirik
  .then((data) => {
    arr.push(data); // PUSH aldigimiz movcud array - i ...
  });

//FETCH POST METHOD

const Post = (name, description) => {
  fetch(`https://northwind.vercel.app/api/categories/`, {
    // fetch atmaq
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, //Post method FETCH
    body: JSON.stringify({
      name: name,
      description: description,
    }),
  });
};

// UPDATE Method PUT or PATCH

const update = (id, name, description) => {
  fetch(`https://northwind.vercel.app/api/categories/${id}`, {
    method: "PATCH", //PUT
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      name: name,
      description: description,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

// Delete Method

const del = (id) => {
  fetch(`https://northwind.vercel.app/api/categories/${id}`, {
    method: "DELETE",
  }).then(() => {
    console.log("removed");
  });
};

//////////////////////////////////////////// --- ////////---  -  - - -- - - CRUD AXIOS

//Get Method

axios.get(`https://northwind.vercel.app/api/categories/`).then((response) => {
  console.log("axios get", response.data);
});

//Post Method

const postAxios = (name, description) => {
  axios.post(`https://northwind.vercel.app/api/categories/`, {
    name: name,
    description: description,
  });
};

//update methodu -- tapsiriq
//delete methodu -- tapsiriq

///////////////////////////////////////////// AXIOS Instance  sonra kecerik to REACT
//////////////////////////////////////////// array methods to React
/////////////////////////////////////////// loops to react