function actionBtn(){
    //want to change random color after click on button
    document.body.style.backgroundColor = getRandomColor();
}
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}