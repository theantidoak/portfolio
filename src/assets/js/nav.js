// document.addEventListener('DOMContentLoaded', () => {

//   var CSbody = document.querySelector('body');
//   const CSnavbarMenu = document.querySelector('#cs-navigation');
//   const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

//   CShamburgerMenu.addEventListener('click', function () {
//     CShamburgerMenu.classList.toggle('cs-active');
//     CSnavbarMenu.classList.toggle('cs-active');
//     CSbody.classList.toggle('cs-open');

//     ariaExpanded();
//   });

//   const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
//   for (const item of dropDowns) {
//     const onClick = () => {
//       item.classList.toggle('cs-active');
//     };
//     item.addEventListener('click', onClick);
//   }

// })



// function ariaExpanded() {
// 	const csUL = document.querySelector('#cs-expanded');
// 	const csExpanded = csUL.getAttribute('aria-expanded');

// 	if (csExpanded === 'false') {
// 		csUL.setAttribute('aria-expanded', 'true');
// 	} else {
// 		csUL.setAttribute('aria-expanded', 'false');
// 	}
// }
