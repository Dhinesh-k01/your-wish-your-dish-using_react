import idly from './images/idly.jpg';
import chickenBiryani from './images/chickenBiryani.jpg';
import strawberryMilkshake from './images/strawberry.jpg';
import dosa from './images/dosa.jpg';
import muttonBiryani from './images/muttonBiryani.jpg';
import oreoMilkshake from './images/oreoMilkShake.jpg';
import chapati from './images/chapati.jpg';
import butterNaan from './images/butterNaan.jpg';
import chocolateMilkshake from './images/chocolateMilkShake.jpg';
import parotta from './images/parotta.jpg';
import eggKothuParotta from './images/eggParotta.jpg';
import veechParotta from './images/veechuParotta.jpg';
import chickenTandoori from './images/chickenTandoori.jpg';
import muttonKebab from './images/muttonKebab.jpg';
import dragonChicken from './images/dragonChicken.jpg';

const menu = [
  {
    id: 1,
    title: 'Idly and Vada',
    category: 'breakfast',
    price: 29.99,
    img: idly,
    desc: ` Idli is a steamed rice cake made from fermented rice and lentil batter. It's a staple breakfast item in Tamil Nadu and is often served with coconut chutney and sambar. `,
  },
  {
    id: 2,
    title: 'Chicken Biryani',
    category: 'lunch',
    price: 199.99,
    img: chickenBiryani,
    desc: `Chicken biryani is a popular Indian dish made with chicken, fragrant basmati rice, and a blend of aromatic spices.The chicken is marinated, layered with the partially cooked rice, and slow-cooked or dum-cooked to infuse the flavors.`,
  },
  {
    id: 3,
    title: 'Chicken Tandoori',
    category: 'starters',
    price: 399.99,
    img: chickenTandoori,
    desc: `Chicken Tandoori is a popular Indian dish made by marinating chicken pieces in a mixture of yogurt and a blend of spices. The marinated chicken is then traditionally cooked in a tandoor, a clay oven, giving it a distinctive smoky flavor and charred appearance.`,
  },
  {
    id: 4,
    title: 'Parotta',
    category: 'dinner',
    price: 19.99,
    img: parotta,
    desc: `Parotta is a traditional South Indian flatbread made from all-purpose flour, water, and sometimes a little oil or ghee (clarified butter). The dough is kneaded, and small balls of dough are flattened into thin, round sheets.`,
  },
  {
    id: 5,
    title: 'Strawberry Milkshake',
    category: 'shakes',
    price: 99.99,
    img: strawberryMilkshake,
    desc: `A strawberry milkshake is a refreshing drink made by blending fresh or frozen strawberries with milk and a sweetener (such as sugar or ice cream). It has a lovely pink color and a sweet, fruity taste.`,
  },
  {
    id: 6,
    title: 'Cone Dosa',
    category: 'breakfast',
    price: 45.99,
    img: dosa,
    desc: `Dosa is a thin, crispy pancake made from a similar batter as idli but spread thinly on a hot griddle. It's commonly served with coconut chutney and various types of fillings or accompaniments.`,
  },
  {
    id: 7,
    title: 'Mutton Biryani',
    category: 'lunch',
    price: 219.99,
    img: muttonBiryani,
    desc: `Mutton biryani is similar to chicken biryani but uses tender pieces of mutton (goat meat) instead of chicken. It is equally flavorful and rich in spices, with tender, succulent mutton. `,
  },
  {
    id: 8,
    title: 'Mutton Kebab',
    category: 'starters',
    price: 199.99,
    img: muttonKebab,
    desc: `Mutton Kebabs are made from ground or minced mutton (or lamb) mixed with various spices and herbs. The mixture is shaped into patties or skewered and then grilled or roasted, resulting in a flavorful and juicy kebab.`,
  },
  {
    id: 9,
    title: 'Egg Kothu Parotta',
    category: 'dinner',
    price: 79.99,
    img: eggKothuParotta,
    desc: `Egg kothu parotta involves chopping the parottas into small pieces and then stir-frying them with a mixture of ingredients that typically includes eggs, onions, tomatoes, spices, and sometimes vegetables like bell peppers and peas.`,
  },
  {
    id: 10,
    title: 'Oreo Milkshake',
    category: 'shakes',
    price: 99.99,
    img: oreoMilkshake,
    desc: `An Oreo milkshake is a creamy and sweet beverage made by blending Oreos (chocolate sandwich cookies) with milk and ice cream. It has a rich chocolate flavor with the delightful crunch of Oreo cookie bits.`,
  },
  {
    id: 11,
    title: 'Chappati',
    category: 'breakfast',
    price: 29.99,
    img: chapati,
    desc: `Chapati is a thin, unleavened flatbread made from wheat flour.It is a staple in many Indian households and is often served with various curries, vegetables, or dal (lentil soup).`,
  },
  {
    id: 12,
    title: 'Butter Naan',
    category: 'lunch',
    price: 39.99,
    img: butterNaan,
    desc: `Butter naan is a leavened Indian bread made from all-purpose flour, yogurt, and butter. It's typically baked in a tandoor (clay oven) and brushed with melted butter, making it soft and slightly crispy on the outside.`,
  },
  {
    id: 13,
    title: 'Dragon Chicken',
    category: 'starters',
    price: 169.99,
    img: dragonChicken,
    desc: `Dragon chicken is a popular Indo-Chinese dish that combines the bold and spicy flavors of Indian and Chinese cuisines. It is known for its fiery taste, making it a favorite among those who enjoy spicy dishes.`,
  },
  {
    id: 14,
    title: 'Veech Parotta / Ceylon Parotta',
    category: 'dinner',
    price: 89.99,
    img: veechParotta,
    desc: `Ceylon Parotta, also known as Veech Parotta, is a variation of the traditional parotta. The dough for Ceylon Parotta is stretched and twirled to create thin layers, and it's often thinner and lighter than the regular parotta.`,
  },
  {
    id: 15,
    title: 'Chocolate Milkshake',
    category: 'shakes',
    price: 99.99,
    img: chocolateMilkshake,
    desc: `A chocolate milkshake is a classic treat made by blending chocolate syrup, cocoa powder, or chocolate ice cream with milk. It's rich, creamy, and perfect for chocolate lovers.`,
  },
];
export default menu;
