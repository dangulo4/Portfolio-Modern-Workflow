class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.site-header__menu-icon');
    this.menuIconContent = document.querySelector('.site-header__menu-content');
    this.siteHeader = document.querySelector('.site-header');
    this.events();
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.menuIconContent.classList.toggle(
      'site-header__menu-content--is-visible'
    );
    this.siteHeader.classList.toggle('site-header--is-expanded');
    this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
  }
}

export default MobileMenu;
