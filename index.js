// Write your code here
class Breakfast{
  Breakfast(){
    this.food="eggs";
    this.drink="juice";
  }
}
class Lunch{
  Lunch(salad,soup,drink){
    this.salad=salad;
    this.soup=soup;
    this.drink=drink;
  }}
  class Dinner{
  Dinner(salad,soup,entree,_dessert){
    this.salad=salad;
    this.soup=soup;
    this.entree=entree;
    this._dessert=_dessert;
  }
}
const bfast = new Breakfast('eggs', 'juice');