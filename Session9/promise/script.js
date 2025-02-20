const data = [
  {
    name: "Abhi",
    age: 24,
  },
  {
    name: "Arul",
    age: 23,
  },
  {
    name: "Jack",
    age: 25,
  },
];

const response = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, 4000);
});

function print(info) {
  console.log(info);
}

print(response);
