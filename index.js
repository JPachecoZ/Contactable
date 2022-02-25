import {home, contacts_template, id_count} from './scripts/templates.js'
import {render} from './scripts/handlers.js'

render(home, "body");
render(contacts_template, ".js-contacts");

for (let i=0; i<=id_count;i++){
  const favorite = document.querySelector(`.star`);
  favorite.addEventListener("click", function(){
    if (this.getAttribute('class')=="star"){
      this.innerHTML=`
      <img src="/img/StarB.svg" class="favorite1" />
      <img src="/img/Starin.svg" class="favorite" />
      `
      this.setAttribute('class', "staron");
    } else{
      this.innerHTML=`
      <img src="/img/Star.svg" class="favorite" />
      `
      this.setAttribute('class', "star");
    }
  })
}
