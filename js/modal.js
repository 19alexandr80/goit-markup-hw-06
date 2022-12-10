(() => {
    const refs = {
      openModalBtn: document.querySelector(".hero-button"),
      closeModalBtn: document.querySelector(".close-modal"),
      modal: document.querySelector(".modal"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.modal.classList.toggle("modal");
    }
  })();