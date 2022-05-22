export function isWebp() {
	function testWebP(callback) {
	
	let webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};

	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {	
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);		
	});
};

export const clickBurgerMenuHandler = () => {
	document.querySelector('.burger').addEventListener('click', () => {
		document.querySelector('.header-menu').classList.toggle('-active')
		document.querySelector('.burger').classList.toggle('-active')
		document.querySelector('body').classList.toggle('lock')
	})
}

console.log(1);


