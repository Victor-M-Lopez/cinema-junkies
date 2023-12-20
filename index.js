async function main() {
  let movieDataBase = await fetch("https://www.omdbapi.com/?apikey=a16b63fd&s=batman");
  let movieData = await movieDataBase.json();
  console.log(movieData);
}

main();

