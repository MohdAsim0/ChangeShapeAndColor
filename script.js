function changeColor() {
  let colors = ["red", "blue", "green", "yellow", "orange", "pink"];
  let circleBox = document.getElementById("outer");
  let index = Math.floor(Math.random() * (colors.length - 1));
  circleBox.style.backgroundColor = colors[index];
}

let flag = true;
function changeShape() {
  //   let shapes = ["box", "circle2"];
  //   let shape = document.getElementById("inner");
  //   let index = Math.floor(Math.random() * (shapes.length - 1));

  //   let classes = shape.classList; //circle2
  //   classes.forEach((item) => {
  //     if (shapes.includes(item) == true) {
  //       shape.classList.remove(item);
  //     }
  //   });

  //   shape.classList.add(shapes[index]);
  let shape = document.getElementById("inner");
  if (flag === true) {
    shape.classList.add("box");
    shape.classList.remove("triangle");
    flag=false;
  }
  else{
    shape.classList.add("triangle");
    shape.classList.remove("box");
    flag=true;
  }
}

document.getElementById("color").addEventListener("click", changeColor);
document.getElementById("shape").addEventListener("click", changeShape);
