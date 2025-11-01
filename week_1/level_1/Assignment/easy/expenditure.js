/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


const transactions = [{
    id : 1,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
},{
    id: 2 ,
    price: 20,
    category: 'Shopping',
    itemNmae: 'Shirt',
}];



function display_transaction(list){
    let result =[];
    for(let i=0;i<list.length;i++){
        let transaction = list[i];
        result.push({
            category: transaction.category,
            totalSpent: transaction.price
        });
    }
    return result;
}

console.log(display_transaction(transactions));