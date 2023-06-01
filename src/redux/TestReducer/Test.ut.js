
export const DoneTodo = (items , itemToFliter) =>  {

    const  existingCartItem = items.find(cartItem => cartItem.id === itemToFliter.id)

    if(existingCartItem){ // so if i found the same id , then i will open the carItems again with map, then i will search again in the list (cartitems)
        return items.map(Item => //  if i found the same id i will add the rest of the info to the list but i will add 1 to the quantity
            Item.id === itemToFliter 
            ?{...items, done:true ,id:itemToFliter}
            
            : 
            Item
            )
    }

   

}