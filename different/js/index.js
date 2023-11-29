// Select

const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,
	itemSelectText: '',
	shouldSort: false,
	position: 'bottom'
});

// Map

ymaps.ready(init);
function init(){
	var myMap = new ymaps.Map("map", {
		center: [48.872185073737896,2.354223999999991],
		zoom: 14
	});

	var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'map-marker.svg',
		iconImageSize: [30, 42],
    	iconImageOffset: [-3, -42]
	});

	myMap.geoObjects.add(myPlacemark);
}

// Scroll

new SimpleBar(document.querySelector('.scroll'), {
	autoHide: false,
	// scrollbarMaxSize: 70
  });

// Form

const validation = new JustValidate('.form');
const telSelector = document.querySelector("input[type='tel']");
const inputMask = new Inputmask("+7 (999)-999-99-99");
inputMask.mask(telSelector);

validation.addField('#name', [ {
		rule: 'required',
		errorMessage: "Вы не ввели имя"
	},
	{
		rule: 'minLength',
		value: 2,
		errorMessage: "Недостаточное количество символов"
  	}
]),

validation.addField('#tel', [ {
		rule: 'required',
		errorMessage: "Вы не ввели телефон"
	},
	{
		rule: 'customRegexp',
		value: /[\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/,
		errorMessage: "Неверный формат"
	}
]),

validation.addField('#email', [ {
		rule: 'required',
		errorMessage: "Вы не ввели e-mail"
	},
	{
		rule: 'email',
		errorMessage: "Неверный формат"
	}
])

// Tooltip

tippy('[data-tippy-content]');