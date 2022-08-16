{
  const akapit1Remove = () => {
    const przycisk1 = document.querySelector(".przycisk1");
    const akapit1 = document.querySelector(".akapit1");
    przycisk1.addEventListener("click", () => {
      akapit1.remove();
    });
  };
  akapit1Remove();



  const akapit2Remove = () => {
    const przycisk2 = document.querySelector(".przycisk2");
    const akapit2 = document.querySelector(".akapit2");
    przycisk2.addEventListener("click", () => {
      akapit2.remove();
    });
  };
  akapit2Remove();


  const akapit3Remove = () => {
    const przycisk3 = document.querySelector(".przycisk3");
    const akapit3 = document.querySelector(".akapit3");
    przycisk3.addEventListener("click", () => {
      akapit3.remove();
    });
  };
  akapit3Remove();
}
