const refs = {
  mobileBtn: document.querySelector("[data-js-open-menu]"),
  mobileMenu: document.querySelector("[data-mobile-menu]"),
};

refs.mobileBtn.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  refs.mobileMenu.classList.toggle("header__content--is-hidden");
  refs.mobileBtn.classList.toggle("is-open");

  const isBodyFixed = refs.mobileBtn.classList.contains("is-open");
  document.body.style.overflow = isBodyFixed ? "hidden" : "initial";
}
