let buttonTest = () => {
  let testButton = document.getElementsByClassName("container");
  testButton[0].style.display = "none";

  let testButton2 = document.getElementsByClassName("test");
  testButton2[0].style.display = "block";

  let inputData = {
    nama: '',
    gender: ''
  }
  
  let inputNama = document.getElementById("floatingTextarea").value
  let inputGender = document.getElementById("gender-user").value
  
  inputData.nama = inputNama
  inputData.gender = inputGender

  // console.log(inputData)

  return inputData
}

// Color Blind Test
function colorBlindTest(arr) {
  random = Math.floor(Math.random() * arr.length);

  BlindTest = arr[random];

  test.splice(random, 1)

  return BlindTest;
}

//answer button
let count = 0
let countTrue = 0
let tempObj = {
  question: "1.png",
  answer: "1",
}
let test = [
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

let answerButton = (num) => {
  count++

  let dataUser = buttonTest();
  // console.log(dataUser)
  let {nama, gender} = dataUser;

  if (count === 10) {
    if (Number(tempObj.answer) === num) {
      countTrue++
    }
    let jawaban = "";
    if (countTrue === 10) {
      if (gender === 'Male') {
        jawaban = `Hi Mr. ${nama}, You Got <span style="color: green;">${countTrue * 10}/100</span> Congratulation You Have Normal Vision!`;
      } else {
        jawaban = `Hi Ms. ${nama}, You Got <span style="color: green;">${countTrue * 10}/100</span> Congratulation You Have Normal Vision!!`;
      }
    } else {
      if (gender === 'Male') {
        jawaban = `Hi Mr. ${nama}, You Got <span style="color: red;">${countTrue * 10}/100</span> Too Bad Better Luck Next Time`;
      } else {
        jawaban = `Hi Ms. ${nama}, You Got <span style="color: red;">${countTrue * 10}/100</span> Too Bad Better Luck Next Time`;
      }
    }
    
    let hideTest = document.getElementsByClassName("test")
    hideTest[0].style.display = 'none'
    
    let showResult = document.getElementsByClassName("result")
    showResult[0].style.display = 'block'

    let resultTest = document.getElementById("hasil")
    resultTest.innerHTML = jawaban;
    
  } else {
    if (Number(tempObj.answer) === num) {
      countTrue++
    }
    
    tempObj = colorBlindTest(test)
    // console.log(tempObj)
    
    let gantiGambar = document.getElementById('image-test')
    gantiGambar.src = `image/${tempObj.question}`
    
    
    console.log(num,count,tempObj)
    console.log(countTrue, 'jumlah benar')
  }
  
  // return countTrue
}

function testAgain() {
    let back = document.getElementsByClassName("container");
    back[0].style.display = "block";

    let backResult = document.getElementsByClassName("result");
    backResult[0].style.display = "none";  
}
