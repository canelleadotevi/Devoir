
const button = document.querySelector('button[type="submit"]')
if(button ) {
    button.addEventListener('click', function(){
        const p_name = document.querySelector('input.name').value
       
        const u_price = document.querySelector('input.price_u').value
        
        const q_total = document.querySelector('input.price_t').value
       
        const product_price = u_price *q_total
       /*  console.log(prix_produit) */
       const tab = []
       const product = {
        'name': p_name,
        'unite_price': u_price,
        'product_qte': q_total,
        'total_price': product_price

       }

       //je faisais required au niveau du champ input mais ça ne prenais pas j'ai donc mis le if pour vérifier si les champs ne sont pas vide
       if(p_name !='' && u_price != '' && q_total != ''){
        tab.push(product)
        JSON.stringify(tab)
        JSON.parse(localStorage.setItem(tab))
        JSON.parse(localStorage.getItem(product))
     /*  localStorage.set(tab) */

       }
       /* localStorage(tab)  */
       /* tab.push(product)
       localStorage.tab */

    })          
} 
