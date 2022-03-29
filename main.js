const menuBtn = document.querySelector('.barsIcon')
const nav = document.querySelector('nav')
const xmarkBtn = document.querySelector('.fa-xmark')

function switchNav() {
	nav.classList.toggle('active')
}

menuBtn.addEventListener('click', switchNav)

const arrowDown = document.querySelectorAll('.fa-angle-down')

// arrowDown.forEach(arrow => {
// 	arrow.addEventListener('click', function (e) {
// 		// arrow.nextElementSibling.classList.remove('none')
// 		// arrow.nextElementSibling.classList.add('active')
// 		arrow.classList.toggle('active')
// 		arrow.nextElementSibling.classList.toggle('active')
// 	})
// })


let openAnswers = []

const questionsBox = document.querySelectorAll('.cooperation__question')

questionsBox.forEach(question => {
	const answer = question.childNodes[7]
	const arrow = question.childNodes[5]
	question.addEventListener('click', function (e) {
		

		const answers = [...document.querySelectorAll('.cooperation__answer')]
		
		answers.forEach(answer => {
			if(answer.classList.contains('active')){
				openAnswers.push(answer)
				console.log(openAnswers)
				answer.classList.remove('active')
			}
		})

		openAnswers.forEach(openAns => {
			
			if(openAnswers.length === 1){
				openAnswers[0].classList.remove('active')
			}


			openAns.classList.remove('active')
			openAnswers.pop()


			
		})





		answer.classList.toggle('active')
		if (answer.classList.contains('active')) {
			arrow.classList.add('active')
		} else {
			arrow.classList.remove('active')
		}

		
		

		


	})
})

const links = document.querySelectorAll('nav a')

function scroll(e) {
	e.preventDefault()

	const href = this.getAttribute('href')
	

	document.querySelector(href).scrollIntoView({
		behavior: 'smooth',
		top: '5rem',
	})
}

function closeNav() {
	nav.classList.remove('active')
}

links.forEach(link => link.addEventListener('click', scroll))
links.forEach(link => {
	link.addEventListener('click', closeNav)
})

function scrollToTop() {
	const toTopBtn = document.querySelector('.to-top')
	if (window.scrollY > 500) {
		toTopBtn.style.display = 'flex'
	} else {
		toTopBtn.style.display = 'none'
	}
}

window.addEventListener('scroll', scrollToTop)

function footerYear() {
	let year = new Date()

	const spanYear = document.querySelector('.year')
	spanYear.innerHTML = year.getFullYear()
}








footerYear()
