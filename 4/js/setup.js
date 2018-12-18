'use strict';

var ECS_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizardFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var colorIndex = 1;

var getWizardColor = function (arrColor) {
  if (colorIndex >= arrColor.length) {
    colorIndex = 0;
  }
  var index = colorIndex;
  var color = arrColor[index];
  colorIndex++;
  return color;
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var setupPlayer = document.querySelector('.setup-player');
var setupFireball = document.querySelector('.setup-fireball-wrap');

var setupWizardCoat = setupPlayer.querySelector('.wizard-coat');
var setupWizardEyes = setupPlayer.querySelector('.wizard-eyes');

setupWizardCoat.addEventListener('click', function () {
  setupPlayer.querySelector('.wizard-coat').setAttribute('style', 'fill:' + getWizardColor(wizardCoatColors));
});

setupWizardEyes.addEventListener('click', function () {
  setupPlayer.querySelector('.wizard-eyes').setAttribute('style', 'fill:' + getWizardColor(wizardEyesColors));
});

setupFireball.addEventListener('click', function () {
  setupFireball.setAttribute('style', 'background:' + getWizardColor(wizardFireballColors));
});

var onPopupEscPress = function (evt) {
  if (evt.keyCode !== ECS_KEYCODE) {
    return;
  }

  if (document.activeElement.closest('.setup-user-name')) {
    evt.stopPropagation();
  } else {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
