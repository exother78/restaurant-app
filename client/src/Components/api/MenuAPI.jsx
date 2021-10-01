import { useState } from "react";

const MenuAPI = () => {
  const [menu, setMenu] = useState([
    { category: "seafood", products: [{ name: "fish", price: 23 }] },
    {
      category: "grill",
      products: [
        {
          name: "seekh kebab",
          whisper: "carne maccinata di pollo speziata e cotto al forno",
          price: 45,
        },
        {
          name: "chicken tikka",
          whisper:
            "bocconcini di pollo marinati nello yogurt e spezie cotti al forno",
          price: 8,
        },
        {
          name: "chicken tandoori",
          whisper: "pollo al forno speziato",
          price: 8,
        },
        {
          name: "shahi grill",
          whisper: "mix di seekh kebab, chicken tikka e chicken tandoori",
          price: 16,
        },
      ],
    },
    {
      category: "primi di riso",
      products: [
        { name: "white rice", whisper: "riso basmati bianco", price: 3 },
        {
          name: "chicken biryani",
          whisper: "riso basmati con pollo, curry, spezie",
          price: 6,
        },
        {
          name: "lamb biryani",
          whisper: "riso basmati con corne di agnello, curry, spezie",
          price: 6.5,
        },
        {
          name: "sabzi biryani",
          whisper: "riso basmati con verdure, curry, spezie",
          price: 5,
        },
        {
          name: "ginga biryani",
          whisper: "riso basmati con gamberetti",
          price: 7,
        },
      ],
    },
    {
      category: "chicken",
      whisper: "secondi di pollo",
      products: [
        {
          name: "chicken kofta",
          whisper: "polpette di pollo con salsa curry e spezie",
          price: 7.5,
        },
        {
          name: "chicken malayi",
          whisper:
            "pollo con aglio, zenzero, mandorie, panna da cucina e spezie",
          price: 7.5,
        },
        {
          name: "chicken tikka masala",
          whisper:
            "pollo cotti al forno e saltati in padella con pornodoro e cipolla",
          price: 7.5,
        },
        { name: "chicken palak", whisper: "pollo con spinaci", price: 7.5 },
        {
          name: "chicken jalfrezi",
          whisper: "pollo con peperoni, peperoncino, cipolla, pomodoro, spezie",
          price: 7.5,
        },
        {
          name: "chicken badami",
          whisper: "pollo con salsa mandorie/anacardi e spezie",
          price: 7.5,
        },
      ],
    },
    {
      category: "ghosht",
      whisper: "secondi di carne di agnello e vitello",
      products: [
        {
          name: "mutton korma",
          whisper: "carne di agnello con salsa di pomodoro e yogurt",
          price: 8.5,
        },
        {
          name: "mutton karahi",
          whisper: "carne di agnello con aglio, zenzero, pomodoro e spezie",
          price: 8.5,
        },
        {
          name: "mutton malayi",
          whisper:
            "carne di agnello con aglio, zenzero, mandorie, panna da cucina e spezie",
          price: 8.5,
        },
        {
          name: "mutton masala",
          whisper: "carne di agnello con spinaci",
          price: 8.5,
        },
        {
          name: "mutton vindalo",
          whisper: "carne di agnello con salsa piccante",
          price: 8.5,
        },
        {
          name: "achar ghosht",
          whisper: "carne di agnello con salsa indiana",
          price: 9,
        },
        {
          name: "kebab masala",
          whisper:
            "polpettone di carne di vitello con salsa di cipolla pom, e zenzero",
          price: 8,
        },
        { name: "kofta", whisper: "polpette di vitello al curry", price: 8 },
        {
          name: "keema",
          whisper: "carne macinata di vitello con salsa curry e spezie",
          price: 8,
        },
      ],
    },

    {
      category: "pesce",
      products: [
        {
          name: "shahi ginga",
          whisper: "gamberetti con salsa indiana",
          price: 10,
        },
        {
          name: "machli masala",
          whisper: "pesce con salsa indiana",
          price: 10,
        },
        {
          name: "mix vegetable plate",
          whisper: "palak paneer, daal, chana, mix veg, sabzi biryani, naan",
          price: 17,
        },
        {
          name: "mix meat plate",
          whisper: "misto carne, misto verdure, chicken biriyani, naan",
          price: 22,
        },
      ],
    },
    {
      category: "dolci e bevande",
      products: [
        {
          name: "kheer",
          whisper: "dolce con latte, riso macinato, pistacchio, ricotta",
          price: 3,
        },
        {
          name: "ghulab jamun",
          whisper:
            "latte in polvere, uova, burro, zucchero, soda di bicarbonato",
          price: 3,
        },
        {
          name: "custard",
          whisper: "crema pasticcera con careante al mango o fragola",
          price: 3,
        },
      ],
    },
    {
      category: "bevande indiane",
      products: [
        {
          name: "mango lassi",
          whisper: "frullato di mango con yogurt e zucchero",
          price: 3.5,
        },
        {
          name: "lassi",
          whisper: "frullato di yogurt con zucchero o sale",
          price: 3.5,
        },
        {
          name: "jam e shirin lassi",
          whisper: "frullato di yogurt con zucchero e sciroppo di rose",
          price: 2.5,
        },
        {
          name: "banana shake",
          whisper: "frullato di banana con latte e zucchero",
          price: 3.5,
        },
        {
          name: "strawberry shake",
          whisper: "frullato di fragola con latte e zucchero",
          price: 3.5,
        },
        {
          name: "mango shake",
          whisper: "frullato di mango con latte e zucchero",
          price: 3.5,
        },
      ],
    },
    {
      category: "bevande",
      products: [
        { name: "acqua naturale/frizzante 1 lt", price: 2.5 },
        {
          name: "bibita in lattina da 33 cl",
          whisper: "coca, fanta, sprite",
          price: 2,
        },
        {
          name: "bibita in bottiglia 1.5 lt",
          whisper: "coca, fanta, sprite",
          price: 3.5,
        },
      ],
    },
    {
      category: "bevande calde",
      products: [
        { name: "caffe", price: 1 },
        { name: "cappuccino", price: 1.5 },
        { name: "chae", whisper: "the con latte", price: 2.5 },
        { name: "kehwa", whisper: "the alla menta fresco", price: 2.5 },
      ],
    },
    {
      category: "verdure e legumi",
      products: [
        {
          name: "chana daal",
          whisper: "lenticchie gialle con spezie",
          price: 5,
        },
        { name: "chana masala", whisper: "cecl con spezie", price: 5 },
        { name: "daal maash", whisper: "lenticchie con spezie", price: 5 },
        { name: "mix sabzi", whisper: "verdure miste con spezie", price: 5 },
        {
          name: "palak paneer",
          whisper: "spinaci con formaggio indiano",
          price: 5,
        },
        {
          name: "shahi paneer",
          whsiper: "curry con frutta secca e formaggio indiano",
          price: 5,
        },
        {
          name: "daal paneer",
          whisper: "lenticchie con formaggio indiano",
          price: 5,
        },
        {
          name: "sabzi kofta",
          whisper: "polpette di verdure con salsa curry",
          price: 5,
        },
      ],
    },
    {
      category: "pane",
      products: [
        {
          name: "chapati",
          whisper: "pane di farina integrale cotto nel forno",
          price: 1.5,
        },
        {
          name: "naan",
          whisper: "pane di farina bianca tipo 00  cotto nel forno",
          price: 1.5,
        },
        {
          name: "paneer naan",
          whisper: "pane di farina bianca tipo 00 con formaggio",
          price: 2.5,
        },
        {
          name: "garlic naan",
          whisper: "pane di farina bianca tipo 00 con aglio",
          price: 2.5,
        },
        {
          name: "roghni naan",
          whisper: "pane di farina bianca tipo 00 con semi di sesamo",
          price: 2.5,
        },
        {
          name: "qeema naan",
          whisper: "pane di farina bianca tipo 00 con carne di manzo macinata",
          price: 3.5,
        },
        {
          name: "afghani naan",
          whisper: "pane di farina bianca tipo 00 ripleno di cipolla e spezie",
          price: 2.5,
        },
        {
          name: "sabzi naan",
          whisper: "pane di farina bianca tipo 00 ripleno di verdure e spezie",
          price: 2.5,
        },
      ],
    },
  ]);

  return {
    menu: menu,
  };
};

export default MenuAPI;
