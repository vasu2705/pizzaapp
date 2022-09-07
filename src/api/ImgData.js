import PizzaBase from "../assets/PizzaBase.png";
// import Pizzalogo from "../assets/pizza logo.png";
// import Pizzaman from "../assets/PizzaMan.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import BaseChesse from "../assets/BaseCheese.png";
import Massroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";

const ImgData = [
  {
    imgsrc: BaseChesse,
    title: "BaseChesse",
    className: "chesse z1",
    Ingredients: "chesse",
    scale: 0,
    duration: 0.3,
  },

  {
    imgsrc: Olive,
    title: "Olive",
    className: "ingredients z4",
    Ingredients: "olive",
    opacity: 0,
    duration: 1,
  },
  {
    imgsrc: Massroom,
    title: "Massroom",
    Ingredients: "massroom",
    className: "ingredients z4",
    opacity: 0,
    duration: 1,
  },
  {
    imgsrc: Pineapple,
    title: "Pineapple",
    className: "ingredients z3",
    Ingredients: "pineapple",
    opacity: 0,

    duration: 1,
  },

  {
    imgsrc: Basil,
    title: "Basil",
    className: "ingredients z4",
    Ingredients: "basil",
    opacity: 0,
    duration: 1,
  },
  {
    imgsrc: Tomato,
    title: "Tomato",
    className: "ingredients z4",
    Ingredients: "tomato",
    opacity: 0,
    duration: 1,
  },
  {
    imgsrc: PizzaBase,
    title: "PizzaBase",
    duration: 1,
  },
];

export default ImgData;
