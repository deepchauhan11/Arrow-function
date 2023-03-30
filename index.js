let hello = "";


hello = () => {
  return "Hello World!";
}

document.getElementById("demo").innerHTML = hello();




hello = (i) => {
  return "list item " + i.toString();
}

for(i=1; i<=3; i++){
    document.getElementById("match"+i.toString()).innerHTML = hello(i);

}

