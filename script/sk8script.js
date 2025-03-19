window.onload = function () {
  console.log("hi");
  document.getElementById("questiontext").innerHTML = `What brand of deck is this?`;
  let image = document.getElementById("image");
  image.src = "/html/style/images/antihero.png";
  document.getElementById("option1").innerHTML = `Baker`
  document.getElementById("option2").innerHTML = `Anti-hero`
  document.getElementById("option3").innerHTML = `Girl`
  
};
