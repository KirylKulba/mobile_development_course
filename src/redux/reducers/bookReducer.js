import { ADD_BOOK, DELETE_BOOK } from "../actions/types";

const initialState = {
  bookList: [
    // {
    //   id: 0,
    //   title: "One Italian summer",
    //   author: "Rebeca Serle",
    //   description:
    //     "The New York Times bestselling author of In Five Years returns with a powerful novel about the transformational love between mothers and daughters set on the breathtaking Amalfi Coast. When Katy’s mother dies, she is left reeling. Carol wasn’t just Katy’s mom, but her best friend and first phone call. She had all the answers and now, when Katy needs her the most, she is gone. To make matters worse, their planned mother-daughter trip of a lifetime looms: to Positano, the magical town where Carol spent the summer right before she met Katy’s father.",
    //   rating: 4.5,
    //   price: 16.08,
    //   category: "Romance",
    //   image_url:
    //     "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626799802i/58438583.jpg",
    //   audio: false,
    // },
    // {
    //   id:1,
    //   title: 'House of Sky and Breath',
    //   author:'Sarah J. Maas',
    //   description: 'Bryce Quinlan and Hunt Athalar are trying to get back to normal-they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebel’s plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.',
    //   rating:5,
    //   price:9.99,
    //   category:'Fantasy',
    //   image_url:"https://m.media-amazon.com/images/I/51WApJ4MiLL.jpg",
    //   audio: false,
    // },
    // {
    //   id:2,
    //   title: 'From Strength to Strength',
    //   author:'Arthur C. Brooks',
    //   description: '“In this book, Arthur C. Brooks helps people find greater happiness as they age and change.” —The Dalai Lama',
    //   rating:5,
    //   price:9.99,
    //   category:'Fantasy',
    //   image_url:"https://images-na.ssl-images-amazon.com/images/I/51jhu1GqpaL._SX328_BO1,204,203,200_.jpg",
    //   audio: false,
    // },
    // {
    //   id:3,
    //   title: 'The Paris Apartment',
    //   author:'Lucy FolleX',
    //   description: 'Bryce Quinlan and Hunt Athalar are trying to get back to normal-they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebel’s plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.',
    //   rating:4.5,
    //   price:9.99,
    //   category:'Fantasy',
    //   image_url:"https://images-na.ssl-images-amazon.com/images/I/51P4t0Cqy+L._SX327_BO1,204,203,200_.jpg",
    //   audio: false,
    // },
    // {
    //   id:4,
    //   title: 'The Paris Apartment',
    //   author:'Lucy FolleX',
    //   description: 'Bryce Quinlan and Hunt Athalar are trying to get back to normal-they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebel’s plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.',
    //   rating:4.5,
    //   price:9.99,
    //   category:'Fantasy',
    //   image_url:"https://images-na.ssl-images-amazon.com/images/I/51P4t0Cqy+L._SX327_BO1,204,203,200_.jpg",
    //   audio: true,
    // },
    // {
    //   id:5,
    //   title: 'The Thursday Murder Club',
    //   author:'Richard Osman',
    //   description: 'Bryce Quinlan and Hunt Athalar are trying to get back to normal-they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebel’s plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.',
    //   rating:3.5,
    //   price:10.99,
    //   category:'Thriller',
    //   image_url:"https://images-na.ssl-images-amazon.com/images/I/51ZX4i7a7SL._SX331_BO1,204,203,200_.jpg",
    //   audio: true,
    // },
    // {
    //   id:6,
    //   title: 'The Thursday Murder Club',
    //   author:'Richard Osman',
    //   description: 'Bryce Quinlan and Hunt Athalar are trying to get back to normal-they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebel’s plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.',
    //   rating:4.5,
    //   price:12.99,
    //   category:'Thriller',
    //   image_url:"https://images-na.ssl-images-amazon.com/images/I/51ZX4i7a7SL._SX331_BO1,204,203,200_.jpg",
    //   audio: false,
    // },
    // {
    //   id:7,
    //   title: 'The Atlas Six',
    //   author:'Olivie Blake',
    //   description: 'The Alexandrian Society, caretakers of lost knowledge from the greatest civilizations of antiquity, are the foremost secret society of magical academicians in the world. Those who earn a place among the Alexandrians will secure a life of wealth, power, and prestige beyond their wildest dreams, and each decade, only the six most uniquely talented magicians are selected to be considered for initiation.',
    //   rating:4.5,
    //   price:9.59,
    //   category:'Fantasy',
    //   image_url:"https://m.media-amazon.com/images/I/51LzpTvAR8L.jpg",
    //   audio: true,
    // },
    // {
    //   id:8,
    //   title: 'The Investigator',
    //   author:'John Sandford',
    //   description: 'By age twenty-four, Letty Davenport has seen more action and uncovered more secrets than many law enforcement professionals. Now a recent Stanford grad with a master’s in economics, she’s restless and bored in a desk job for U.S. Senator Colles. Letty’s ready to quit, but her skills have impressed Colles, and he offers her a carrot: feet-on-the-ground investigative work, in conjunction with the Department of Homeland Security. ',
    //   rating:5,
    //   price:18.97,
    //   category:'Thriller',
    //   image_url:"https://images-na.ssl-images-amazon.com/images/I/51twV8pyGfL._SX329_BO1,204,203,200_.jpg",
    //   audio: true,
    // },
    // {
    //   id:9,
    //   title: 'Blood and Ruins',
    //   author:'Richard Overy',
    //   description: 'Richard Overy sets out in Blood and Ruins to recast the way in which we view the Second World War and its origins and aftermath. As one of Britain’s most decorated and respected World War II historians, he argues that this was the “last imperial war,” with almost a century-long lead-up of global imperial expansion, which reached its peak in the territorial ambitions of Italy, Germany and Japan in the 1930s and early 1940s, before descending into the largest and costliest war in human history and the end, after 1945, of all territorial empires.',
    //   rating:5,
    //   price:26.49,
    //   category:'History',
    //   image_url:"https://images-na.ssl-images-amazon.com/images/I/51QHX0IT2wL._SX329_BO1,204,203,200_.jpg",
    //   audio: true,
    // },
    // {
    //   id:10,
    //   title: 'Blood and Ruins',
    //   author:'Richard Overy',
    //   description: 'Richard Overy sets out in Blood and Ruins to recast the way in which we view the Second World War and its origins and aftermath. As one of Britain’s most decorated and respected World War II historians, he argues that this was the “last imperial war,” with almost a century-long lead-up of global imperial expansion, which reached its peak in the territorial ambitions of Italy, Germany and Japan in the 1930s and early 1940s, before descending into the largest and costliest war in human history and the end, after 1945, of all territorial empires.',
    //   rating:5,
    //   price:26.49,
    //   category:'History',
    //   image_url:"https://images-na.ssl-images-amazon.com/images/I/51QHX0IT2wL._SX329_BO1,204,203,200_.jpg",
    //   audio: false,
    // }
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        bookList: state.bookList.concat({
          id: action.data.id,
          title: action.data.title,
          author: action.data.author,
          description: action.data.description,
          rating: action.data.rating,
          price: action.data.price,
          category: action.data.category,
          image_url: action.data.image_url,
          audio: action.data.audio,
        }),
      };
    case DELETE_BOOK:
      return {
        ...state,
        bookList: state.bookList.filter((item) => item.id !== action.key),
      };
    default:
      return state;
  }
};

export default bookReducer;
