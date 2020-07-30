class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector('.modal');
    this.closeIcon = document.querySelector('.modal__close');
    this.events();
  }

  events() {
    //listen for close click
    this.closeIcon.addEventListener('click', () => this.closeTheModal());

    // listen for escape or any key
    document.addEventListener('keyup', (e) => this.keyPressHandler(e));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal();
    }
  }

  openTheModal() {
    this.modal.classList.add('modal--is-visible');
  }

  closeTheModal() {
    this.modal.classList.remove('modal--is-visible');
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `
    <div class="modal">
    <div class="modal__inner">
      <h2
        class="section-title section-title--blue section-title--less-margin"
      >
        <img src="assets/images/icons/mail.svg" class="section-title__icon" />
        Get in <strong>Touch </strong>dangulo4@gmail.com
      </h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">
          Feel free to connect with me on any of the platforms below!
        </p>
      </div>

      <div class="social-icons">
        <a href="https://www.linkedin.com/in/daniel-angulo-0b7a3781/" class="social-icons__icon"
          ><img src="assets/images/icons/linkedin.svg" alt="Linkedin"
        /></a>
        <a href="https://github.com/dangulo4" class="social-icons__icon"
          ><img src="assets/images/icons/github.svg" alt="Github"
        /></a>
        <a href="https://www.instagram.com/deecoys51/" class="social-icons__icon"
          ><img src="assets/images/icons/instagram.svg" alt="Instagram"
        /></a>
        <a href="https://www.youtube.com/channel/UCRKOrDOta1dCRL1-Blq4OwA/videos?view_as=subscriber" class="social-icons__icon"
          ><img src="assets/images/icons/youtube.svg" alt="YouTube"
        /></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>`
    );
  }
}

export default Modal;
