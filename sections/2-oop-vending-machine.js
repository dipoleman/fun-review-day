class VendingMachine {
  constructor() {
    this.credit = 0;
    this.stock = { A: {}, B: {}, C: {} };
  }

  addStock(item, row) {
    this.stock[row] = item;
  }
  addCredit(money) {
    this.credit += money;
  }
  purchaseItem(row){
    if (this.credit >= this.stock[row].price){
        this.stock[row].quantity--
        this.credit -= this.stock[row].price
        return this.stock[row].name
    }else{
        return 'Insufficient credit!'
    }
  }
}

module.exports = VendingMachine;
