class cardnews extends HTMLElement {
 constructor(){
    super() ;

    const shadow = this.attachShadow({mode: "open"});
    shadow.innerHTML= "<h1> hello world</h1>" ;
 }   
}

customElements.define('card-news' ,cardnews);