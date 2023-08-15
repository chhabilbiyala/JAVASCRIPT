const cart = ["shoer", "pant", "kurta", "jeana"];

createOrder(cart, function(orderId) {
    proceedToPayment(orderId);
})
//--------------------------------------------------
const cart1 = ["shoer", "pant", "kurta", "jeana"];

const promise = createOrder(cart) ;

promise.then(function(orderId) {
    proceedToPayment(orderId);
})