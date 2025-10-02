
const products = [
  {
    id: 1,
    name: 'Taylor Swift –  The Anthology (Translucent Marbeled) ',
    price: 54.99,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: require('../images/product1.webp'),
    hoverImage: require('../images/product1-hover.webp'),
    details: {
      artist: 'Taylor Swift',
      genre: 'Pop',
      releaseYear: 2023,
      tracks: 12,
      weight: '180g',
      color: 'Silver'
    },
    relatedProducts: [2, 3, 4],
    stock: 15,
    rating: 4.8,
    reviews: 42,
    sku: 'VIN001',
    tags: ['limited edition', 'audiophile'],
    type:'new'
  },
  { 
    id: 2,
    name: 'AC/DC – Live (50th Anniversary Edition)(Gold)',
    price: 49.99,
    description: 'AC/DC are an Australian rock band formed in Sydney in 1973. Their music has been variously described as hard rock, blues rock and heavy metal, although the band calls it simply "rock and roll". ',
    image: require('../images/product2.webp'),
    hoverImage: require('../images/product2-hover.webp'),
    details: {
      artist: '	AC/DC',
      genre: 'Metal',
      releaseYear: 2016,
      tracks: 15,
      weight: '140g',
      color: 'Gold'
    },
    relatedProducts: [1, 3, 5],
    stock: 8,
    rating: 4.5,
    reviews: 36,
    sku: 'VIN002',
    tags: ['remastered', 'collector'],
    type:'new'
  }
  ,
  { 
    id: 3,
    name: 'The Jimi Hendrix Experience – Electric Ladyland (Quick Ship)',
    price: 24.49,
    description: 'The Jimi Hendrix Experience is a box set by the British-American rock band the Jimi Hendrix Experience, released in 2000 by MCA. The material includes alternative recordings, live performances and some rarities. ',
    image: require('../images/product3.webp'),
    hoverImage: require('../images/product3-hover.avif'),
    details: {
      artist: 'Jimi Hendrix Experience',
      genre: 'Rock',
      releaseYear: 1969,
      tracks: 15,
      weight: '140g',
      color: 'Red Translucent'
    },
    relatedProducts: [1, 3, 5],
    stock: 8,
    rating: 4.5,
    reviews: 36,
    sku: 'VIN002',
    tags: ['remastered', 'collector'],
    type:'new'
  },{ 
    id: 4,
    name: 'Michael Jackson - Thriller ',
    price: 99.99,
    description: 'Michael Jackson, popularly known as the King of Pop, is widely recognized for his contributions to the pop music genre.',
    image: require('../images/product4.webp'),
    hoverImage: require('../images/product4-hover.webp'),
    details: {
      artist: 'Michael Jackson',
      genre: 'Soul',
      releaseYear: 1980,
      tracks: 15,
      weight: '140g',
      color: 'Black'
    },
    relatedProducts: [1, 3, 5],
    stock: 8,
    rating: 4.5,
    reviews: 36,
    sku: 'VIN002',
    tags: ['remastered', 'collector'],
    type:'new'
  },
  { 
    id: 5,
    name: 'Pink Floyd – The Dark Side Of The Moon',
    price: 29.49,
    description: 'Pink Floyd are an English rock band formed in London in 1965. Gaining an early following as one of the first British psychedelic groups, they were distinguished by their extended compositions',
    image: require('../images/product5.webp'),
    hoverImage: require('../images/product5-hover.webp'),
    details: {
      artist: 'Pink Floyd',
      genre: 'Blues',
      releaseYear: 2021,
      tracks: 15,
      weight: '140g',
      color: 'Red Translucent'
    },
    relatedProducts: [1, 3, 5],
    stock: 8,
    rating: 4.5,
    reviews: 36,
    sku: 'VIN002',
      tags: ['remastered', 'collector']
  },
  { 
    id: 6,
    name: 'Billie Eilish - Hit Me Hard And Soft',
    price: 39.99,
    description: 'Billie Eilish falls into the alternative pop category and has been described as a mix of indie, alternative, and electropop. Her songs are often described as dark, introspective, and moody, but they also have a sense of playfulness, making them uniquely engaging.',
    image: require('../images/product6.avif'),
    hoverImage: require('../images/product6-hover.webp'),
    details: {
      artist: 'Billie Eilish',
      genre: 'Pop',
      releaseYear: 2022,
      tracks: 15,
      weight: '140g',
      color: 'Black'
    },
    relatedProducts: [1, 3, 5],
    stock: 8,
    rating: 4.5,
    reviews: 36,
    sku: 'VIN002',
    tags: ['remastered', 'collector']
  },
  { 
    id: 7,
    name: 'Eminem - The Eminem Show',
    price: 24.99,
    description: 'Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer. Regarded as one of the greatest and most influential rappers of all time',
    image: require('../images/product7.webp'),
    hoverImage: require('../images/product7-hover.avif'),
    details: {
      artist: 'Eminem',
      genre: 'Hip-Hop',
      releaseYear: 2002,
      tracks: 15,
      weight: '140g',
      color: 'Cream'
    },
    relatedProducts: [1, 3, 5],
    stock: 8,
    rating: 4.5,
    reviews: 36,
    sku: 'VIN002',
    tags: ['remastered', 'collector']
  },{ 
    id: 8,
    name: 'Michael Jackson – Bad (Quick Ship)',
    price: 109.99,
    description: 'Timeless rock classics from the 70s and 80s. Remastered for optimal sound quality.',
    image: require('../images/product8.webp'),
    hoverImage: require('../images/product8-hover.webp'),
    details: {
      artist: 'Michael Jackson',
      genre: 'Pop',
      releaseYear: 2001,
      tracks: 15,
      weight: '140g',
      color: 'Red Translucent'
    },
    relatedProducts: [1, 3, 5],
    stock: 8,
    rating: 4.5,
    reviews: 36,
    sku: 'VIN002',
    tags: ['remastered', 'collector']
  }
];

export default products;