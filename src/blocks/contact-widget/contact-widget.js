// document.addEventListener('DOMContentLoaded', function(){});
(function(){
  const contactWidget = document.getElementById('contact-widget');
  const elemNameArr = ['phone', 'envelope', 'telegram'];
  if (!contactWidget) { return; }
  const svgElem = contactWidget.querySelector('#widget-img');
  let svgElemValue = svgElem.childNodes[0].href.baseVal;
  let svgElemString = svgElemValue.split('#')[0];
  let svgElemVar = svgElemValue.split('#')[1];
  //console.info(svgElemString + '#' + svgElemVar);

  svgElemValue = svgElemString + '#envelope';
  //console.log(svgElemValue);

  const changeImg = function () {
    let count = 0;
  };

  //setInterval(function () {
    //alert("Hello");
  //}, 3000);
}());
