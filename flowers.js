onload = () => {
	const c = setTimeout(() => {
		document.body.classList.remove('not-loaded')
		clearTimeout(c)
	}, 1000)
}

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1')
    h1.addEventListener('animationend', event => {
        if (event.animationName === 'typewriter') {
            h1.classList.add('typing-done')
        }
    })
})