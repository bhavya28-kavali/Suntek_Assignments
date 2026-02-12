//Hands-On 2: Deep Copy (Isolation & Safety Use Case)
//---------------------------------------------------

//🧪 Given Data:
                //const order = {
                  //orderId: "ORD1001",
                  //customer: {
                    //name: "Anita",
                    //address: {
                      //city: "Hyderabad",
                      //pincode: 500085
                    //}
                  //},
                  //items: [
                    //{ product: "Laptop", price: 70000 }
                  //]
                //};

//🎯 Task:
      //1. Create a deep copy of order
      //2. Modify in copied object:
            //i. customer.address.city
            //ii. items[0].price
            //iii. Verify original object remains unchanged
const order = {
    orderId:"ORD1001",
    customer: {
        name:"Anita",
        address:{
            city:"Hyderabad",
            pincode: 500085
        }
    },
    items: [
        {product:"Laptop" , price:70000}
    ]
};
//Creation of deep copy
const orderCopy = structuredClone(order);

// Modification of address and item
orderCopy.customer.address.city = "Bengaluru";
orderCopy.items[0].price = 65000;
//Printing it
console.log("Order:",order);
console.log("OrderCopy:",orderCopy)




