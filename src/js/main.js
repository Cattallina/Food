// 'use strict';
//
// class Reactangle {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//
//     calcArea() {
//         return this.height * this.width;
//     }
// }
// //extends - наследуется от
// //super() - вызывает супер конструктор родителя,
// //наследование строк из родителя констр.Должно быть на первом месте
//
// class ColoredRectangleWithText extends Reactangle{
//     constructor(height, width, text, bgColor){
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }
//     showMyProps(){
//         console.log(`Text: ${this.text}, color: ${this.bgColor}`)
//     }
// }
// const div = new ColoredRectangleWithText(25, 10, 'hello world', 'red')
//
// div.showMyProps();
// console.log(div.calcArea());
//
// // const square = new Reactangle(10, 10);
// // const long = new Reactangle(20, 100);
// //
// // console.log(square.calcArea());
// // console.log(long.calcArea());