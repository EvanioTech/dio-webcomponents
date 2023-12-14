class cardnews extends HTMLElement {
 constructor(){
    super() ;

    const shadow = this.attachShadow({mode: "open"});
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());

 }   
 build(){
   const componentRoot = document.createElement("div");
   componentRoot.setAttribute("class", "card")


   const cardLeft = document.createElement("div");
   cardLeft.setAttribute("class", "card_left");

   const autor = document.createElement("span");
   autor.textContent = "by " + (this.getAttribute("autor") || "anonymous");


   const linktitle = document.createElement("a");
   linktitle.textContent = this.getAttribute("title");
   linktitle.href = this.getAttribute("link-url");

   const newscontent = document.createElement("p");
   newscontent.textContent = this.getAttribute("contet");


   cardLeft.appendChild(autor);
   cardLeft.appendChild(linktitle);
   cardLeft.appendChild(newscontent);



   const cardRight = document.createElement("div");
   cardRight.setAttribute("class", "card_right");
   const newsimage = document.createElement("img");
   newsimage.src = this.getAttribute("foto");
   newsimage.alt = "alternativa";
   cardRight.appendChild(newsimage);

   componentRoot.appendChild(cardLeft);
   componentRoot.appendChild(cardRight);

   return componentRoot;
 }

 style(){
   const style = document.createElement("style")
   style.textContent = `
   
   .card{
      width: 80%;
      box-shadow: 36px 19px 41px 10px rgba(0,0,0,0.88);
  -webkit-box-shadow: 36px 19px 41px 10px rgba(0,0,0,0.88);
  -moz-box-shadow: 36px 19px 41px 10px rgba(0,0,0,0.88);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
     
      margin: 30px
  
  }
  
  .card_left{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
  }
  
  .card_left > h1{
  margin-top: 15px;
  font-size: 25px;
  }
  .card_left >p{
      color: darkgrey;
  }
   
   
   `


   return style;
 }
}

customElements.define('card-news' ,cardnews);