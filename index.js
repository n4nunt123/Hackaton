let buttonTest = () => {
  // event.preventDefault()
  let testButton = document.getElementsByClassName('create')
  // testButton[0].style.display = 'none'
  console.log(testButton)

  let inputData = {
    nama: '',
    gender: ''
  }
  
  let inputNama = document.getElementById("floatingTextarea").value
  let inputGender = document.getElementById("gender-user").value
  
  inputData.nama = inputNama
  inputData.gender = inputGender

  console.log(inputData)
}

// let inputData = {
//   nama: '',
//   gender: ''
// }

// let inputNama = document.getElementById("nama-user").value
// let inputGender = document.getElementById("gender-user").value

// inputData.nama = inputNama
// inputData.gender = inputGender

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
      answer: ''
    },
    {
      question: '6.png',
      answer: ''
    },
    {
      question: '7.png',
      answer: ''
    },
    {
      question: '8.png',
      answer: ''
    },
    {
      question: '9.png',
      answer: ''
    },
    {
      question: '10.png',
      answer: ''
    },
  ]

  random =  Math.floor(Math.random() * test.length);

  BlindTest = test[random]
  
  //let questionElement = document.getElementById('question')
  //questionElement.innerHTML = colorBlindTest.question

  return BlindTest
}

console.log(colorBlindTest());

let generatedQuestion = colorBlindTest()

let counter = 0
//let answerElement = document.getElementById('answer')

