// // // 'use strict';
 
// // // class Workout {
// // //   date = new Date();
// // //   id = (Date.now() + '').slice(-10);
// // //   clicks = 0;
 
// // //   constructor(coords, distance, duration) {
// // //     this.coords = coords; // [lat, lng]
// // //     this.distance = distance; // in km
// // //     this.duration = duration; // in min
// // //   }
 
// // //   _setDescription() {
// // //     // prettier-ignore
// // //     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
// // //     this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
// // //       months[this.date.getMonth()]
// // //     } ${this.date.getDate()}`;
// // //   }
 
// // //   click() {
// // //     this.clicks++;
// // //   }
// // // }
 
// // // // Test the Workout class
// // // const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
// // // console.log('Test workout:', testWorkout);
// // // console.log('Workout ID:', testWorkout.id);
// // // console.log('Workout date:', testWorkout.date);
 
// // // testWorkout.click();
// // // testWorkout.click();
// // // console.log('Click count:', testWorkout.clicks);
 
// // // class Running extends Workout {
// // //     type = 'running';
 
// // //     constructor (coords, distance, duration, cadence) {
// // //         super(coords, distance, duration);
// // //         this.cadence = cadence;
// // //         this.calcPace();
// // //         this._setDescription();
// // //     }
 
// // // calcPace() {
// // //     this.pace = this.duration / this.distance
// // //     return this.pace;
// // // }
// // // }
 
// // // class Cycling extends Workout {
// // //     type = 'cycling';
 
// // //     constructor (coords, distance, duration, elevationGain) {
// // //         super(coords, distance, duration);
// // //         this.elevationGain = elevationGain;
// // //         this.calcSpeed();
// // //         this._setDescription();
// // //     }
 
// // //     calcSpeed() {
// // // this.speed = this.distance / (this.duration / 60);
// // // return this.speed;
// // //     }
// // // }
 
// // // const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
// // // console.log('Running workout:', run1);
// // // console.log('Running pace:', run1.pace.toFixed(1), 'min/km');
// // // console.log('Running description:', run1.description);
 
// // // const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
// // // console.log('Cycling workout:', cycling1);
// // // console.log('Cycling speed:', cycling1.speed.toFixed(1), 'km/h');
// // // console.log('Cycling description:', cycling1.description);
 
// // // run1.click();
// // // cycling1.click();
// // // console.log('Run clicks:', run1.clicks);
// // // console.log('Cycling clicks:', cycling1.clicks);
 
// // // //////////////////////////////////////////////////////////////////////////////////////////
 
// // // class App {
// // //   #map;
// // //   #mapZoomLevel = 13;
// // //   #mapEvent;
// // //   #workouts = [];
 
// // //   constructor() {
// // //     this._getPosition();
// // //   }
 
// // //   _getPosition() {
// // //     if (navigator.geolocation)
// // //       navigator.geolocation.getCurrentPosition(
// // //         this._loadMap.bind(this),
// // //         function () {
// // //           alert('Could not get your position');
// // //         }
// // //       );
// // //   }
 
// // //   _loadMap(position) {
// // //     const { latitude } = position.coords;
// // //     const { longitude } = position.coords;
// // //     const coords = [latitude, longitude];
 
// // //     this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
 
// // //     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
// // //       attribution:
// // //         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// // //     }).addTo(this.#map);
 
// // //     // Add click event listener
// // //     this.#map.on('click', this._showForm.bind(this));
// // //   }
 
// // //   _showForm(mapE) {
// // //     this.#mapEvent = mapE;
// // //     const { lat, lng } = mapE.latlng;
 
// // //     console.log(`Map clicked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
 
// // //     // Add a temporary marker to show where user clicked
// // //     L.marker([lat, lng])
// // //       .addTo(this.#map)
// // //       .bindPopup(`Clicked here: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
// // //       .openPopup();
// // //   }
// // // }
 
// // // // Create the app
// // // const app = new App();

// // // // Check if geolocation is supported
// // // if (navigator.geolocation) {
// // //     navigator. geolocation.getCurrentPosition(function(position) {
// // //         //success callback - user granted permission
// // //         const {latitude} = position.coords;
// // //         const {longitude} = position.coords;
// // //         console.log('User Location: ${latitude}, ${longitude}');
// // //     }, 
// // // function() {
// // //     //error callback - user denied permission or other error 
// // //     alert('Could not get your position');
// // // }
// // // );
// // // }

// // // // Add this to test Leaflet integration
// // // console.log('=== TESTING LEAFLET MAPS ===');

// // // function createTestMap() {
// // //   // Default coordinates (Denver, Colorado)
// // //   const coords = [39.7392, -104.9903];
// // //   const zoomLevel = 13;

// // //   // Create the map
// // //   const map = L.map('map').setView(coords, zoomLevel);

// // //   // Add tile layer (the actual map images)
// // //   L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
// // //     attribution:
// // //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// // //   }).addTo(map);

// // //   // Add a marker to test
// // //   L.marker(coords).addTo(map).bindPopup('Test location!').openPopup();

// // //   console.log('Map created successfully!');
// // // }

// // // // Test the map creation
// // // createTestMap();

// // ///////////////////////////////////////////////////////////

// // class App {
// //   #map;
// //   #mapZoomLevel = 13;
// //   #mapEvent;
// //   #workouts = [];

// //   constructor() {
// //     // Get user's position
// //     this._getPosition();

// //     // Attach event handlers
// //     form.addEventListener('submit', this._newWorkout.bind(this));
// //     inputType.addEventListener('change', this._toggleElevationField);
// //   }

// //   _getPosition() {
// //     if (navigator.geolocation) {
// //       console.log('🔍 Requesting user location...');
// //       navigator.geolocation.getCurrentPosition(
// //         this._loadMap.bind(this),
// //         this._handleLocationError.bind(this),
// //         {
// //           timeout: 10000,
// //           enableHighAccuracy: true,
// //           maximumAge: 600000,
// //         }
// //       );
// //     } else {
// //       alert('❌ Geolocation is not supported by this browser');
// //       this._loadDefaultMap();
// //     }
// //   }

// //   _handleLocationError(error) {
// //     console.error('Geolocation error:', error);

// //     let message = 'Could not get your position. ';

// //     switch (error.code) {
// //       case error.PERMISSION_DENIED:
// //         message +=
// //           'Location access was denied. Please enable location services and refresh the page.';
// //         break;
// //       case error.POSITION_UNAVAILABLE:
// //         message +=
// //           'Location information is unavailable. Using default location.';
// //         break;
// //       case error.TIMEOUT:
// //         message += 'Location request timed out. Using default location.';
// //         break;
// //       default:
// //         message += 'An unknown error occurred. Using default location.';
// //         break;
// //     }

// //     alert(`📍 ${message}`);
// //     this._loadDefaultMap();
// //   }

// //   _loadDefaultMap() {
// //     console.log('📍 Loading default map location (London)');
// //     // Use London as default coordinates
// //     const defaultCoords = [51.5074, -0.1278];

// //     this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

// //     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
// //       attribution:
// //         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// //     }).addTo(this.#map);

// //     // Handling clicks on map
// //     this.#map.on('click', this._showForm.bind(this));

// //     console.log('🗺️ Default map loaded successfully');
// //   }

// //   _loadMap(position) {
// //     const { latitude } = position.coords;
// //     const { longitude } = position.coords;
// //     console.log(`📍 Loading map at coordinates: ${latitude}, ${longitude}`);

// //     const coords = [latitude, longitude];

// //     this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

// //     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
// //       attribution:
// //         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// //     }).addTo(this.#map);

// //     // Handling clicks on map
// //     this.#map.on('click', this._showForm.bind(this));

// //     console.log('🗺️ Map loaded successfully at user location');
// //   }

// //   _showForm(mapE) {
// //     this.#mapEvent = mapE;
// //     form.classList.remove('hidden');
// //     inputDistance.focus();
// //   }

// //   _hideForm() {
// //     // Empty inputs
// //     inputDistance.value =
// //       inputDuration.value =
// //       inputCadence.value =
// //       inputElevation.value =
// //         '';

// //     form.style.display = 'none';
// //     form.classList.add('hidden');
// //     setTimeout(() => (form.style.display = 'grid'), 1000);
// //   }

// //   _toggleElevationField() {
// //     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
// //     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// //   }

// //   _newWorkout(e) {
// //     e.preventDefault();

// //     // For now, just log the form submission
// //     console.log('Form submitted!');

// //     // Hide form after submission
// //     this._hideForm();
// //   }
// // }

// // _newWorkout(e) {
// //   const validInputs = (...inputs) =>
// //     inputs.every(inp => Number.isFinite(inp));
// //   const allPositive = (...inputs) => inputs.every(inp => inp > 0);

// //   e.preventDefault();

// //   // Get data from form
// //   const type = inputType.value;
// //   const distance = +inputDistance.value;
// //   const duration = +inputDuration.value;
// //   const { lat, lng } = this.#mapEvent.latlng;
// //   let workout;

// //   // If workout running, create running object
// //   if (type === 'running') {
// //     const cadence = +inputCadence.value;

// //     // Check if data is valid
// //     if (
// //       !validInputs(distance, duration, cadence) ||
// //       !allPositive(distance, duration, cadence)
// //     )
// //       return alert('Inputs have to be positive numbers!');

// //     workout = new Running([lat, lng], distance, duration, cadence);
// //   }

// //   // If workout cycling, create cycling object
// //   if (type === 'cycling') {
// //     const elevation = +inputElevation.value;

// //     if (
// //       !validInputs(distance, duration, elevation) ||
// //       !allPositive(distance, duration)
// //     )
// //       return alert('Inputs have to be positive numbers!');

// //     workout = new Cycling([lat, lng], distance, duration, elevation);
// //   }

// //   // Add new object to workout array
// //   this.#workouts.push(workout);

// //   // Render workout on map as marker
// //   this._renderWorkoutMarker(workout);

// //   // Render workout on list
// //   this._renderWorkout(workout);

// //   // Hide form + clear input fields
// //   this._hideForm();
// // }

// // // Complete App class with all methods
// // class App {
// //   #map;
// //   #mapZoomLevel = 13;
// //   #mapEvent;
// //   #workouts = [];

// //   constructor() {
// //     // Get user's position
// //     this._getPosition();

// //     // Attach event handlers
// //     form.addEventListener('submit', this._newWorkout.bind(this));
// //     inputType.addEventListener('change', this._toggleElevationField);
// //   }

// //   // ... (previous methods: _getPosition, _loadMap, _showForm, _hideForm, _toggleElevationField)

// //   _newWorkout(e) {
// //     const validInputs = (...inputs) =>
// //       inputs.every(inp => Number.isFinite(inp));
// //     const allPositive = (...inputs) => inputs.every(inp => inp > 0);

// //     e.preventDefault();

// //     // Get data from form
// //     const type = inputType.value;
// //     const distance = +inputDistance.value;
// //     const duration = +inputDuration.value;
// //     const { lat, lng } = this.#mapEvent.latlng;
// //     let workout;

// //     // If workout running, create running object
// //     if (type === 'running') {
// //       const cadence = +inputCadence.value;

// //       // Check if data is valid
// //       if (
// //         !validInputs(distance, duration, cadence) ||
// //         !allPositive(distance, duration, cadence)
// //       )
// //         return alert('Inputs have to be positive numbers!');

// //       workout = new Running([lat, lng], distance, duration, cadence);
// //     }

// //     // If workout cycling, create cycling object
// //     if (type === 'cycling') {
// //       const elevation = +inputElevation.value;

// //       if (
// //         !validInputs(distance, duration, elevation) ||
// //         !allPositive(distance, duration)
// //       )
// //         return alert('Inputs have to be positive numbers!');

// //       workout = new Cycling([lat, lng], distance, duration, elevation);
// //     }

// //     // Add new object to workout array
// //     this.#workouts.push(workout);

// //     // Render workout on map as marker
// //     this._renderWorkoutMarker(workout);

// //     // Render workout on list
// //     this._renderWorkout(workout);

// //     // Hide form + clear input fields
// //     this._hideForm();
// //   }

// //   _renderWorkoutMarker(workout) {
// //     L.marker(workout.coords)
// //       .addTo(this.#map)
// //       .bindPopup(
// //         L.popup({
// //           maxWidth: 250,
// //           minWidth: 100,
// //           autoClose: false,
// //           closeOnClick: false,
// //           className: `${workout.type}-popup`,
// //         })
// //       )
// //       .setPopupContent(
// //         `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
// //       )
// //       .openPopup();
// //   }

// //   _renderWorkout(workout) {
// //     let html = `
// //       <li class="workout workout--${workout.type}" data-id="${workout.id}">
// //         <h2 class="workout__title">${workout.description}</h2>
// //         <div class="workout__details">
// //           <span class="workout__icon">${
// //             workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
// //           }</span>
// //           <span class="workout__value">${workout.distance}</span>
// //           <span class="workout__unit">km</span>
// //         </div>
// //         <div class="workout__details">
// //           <span class="workout__icon">⏱</span>
// //           <span class="workout__value">${workout.duration}</span>
// //           <span class="workout__unit">min</span>
// //         </div>
// //     `;

// //     if (workout.type === 'running')
// //       html += `
// //         <div class="workout__details">
// //           <span class="workout__icon">⚡️</span>
// //           <span class="workout__value">${workout.pace.toFixed(1)}</span>
// //           <span class="workout__unit">min/km</span>
// //         </div>
// //         <div class="workout__details">
// //           <span class="workout__icon">🦶🏼</span>
// //           <span class="workout__value">${workout.cadence}</span>
// //           <span class="workout__unit">spm</span>
// //         </div>
// //       </li>
// //       `;

// //     if (workout.type === 'cycling')
// //       html += `
// //         <div class="workout__details">
// //           <span class="workout__icon">⚡️</span>
// //           <span class="workout__value">${workout.speed.toFixed(1)}</span>
// //           <span class="workout__unit">km/h</span>
// //         </div>
// //         <div class="workout__details">
// //           <span class="workout__icon">⛰</span>
// //           <span class="workout__value">${workout.elevationGain}</span>
// //           <span class="workout__unit">m</span>
// //         </div>
// //       </li>
// //       `;

// //     form.insertAdjacentHTML('afterend', html);
// //   }
// // }

// ////////////////////////////////////////////////////
// // Basic localStorage operations
// localStorage.setItem('key', 'value'); // Save data
// const data = localStorage.getItem('key'); // Retrieve data
// localStorage.removeItem('key'); // Delete specific data
// localStorage.clear(); // Delete all data

// // Important: localStorage only stores strings
// // Objects must be converted to JSON strings
// const obj = { name: 'John', age: 30 };
// localStorage.setItem('user', JSON.stringify(obj));
// const retrievedObj = JSON.parse(localStorage.getItem('user'));

// class App {
//   #map;
//   #mapZoomLevel = 13;
//   #mapEvent;
//   #workouts = [];

//   constructor() {
//     // Get user's position
//     this._getPosition();

//     // Get data from local storage
//     this._getLocalStorage();

//     // Attach event handlers
//     form.addEventListener('submit', this._newWorkout.bind(this));
//     inputType.addEventListener('change', this._toggleElevationField);
//     containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
//   }

//   // ... (existing methods: _getPosition, _loadMap, _showForm, _hideForm, etc.)

//   _newWorkout(e) {
//     const validInputs = (...inputs) =>
//       inputs.every(inp => Number.isFinite(inp));
//     const allPositive = (...inputs) => inputs.every(inp => inp > 0);

//     e.preventDefault();

//     // Get data from form
//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;
//     const { lat, lng } = this.#mapEvent.latlng;
//     let workout;

//     // If workout running, create running object
//     if (type === 'running') {
//       const cadence = +inputCadence.value;

//       if (
//         !validInputs(distance, duration, cadence) ||
//         !allPositive(distance, duration, cadence)
//       )
//         return alert('Inputs have to be positive numbers!');

//       workout = new Running([lat, lng], distance, duration, cadence);
//     }

//     // If workout cycling, create cycling object
//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;

//       if (
//         !validInputs(distance, duration, elevation) ||
//         !allPositive(distance, duration)
//       )
//         return alert('Inputs have to be positive numbers!');

//       workout = new Cycling([lat, lng], distance, duration, elevation);
//     }

//     // Add new object to workout array
//     this.#workouts.push(workout);

//     // Render workout on map as marker
//     this._renderWorkoutMarker(workout);

//     // Render workout on list
//     this._renderWorkout(workout);

//     // Hide form + clear input fields
//     this._hideForm();

//     // Set local storage to all workouts
//     this._setLocalStorage();
//   }

//   // NEW METHOD: Save workouts to localStorage
//   _setLocalStorage() {
//     localStorage.setItem('workouts', JSON.stringify(this.#workouts));
//   }

//   // NEW METHOD: Load workouts from localStorage
//   _getLocalStorage() {
//     const data = localStorage.getItem('workouts');

//     if (!data) return;

//     this.#workouts = JSON.parse(data);

//     this.#workouts.forEach(work => {
//       this._renderWorkout(work);
//     });
//   }

//   // NEW METHOD: Reset all data (useful for development/testing)
//   reset() {
//     localStorage.removeItem('workouts');
//     location.reload();
//   }
// }

// _getPosition() {
//   if (navigator.geolocation) {
//     console.log('🔍 Requesting user location...');
//     navigator.geolocation.getCurrentPosition(
//       this._loadMap.bind(this),
//       this._handleLocationError.bind(this),
//       {
//         timeout: 10000,
//         enableHighAccuracy: true,
//         maximumAge: 600000
//       }
//     );
//   } else {
//     alert('❌ Geolocation is not supported by this browser');
//     this._loadDefaultMap();
//   }
// }

// _handleLocationError(error) {
//   console.error('Geolocation error:', error);

//   let message = 'Could not get your position. ';

//   switch(error.code) {
//     case error.PERMISSION_DENIED:
//       message += 'Location access was denied. Please enable location services and refresh the page.';
//       break;
//     case error.POSITION_UNAVAILABLE:
//       message += 'Location information is unavailable. Using default location.';
//       break;
//     case error.TIMEOUT:
//       message += 'Location request timed out. Using default location.';
//       break;
//     default:
//       message += 'An unknown error occurred. Using default location.';
//       break;
//   }

//   alert(`📍 ${message}`);
//   this._loadDefaultMap();
// }

// _loadDefaultMap() {
//   console.log('📍 Loading default map location (London)');
//   // Use London as default coordinates
//   const defaultCoords = [51.5074, -0.1278];

//   this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

//   L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(this.#map);

//   // Handling clicks on map
//   this.#map.on('click', this._showForm.bind(this));

//   // Render markers for workouts loaded from localStorage
//   this.#workouts.forEach(work => {
//     this._renderWorkoutMarker(work);
//   });

//   console.log('🗺️ Default map loaded successfully');
// }

// _loadMap(position) {
//   const { latitude } = position.coords;
//   const { longitude } = position.coords;
//   console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);

//   const coords = [latitude, longitude];

//   this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

//   L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(this.#map);

//   // Handling clicks on map
//   this.#map.on('click', this._showForm.bind(this));

//   // Render markers for workouts loaded from localStorage
//   this.#workouts.forEach(work => {
//     this._renderWorkoutMarker(work);
//   });

//   console.log('Map loaded successfully with', this.#workouts.length, 'saved workouts');
// }

// _getLocalStorage() {
//   try {
//     const data = localStorage.getItem('workouts');

//     if (!data) {
//       console.log('No saved workouts found');
//       return;
//     }

//     console.log('Loading saved workouts from localStorage');
//     this.#workouts = JSON.parse(data);

//     // Restore object prototypes
//     this.#workouts = this.#workouts.map(work => {
//       if (work.type === 'running') {
//         return new Running(work.coords, work.distance, work.duration, work.cadence);
//       }
//       if (work.type === 'cycling') {
//         return new Cycling(work.coords, work.distance, work.duration, work.elevationGain);
//       }
//     });

//     this.#workouts.forEach(work => {
//       this._renderWorkout(work);
//     });

//     console.log(`Loaded ${this.#workouts.length} workouts from storage`);
//   } catch (error) {
//     console.error('Error loading workouts from localStorage:', error);
//     // Clear corrupted data
//     localStorage.removeItem('workouts');
//     this.#workouts = [];
//   }
// }

// _setLocalStorage() {
//   try {
//     localStorage.setItem('workouts', JSON.stringify(this.#workouts));
//     console.log(`Saved ${this.#workouts.length} workouts to localStorage`);
//   } catch (error) {
//     console.error('Error saving workouts to localStorage:', error);
//     alert('Could not save workout data. Storage might be full.');
//   }
// }
// constructor() {
//   // Get user's position
//   this._getPosition();

//   // Get data from local storage
//   this._getLocalStorage();

//   // Attach event handlers
//   form.addEventListener('submit', this._newWorkout.bind(this));
//   inputType.addEventListener('change', this._toggleElevationField);
//   containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

//   // Add keyboard support
//   document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape' && !form.classList.contains('hidden')) {
//       this._hideForm();
//     }
//   }.bind(this));
// }

// _showForm(mapE) {
//   this.#mapEvent = mapE;
//   form.classList.remove('hidden');
//   inputDistance.focus();

//   // Add visual feedback
//   const { lat, lng } = mapE.latlng;
//   console.log(`Form opened for location: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
// }

// _newWorkout(e) {
//   const validInputs = (...inputs) =>
//     inputs.every(inp => Number.isFinite(inp));
//   const allPositive = (...inputs) => inputs.every(inp => inp > 0);

//   e.preventDefault();

//   // Get data from form
//   const type = inputType.value;
//   const distance = +inputDistance.value;
//   const duration = +inputDuration.value;
//   const { lat, lng } = this.#mapEvent.latlng;
//   let workout;

//   // Enhanced validation with specific error messages
//   const showValidationError = (message) => {
//     alert(`❌ Validation Error: ${message}`);
//     inputDistance.focus();
//   };

//   // Check for empty inputs
//   if (!distance || !duration) {
//     return showValidationError('Distance and duration are required!');
//   }

//   // If workout running, create running object
//   if (type === 'running') {
//     const cadence = +inputCadence.value;

//     if (!cadence) {
//       return showValidationError('Cadence is required for running workouts!');
//     }

//     if (!validInputs(distance, duration, cadence)) {
//       return showValidationError('All inputs must be valid numbers!');
//     }

//     if (!allPositive(distance, duration, cadence)) {
//       return showValidationError('All values must be positive numbers!');
//     }

//     workout = new Running([lat, lng], distance, duration, cadence);
//   }

//   // If workout cycling, create cycling object
//   if (type === 'cycling') {
//     const elevation = +inputElevation.value;

//     // Note: elevation can be negative (downhill), so we don't check allPositive for it
//     if (!validInputs(distance, duration, elevation)) {
//       return showValidationError('Distance, duration, and elevation must be valid numbers!');
//     }

//     if (!allPositive(distance, duration)) {
//       return showValidationError('Distance and duration must be positive numbers!');
//     }

//     workout = new Cycling([lat, lng], distance, duration, elevation);
//   }

//   // Add new object to workout array
//   this.#workouts.push(workout);

//   // Render workout on map as marker
//   this._renderWorkoutMarker(workout);

//   // Render workout on list
//   this._renderWorkout(workout);

//   // Hide form + clear input fields
//   this._hideForm();

//   // Set local storage to all workouts
//   this._setLocalStorage();

//   console.log(`✅ Created ${type} workout:`, workout);
// }

// // Development helper methods (add to App class)
// _showAllWorkouts() {
//   console.log('All workouts:', this.#workouts);
//   return this.#workouts;
// }

// _clearAllData() {
//   if (confirm('⚠️ This will delete all workout data. Are you sure?')) {
//     localStorage.removeItem('workouts');
//     location.reload();
//   }
// }

// _exportWorkouts() {
//   const dataStr = JSON.stringify(this.#workouts, null, 2);
//   console.log('Workout data (copy this to backup):');
//   console.log(dataStr);
//   return dataStr;
// }

// _importWorkouts(workoutData) {
//   try {
//     const workouts = JSON.parse(workoutData);
//     localStorage.setItem('workouts', workoutData);
//     location.reload();
//     console.log('✅ Workouts imported successfully');
//   } catch (error) {
//     console.error('❌ Error importing workouts:', error);
//     alert('Invalid workout data format');
//   }
// }

// // Add these to global scope for easy console access
// _getAppHelpers() {
//   return {
//     showWorkouts: this._showAllWorkouts.bind(this),
//     clearData: this._clearAllData.bind(this),
//     exportData: this._exportWorkouts.bind(this),
//     importData: this._importWorkouts.bind(this),
//   };
// }