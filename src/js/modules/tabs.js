const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    contents.forEach(item => {
      item.style.display = 'none';
    });

    tabs.forEach(item => {
      item.classList.remove(activeClass);
     })
  };

  const showTabContent = (num = 0) => {
    contents[num].style.display = display;
    tabs[num].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const target = e.target;
    if (target && (target.classList.contains(tabSelector.slice(1))
      || target.parentNode.classList.contains(tabSelector.slice(1)))) {
        tabs.forEach((item, index) => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(index);
          }
        });
    }
  });
}

export default tabs;