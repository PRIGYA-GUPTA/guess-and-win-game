let links = [
    "Bomb-clipart-download.png",
    "gift.jpg",
    "gift.jpg",
    "gift.jpg",
    "miss.png",
    "miss.png",
    "Bomb-clipart-download.png",
    "Bomb-clipart-download.png",
    "Bomb-clipart-download.png",
    "miss.png",
    "miss.png",
    "miss.png",
    "miss.png",
    "miss.png",
    "miss.png",
    "miss.png",
  ];

  function shuffle() {
    const shuffled = links.sort(() => Math.random() - 0.5);
    links = shuffled;
    assign();
  }

  function assign() {
    for (let i = 1; i < 17; i++) {
      document.getElementById(i).src = links[i - 1];
      document.getElementById(i).className = "face " + links[i - 1][0];
    }
  }

  shuffle();

  const cards = document.querySelectorAll(".game-card");

  let arr = Array(17);

  for (let i = 0; i <= 17; i++) {
    arr[i] = 0;
  }

  arr[0] = 1;

  let inpVar;

  function abc() {
    inpVar = document.getElementById("inp1").value;
    console.log(inpVar);
  }

  function subFunc() {
    let char1 = inpVar.charAt(0);
    let char2 = inpVar.charAt(1);

    document.getElementById("inp1").value = "";

    if (inpVar.length > 2 || !/[A-D]/.test(char1) || !/[1-4]/.test(char2)) {
      alert("Wrong Input Entered!");
    } else {
      decodeText();
    }
  }

  let count = 0;

  function decodeText() {
    let blocks = 4;
    let num1 = blocks * (inpVar.charCodeAt(0) - 65);
    let num2 = Number(inpVar.charAt(1));
    let text = num1 + num2;
    document.getElementById(text).style.visibility = "visible";
    arr[text] = 1;
    setTimeout(200000, gameStatus(text));
  }

  let myVar;

  function gameStatus(num) {
    let name = document.getElementById(num).className[5];
    if (name == "g") {
      count++;
      if (count == 3) {
        document.getElementById("win").innerHTML = "Congratulation!!! You Won";
        setTimeout(function () {
            $('#winModal').modal('show');
        }, 500);
      }
    }
    if (name == "B") {
      document.getElementById("win").innerHTML = "Alas!!! You Lost";
      setTimeout(function () {
        $('#winModal').modal('show');
        reloadGame();
      }, 500);
    }

    console.log(count);
  }


  function reloadGame() {
    const collection = document.getElementsByClassName("face");
    let l = collection.length;
    for (let i = 0; i < l; i++) {
      collection[i].style.visibility = "hidden";
    }
    count = 0;
    for (let i = 0; i <= 17; i++) {
      arr[i] = 0;
    }
    shuffle();
  }