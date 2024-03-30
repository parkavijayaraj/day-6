//task1
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        
    }
    get PG(){

    }

}
const obj =new Movie("Casino Royal","Eon Productions","PG­13");
const obj1 =new Movie("Casino Royal","Eon Productions");
console.log(obj.title,obj.studio,obj.rating);
console.log(obj1.title,obj1.studio,obj1.rating);

//task2 

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
        
    }
    get Radius(){
        return this.radius;
    }
    set Radius(n)
    {
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c)
    {
        this.color = c
    }
    get toString(){
        return `"Circle[radius= ${this.radius} , color= ${this.color}]"`;
    }
    get area()
    {
        return Math.PI*Math.pow(this.radius,2);
    }
    get circumference()
    {
        return 2*Math.PI*this.radius;
    }

}
const cirobj =new Circle(1.0,"red");
console.log(cirobj.radius,cirobj.color);
console.log(cirobj.Radius);
console.log(cirobj.Color);
console.log(cirobj.area);
console.log(cirobj.circumference);
console.log(cirobj.toString);
cirobj.Color="BLUE";
console.log(cirobj.Color);
cirobj.Radius=2.0;
console.log(cirobj.Radius);

//task 3

class Person
{
    constructor(name,age,emailid,phonenumber,address,qualification,cgpa)
    {
        this.name=name;
        this.age=age;
        this.emailid=emailid;
        this.phonenumber=phonenumber;
        this.address=address;
        this.qualification=qualification;
        this.cgpa=cgpa
    }
}
const details=new Person("parkavi",22,"parkavij08@gmail.com",9025677609,"sevalpatty","BE",8.53);
console.log(details.name,details.age,details.emailid,details.phonenumber,details.address,details.qualification,details.cgpa);

//task4

class Uberprice{
    constructor(kilometer,price){
           this.kilometer=kilometer;
           this.price=price;   
    }
    get Price(){
        return this.price;
    }
    set Price(c)
    {
        this.price = c* this.kilometer;
    }
}
const pricee=new Uberprice(2,50);
console.log(pricee.kilometer,pricee.price);
pricee.Price=4;
console.log(pricee.Price); 
