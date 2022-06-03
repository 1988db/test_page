document.addEventListener('DOMContentLoaded', ()=> { 
  const menu = document.querySelector('.burger');
  const navigation = document.querySelector('nav');
  menu.addEventListener('click', openCloseMenu);

  function openCloseMenu () {
    navigation.classList.toggle('visible');
  }
})

