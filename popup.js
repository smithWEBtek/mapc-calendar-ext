
document.addEventListener('DOMContentLoaded', function () {
  let calendars, calendarsWithImages, randomIndex;
  fetch('./calendars.json').then(response => {
    return response.json();
  }).then(data => {
    calendars = data
    calendarsWithImages = calendars.filter(calendar => calendar.image_urls[0])
    randomIndex = Math.floor(Math.random() * calendarsWithImages.length)

    console.log('randomIndex: ', randomIndex)
    console.log('calendarsWithImages: ', calendarsWithImages)

    const bg = chrome.extension.getBackgroundPage()
    const div = document.createElement('div')
    div.innerHTML = (`
    <div>
      <img id="logo" class="logo" src="mapc-logo.png">
      <h2>Here's another cool calendar from MAPC!</h2>
      <h3 class="calendar__title">${calendars[randomIndex].title}</h3>
      <a href="${calendars[randomIndex].url}">
      <img class="calendar__image" src="${calendars[randomIndex].image_urls[0]}">
      <h3 class="calendar__footer"></h3>
    </div>
    `)

    document.body.appendChild(div)
  }).catch(err => {
    console.log(err);
  });
})
