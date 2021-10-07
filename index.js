/*menu fixed*/

window.onscroll = function () { // essa função e chamada quando acontece um scroll na página
	fixedMenuScroll() // entao chama a função 
}
const $nav = document.querySelector('[c_nav__scroll]') // pega os elementos do HTML, como boa prática oque vem do HTML recebe o símbolo "$"
const $logo_fixed = document.querySelector('[nav_logo__fixed]')
const $logo = document.querySelector('[nav_logo]')


function fixedMenuScroll() {  // controla como ocorre o scroll

	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 && window.screen.width > 1260) { // Valida se o scroll da página a partir do top e maior que 80px e também se a largura da pagina é maior que 1260px, menor que 1260 nao e aplicado o menu fixo.
		$nav.classList.add('nav-fixed') // adciona a classe
		
		$logo.style.display = 'none' // adiciona o atributo "none"
		$logo_fixed.style.display = 'block' // adiciona o atributo "block"


	}  else {
		$nav.classList.remove('nav-fixed') // adciona a classe
		
		$logo.style.display = 'block' // adiciona o atributo "none"
		$logo_fixed.style.display = 'none'
	}


}

window.onresize = function() {
  if (window.screen.width < 1260) { // Caso ocorra do usuário diminuir a pagina com o menu fixo aplicado essa regra impede a exibição do menu.
	$nav.classList.remove('nav-fixed')
	$logo.style.display = 'block'
	$logo_fixed.style.display = 'none'
}
}

/*HAMBURGUER MENU */

const $hamburgerOpen = document.querySelector('[hamburger_menu]') // pegando os elementos do html
const $hamburgerClose = document.querySelector('[menu__close]')
const $menu = document.querySelector('[c_hamburger__menu]')
const $arrow_subMenu_serv = document.querySelector('[arrow_subMenu_serv]')
const $arrow_subMenu_dif = document.querySelector('[arrow_subMenu_dif]')
const $ul_subMenu_serv = document.querySelector('[ul_subMenu_serv]')
const $ul_subMenu_dif = document.querySelector('[ul_subMenu_dif]')


function setDisplayBlock (el) { // Essa função e responsável por aplicar a propriedade "block" ao display, ela recebe um elemento (el) como parâmetro. 
	el.style.display ='block'
}

function setDisplayNone (el) { // Essa função e responsável por aplicar a propriedade "none" ao display, ela recebe um elemento (el) como parâmetro.
	el.style.display ='none'
}

$hamburgerOpen.addEventListener('click', () => { // Adiciona um observer ao elemento, quando ele for clikado então chama a função setDisplayBlock como callback e passando um elemento por parâmetro.
	setDisplayBlock($menu)
	
})

$hamburgerClose.addEventListener('click', () => {// Adiciona um observer ao elemento, quando ele for clikado então chama a função setDisplayBlock como callback e passando um elemento por parâmetro.
	setDisplayNone($menu)
	
})

$arrow_subMenu_serv.addEventListener('click', () => {// Adiciona um observer ao elemento, quando ele for clikado então chama a função setDisplayBlock como callback e passando um elemento por parâmetro.

	if ($ul_subMenu_serv.style.display == "block") { // Valida se o elemento atualmente contem o atributo "block" no display.  
		setDisplayNone($ul_subMenu_serv) // Entao passa para a função responsável por setar o atributo como "none".

	} else { // caso não tenha o atributo " block" irá chamar a função que seta o atributo "block"
		setDisplayBlock($ul_subMenu_serv)
		

	}

	$arrow_subMenu_serv.classList.toggle('arrow--rotate') // caso possua a classe "arrow--rotate" remove , caso não adiciona
})

$arrow_subMenu_dif.addEventListener('click', () => { 

	if ($ul_subMenu_dif.style.display == "block") { // Valida se o elemento atualmente contem o atributo "block" no display.
		setDisplayNone($ul_subMenu_dif) //Entao passa para a função responsável por setar o atributo como "none".
		


	} else { // caso não tenha o atributo " block" irá chamar a função que seta o atributo "block"
		 
		setDisplayBlock($ul_subMenu_dif)

	}
	$arrow_subMenu_dif.classList.toggle('arrow--rotate')  // caso possua a classe "arrow--rotate" remove , caso não adiciona
})

















