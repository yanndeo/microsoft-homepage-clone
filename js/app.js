
    //get by id
    let getItemById = (elt) => document.getElementById(elt);

    let getItemsByClass = (elt) => document.getElementsByClassName(elt);

    //get all color-picker
    let colorPickerElt = document.getElementsByClassName('color-picker');
    console.log(colorPickerElt);

    //loop color-picker htmlCollection
    Array.from(colorPickerElt).forEach(item => {

        item.addEventListener('click', ()=>{
            let colorElt = item.getAttribute('id');

            let navLinkElts = getItemsByClass('nav-link');
            let itemElts = getItemsByClass('item');

            let titleElts = getItemsByClass('title');


            console.log(navLinkElts)

            for (let i = 0; i < navLinkElts.length; i++) {
                navLinkElts[i].style.color = colorElt;
                navLinkElts[i].style.borderColor = colorElt;

                getItemsByClass('is-active')[0].style.backgroundColor = colorElt;
                getItemsByClass('is-active')[0].style.color = colorElt;

                getItemsByClass('icon')[0].style.color = colorElt;
                getItemsByClass('welcome-message')[0].style.color = colorElt;
            }

            for (let i = 0; i < itemElts.length; i++) {
                itemElts[i].style.color = colorElt;
                itemElts[i].style.borderColor = colorElt;
            }

            for (let i = 0; i < titleElts.length; i++) {
                titleElts[i].style.color = colorElt;
                //titleElts[i].style.borderColor = colorElt;
            }

        }) 
    });

 



   // Page 2 

   const data = [
       {id: "1", name: "apple watch 5", availability : "in stock", price: "300", special: "249", review: "1 review", picture: "pub0.jpg", description: "Avec l'Apple Watch Series 5, vous n'avez plus besoin de lever le poignet ou de toucher l'écran pour voir l'heure qu'il est ou pour consulter d'autres informations. En effet, son écran Rétina OLED reste toujours activé afin que vous puissiez toujours avoir un oeil sur vos données."},
       {id: "2", name: "Fornetto electrical 700ml", availability : "in stock", price: "550", special: "310", review: "4 reviews", picture: "pub6.jpg", description: "Fornetto electrique avec capacité 20 litres doté de toutes les caractéristiques essentielles pour cuire, grigliare et chauffer les plats les plus délicieux. Complet de grille, lèchefrite et poignée pour extraction accessoires, bon cuisine 200 A une minuterie réglable jusqu'à 60 minutes,"},
       {id: "3", name: "google home V2", availability : "out stock", price: "700", special: "600", review: "12 reviews", picture: "pub4.jpg", description: " Google, mini format Google Home Mini est la version mini format de Google Home, la nouvelle enceinte à commande vocale de Google qui utilise l'intelligence de l'Assistant Google"},
       {id: "4", name: "apple watch", availability : "out stock", price: "1200", special: "1005", review: "10 reviews", description: "lorem"},
       {id: "5", name: "drône phantom 4", availability : "in stock", price: "1100", special: "875", review: "2 reviews",picture: "pb1.jpg", description: "Le Phantom 4 a droit à une petite évolution esthétique, mais DJI s’est bien gardé d’améliorer la configuration technique de son appareil. À la place du blanc sage de son aîné, DJI habille son Obsidian d’une robe noire/grise mat."},
       {id: "6", name: "african art", availability : "out stock", price: "299", special: "299",review: "6 reviews",  picture: "pb2.jpg", description: "Petite statue africaine en bois très lourd, vraisemblablement Baoulé de Côte d’Ivoire."},
       {id: "7", name: "african dress by coco", availability : "in stock", price: "199.99", special: "170",review: "78 reviews", picture: "pb3.jpeg" , description: "Magnifique robe en tissu africain. Plusieurs tailles et motifs disponibles. Nous nous déplacons pour prendre vos mesures, et livons votre tenus dès  qu’elle est terminée. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, fugit aspernatur, eos rem nobis, necessitatibus voluptate labore consectetur nam neque eum? Veritatis nisi sint qui  ..."},

   ] ;

let thumbElts = getItemsByClass('thumb');
 Array.from(thumbElts).forEach(thumbElt => {

     thumbElt.addEventListener('click', () => {
         
        let thumbID = thumbElt.getAttribute('id');
         console.log(thumbID);
        const product = data.find(item => item.id === thumbID);

         getItemById('regular').innerHTML= `${product.price} $` ;
         getItemById('special').innerHTML = `${product.special} $`;
         getItemById('name').innerHTML = `${product.name} `;
         getItemById('availability').innerHTML = `${product.availability} `;
         getItemById('review').innerHTML = `${product.review} `;
         getItemById('product-image').src = `assets/images/${product.picture} `;
         getItemById('details').innerHTML = `${product.description} `;


        console.log(product);
     })
 });


 let productOtherElts = getItemsByClass('image');
 Array.from(productOtherElts).forEach(productOtherElt => {

     productOtherElt.addEventListener('click', () => {

         let productOtherID = productOtherElt.getAttribute('id');
         console.log(productOtherID);
         const product = data.find(item => item.id === productOtherID);

         getItemById('regular').innerHTML = `${product.price} $`;
         getItemById('special').innerHTML = `${product.special} $`;
         getItemById('name').innerHTML = `${product.name} `;
         getItemById('availability').innerHTML = `${product.availability} `;
         getItemById('review').innerHTML = `${product.review} `;
         getItemById('product-image').src = `assets/images/${product.picture} `;
         getItemById('details').innerHTML = `${product.description} `;

         console.log(product);
     })
 });

    







