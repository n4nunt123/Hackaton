let buttonTest = () => {
  let testButton = document.getElementsByClassName('container')
  testButton[0].style.display = 'none'

  let testButton2 = document.getElementsByClassName("test")
  testButton2[0].style.display = 'block'

  let inputData = {
    nama: '',
    gender: ''
  }
  
  let inputNama = document.getElementById("floatingTextarea").value
  let inputGender = document.getElementById("gender-user").value
  
  inputData.nama = inputNama
  inputData.gender = inputGender

  console.log(inputData)
  return inputData
}

// Color Blind Test
function colorBlindTest() {

  let test = [
    {
      question: '1.png',
      answer: '1'
    },
    {
      question: '2.png',
      answer: '2'
    },
    {
      question: '3.png',
      answer: '3'
    },
    {
      question: '4.png',
      answer: '4'
    },
    {
      question: '5.png',
      answer: '5'
    },
    {
      question: '6.png',
      answer: '7'
    },
    {
      question: '7.png',
      answer: '7'
    },
    {
      question: '8.png',
      answer: '8'
    },
    {
      question: '9.png',
      answer: '1'
    },
    {
      question: '10.png',
      answer: '1'
    },
  ]

  random =  Math.floor(Math.random() * test.length);

  BlindTest = test[random]
  
  //let questionElement = document.getElementById('question')
  //questionElement.innerHTML = colorBlindTest.question

  return BlindTest
}

console.log(colorBlindTest());

//answer button
let count = 0
let answerButton = (num) => {
  count++
  if (count === 10) {
    let hideTest = document.getElementsByClassName("test")
    hideTest[0].style.display = 'none'

    let showResult = document.getElementsByClassName("result")
    showResult[0].style.display = 'block'
  }
  console.log(num,count)
  return num
}

let scoreTest = () => {

}