 let BulbSwitch = document.querySelector('#BulbSwitch');
 let Bulb = document.querySelector('#Bulb');

 BulbSwitch.addEventListener('click',function(){

    console.log(Bulb.src)
  if (Bulb.src.match('3d')) {
    Bulb.src = './Bulb-on-png.png';
    BulbSwitch.innerHTML = 'Turn Off';
    BulbSwitch.style.backgroundColor = 'red';
  }
  else{
    Bulb.src = './459-4593815_3d-bulb-png.png';
    BulbSwitch.innerHTML = 'Turn On';
    BulbSwitch.style.backgroundColor = 'green';

  }
    


 })