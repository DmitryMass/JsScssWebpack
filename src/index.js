import "./main.scss";

async function check() {
  await fetch("https://google.com");
}

check()
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.log("Error");
  });

console.log("Helo world");
