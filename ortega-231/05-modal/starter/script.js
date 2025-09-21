// // 'use strict';
// // // Modal Development Hour 1 - Foundation & Class Toggling
// // 'use strict';

// // console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');

// // /*
// // What We're Building Today:
// // - A complete modal window component
// // - Modal opens when clicking any "Show modal" button
// // - Modal closes when clicking the "×" button or overlay
// // - Professional class-based show/hide functionality
// // - Reusable helper functions for clean code

// // Key Concepts:
// // - DOM element selection and caching
// // - Class manipulation for show/hide
// // - Event listeners for user interaction
// // - DRY (Don't Repeat Yourself) principles
// // */

// // console.log('Modal project ready!');
// // // First, add strict mode at the top
// // 'use strict';

// // // Select the modal element
// // const modalEl = document.querySelector('.modal');

// // // Select the overlay element
// // const overlayEl = document.querySelector('.overlay');

// // // Select the close button
// // const btnCloseModalEl = document.querySelector('.close-modal');

// // // Select ALL the open buttons using querySelectorAll
// // const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// // // Verify our selections worked correctly
// // console.log('Open buttons:', btnsOpenModalEl.length);

// // // Create our openModal function
// // const openModal = function () {
// //   // Remove the hidden class from modal to make it visible
// //   modalEl.classList.remove('hidden');

// //   // Remove the hidden class from overlay to show dark background
// //   overlayEl.classList.remove('hidden');
// // };

// // // Create our closeModal function
// // const closeModal = function () {
// //   // Add the hidden class back to modal to hide it
// //   modalEl.classList.add('hidden');

// //   // Add the hidden class back to overlay to hide dark background
// //   overlayEl.classList.add('hidden');
// // };

// // 'use strict';

// // // Selections
// // const modalEl = document.querySelector('.modal');
// // const overlayEl = document.querySelector('.overlay');
// // const btnCloseModalEl = document.querySelector('.close-modal');
// // const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// // // Helper functions
// // const openModal = function () {
// //   modalEl.classList.remove('hidden');
// //   overlayEl.classList.remove('hidden');
// // };

// // const closeModal = function () {
// //   modalEl.classList.add('hidden');
// //   overlayEl.classList.add('hidden');
// // };

// // // Event listeners
// // btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
// // btnCloseModalEl.addEventListener('click', closeModal);
// // overlayEl.addEventListener('click', closeModal);

// 'use strict';

// // Selections
// const modalEl = document.querySelector('.modal');
// const overlayEl = document.querySelector('.overlay');
// const btnCloseModalEl = document.querySelector('.close-modal');
// const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// // Helper functions
// const openModal = function () {
//   modalEl.classList.remove('hidden');
//   overlayEl.classList.remove('hidden');
// };

// const closeModal = function () {
//   modalEl.classList.add('hidden');
//   overlayEl.classList.add('hidden');
// };

// // Event listeners
// btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
// btnCloseModalEl.addEventListener('click', closeModal);
// overlayEl.addEventListener('click', closeModal);

// // Modal Development Hour 2 - Keyboard Events & Advanced UX
// 'use strict';

// console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');

// /*
// What We're Adding Today:
// - ESC key functionality to close the modal
// - Focus management for keyboard users
// - ARIA attributes for screen reader accessibility
// - Professional UX patterns

// Key Concepts:
// - Global keyboard event listeners
// - Event object properties (e.key, e.code)
// - Visibility guards to prevent unnecessary operations
// - Focus management and accessibility
// */

// console.log('Enhanced modal development ready!');

// // Let's start by understanding keyboard events
// console.log('Keyboard events test');

// // Add a basic keyboard event listener
// document.addEventListener('keydown', function (e) {
//   // Log the event object to see what we get
//   console.log('Key pressed:', e);

//   // Log just the key property
//   console.log('Key name:', e.key);
// });

// // Add focus management variables
// let lastFocusedButton = null;

// // Enhance openModal function with focus management
// const openModal = function () {
//   modalEl.classList.remove('hidden');
//   overlayEl.classList.remove('hidden');
//   // Move focus to the modal
//   modalEl.focus();
//   // Store which button opened the modal
//   lastFocusedButton = document.activeElement;
// };

// // Enhance closeModal function to restore focus
// const closeModal = function () {
//   modalEl.classList.add('hidden');
//   overlayEl.classList.add('hidden');
//   // Restore focus to the button that opened the modal
//   if (lastFocusedButton) {
//     lastFocusedButton.focus();
//   }
// };

// 'use strict';

// // Selections
// const modalEl = document.querySelector('.modal');
// const overlayEl = document.querySelector('.overlay');
// const btnCloseModalEl = document.querySelector('.close-modal');
// const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// // Focus management
// let lastFocusedButton = null;

// // Helper functions
// const openModal = function () {
//   modalEl.classList.remove('hidden');
//   overlayEl.classList.remove('hidden');
//   modalEl.focus();
//   lastFocusedButton = document.activeElement;
// };

// const closeModal = function () {
//   modalEl.classList.add('hidden');
//   overlayEl.classList.add('hidden');
//   if (lastFocusedButton) {
//     lastFocusedButton.focus();
//   }
// };

// // Event listeners
// btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
// btnCloseModalEl.addEventListener('click', closeModal);
// overlayEl.addEventListener('click', closeModal);

// // Keyboard events
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// // Accessibility attributes
// modalEl.setAttribute('role', 'dialog');
// modalEl.setAttribute('aria-modal', 'true');
// btnCloseModalEl.setAttribute('aria-label', 'Close modal');