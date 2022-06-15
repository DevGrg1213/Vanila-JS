'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class workout{
	date = new Date();
	id = (Date.now() + '').slice(-10);

	constructor(coords,distance,duration){
		this.coords = coords;
		this.distance = distance;
		this.duration = duration;
	}
}
class Running extends workout{
	type = 'running';
	constructor(coords,distance,duration,cadence){
		super(coords,distance,duration);
		this.cadence = cadence;
	}
	// min/km
	calcPace(){
		return this.pace = this.duration / this.distance;
	}
}

class Cycling extends workout{
	type= 'cycling';
	constructor(coords,distance,duration,elivationGain){
		super(coords,distance,duration);
		this.elivationGain = elivationGain;
	}
	// km/hr
	calcSpeed(){
		return this.speed = this.distance / (this.duration / 60);
	}
}

// const run1 = new Running([12,21],12,30,21);
// const cyc1 = new Cycling([21,44],10,10,33);
// console.log(run1,cyc1);


class App{
	#map;
	#mapEvent;
	#workouts = [];
	constructor(){
		this._getPosition();

		form.addEventListener('submit', this._newWorkout.bind(this));
		inputType.addEventListener('change',this._toggleElevationField);


	}
	_getPosition(){
		if(navigator.geolocation)
		navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
			alert('Could not read your location');
		});
	}


	_loadMap(location){

		console.log(location);
		const {latitude} = location.coords;
		const {longitude} = location.coords;
		const coords = [latitude,longitude];
		console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
		this.#map = L.map('map').setView(coords,15);

		L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(this.#map);

		this.#map.on('click', this._showForm.bind(this));

	}
	_showForm(mapEv){
		this.#mapEvent = mapEv;
		form.classList.remove('hidden');
		inputDistance.focus();

	}
	_toggleElevationField(){
		inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
		inputCadence.closest('.form__row').classList.toggle('form__row--hidden');

	}
	_newWorkout(e){
		e.preventDefault();


		const validInput = (...inputs) => inputs.every(inp => Number.isFinite(inp));
		const allPositive = (...inputs) => inputs.every(inp => inp > 0);
		// get data from form
	
		const type = inputType.value;
		const distance = +inputDistance.value;
		const duration = +inputDuration.value;
		const {lat,lng} = this.#mapEvent.latlng;

		let workout;

		// if workout running,create running object

		if(type === 'running'){
			const cadence = +inputCadence.value;

			// guard clause
			if(
				// !Number.isFinite(distance) ||
				// !Number.isFinite(duration) ||
				// !Number.isFininte(cadence)
				!validInput(distance,duration,cadence) ||
				!allPositive(distance,duration,cadence)
				) return alert('Input field must be positive.');

			workout = new Running([lat,lng],distance,duration,cadence);

		}

		// if workout cycling,create cycling object
		if(type === 'cycling'){
			const elivation = +inputElevation.value;

			if(
				!validInput(distance,duration,elivation) ||
				!allPositive(distance,duration)
				) return alert('Input field must be positive.');

			workout = new Cycling([lat,lng],distance,duration,elivation);

		}
		this.#workouts.push(workout);
		console.log(this.#workouts);

		// rendering workout
		this._renderWorkoutMarker(workout);

		// clearing workout
		inputDistance.value = inputElevation.value = inputCadence.value = inputDuration.value = '';


	}

	_renderWorkoutMarker(workout){
	L.marker(workout.coords)
	.addTo(this.#map)
    .bindPopup(
    L.popup({
    	maxWidth:250,
    	minWidth:150,
    	autoClose:false,
    	closeOnClick:false,
    	className:`${workout.type}-popup`,
    	}))
    .setPopupContent('workouts')
    .openPopup();
	}
}

const app = new App();

