let buttonTest = () => {
  let testButton = document.getElementsByClassName("container");
  testButton[0].style.display = "none";

  let testButton2 = document.getElementsByClassName("test");
  testButton2[0].style.display = "block";

  let inputData = {
    nama: "",
    gender: "",
  };

  let inputNama = document.getElementById("floatingTextarea").value;
  let inputGender = document.getElementById("gender-user").value;

  inputData.nama = inputNama;
  inputData.gender = inputGender;

  console.log(inputData);
};

// Color Blind Test
function colorBlindTest() {
  let test = [
    {
      question: "1.png",
      answer: "1",
    },
    {
      question: "2.png",
      answer: "2",
    },
    {
      question: "3.png",
      answer: "3",
    },
    {
      question: "4.png",
      answer: "4",
    },
    {
      question: "5.png",
      answer: "5",
    },
    {
      question: "6.png",
      answer: "7",
    },
    {
      question: "7.png",
      answer: "7",
    },
    {
      question: "8.png",
      answer: "8",
    },
    {
      question: "9.png",
      answer: "1",
    },
    {
      question: "10.png",
      answer: "1",
    },
  ];

  random = Math.floor(Math.random() * test.length);

  BlindTest = test[random];

  //let questionElement = document.getElementById('question')
  //questionElement.innerHTML = colorBlindTest.question

  return BlindTest;
}

console.log(colorBlindTest());

//
let answerButton = (num) => {
  // let theAnswer = document.getElementsByClassName("btn-1")
  console.log(num);
  return num;
};

// let inputResult = {
//   user: inputData.nama,
// };

let obj = {
  user: "person",
};

let { user } = obj;
console.log(user);

let totalTrue = 10;
let totalFalse = 0;
let jawaban = "";

if (totalTrue === 10) {
  jawaban = `Hi ${user}, Score ${totalTrue * 10} Mata Kamu Normal!`;
} else {
  jawaban = `Hi ${user}, Score${totalTrue * 10} Kamu Terindikasi Buta Warna`;
}
