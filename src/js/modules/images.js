const images = () => {
  const imgPopup = document.createElement('div');
  const workSection = document.querySelector('.works');
  const bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  workSection.append(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  bigImage.style.width ='50%';
  bigImage.style.height ='auto';
  imgPopup.append(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      document.body.style.overflow = 'hidden';
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
};

export default images;
