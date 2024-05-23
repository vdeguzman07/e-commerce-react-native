/* eslint-disable prettier/prettier */
import {ImageSourcePropType} from 'react-native';

/* eslint-disable prettier/prettier */
export interface Products {
  id: string;
  name: string;
  sub: string;
  description?: string;
  imagelink_square: ImageSourcePropType;
  imagelink_portrait?: string;
  prices?: Price[] | any;
  average_rating: number;
  ratings_count?: string;
  favourite?: boolean;
  type?: string;
  index: number;
  pax?: string;
  meat?: string;
  delivery?: string;
  buttonPressHandler?: any;
  price?: Price;
}

export interface Price {
  size?: string;
  price: string;
  currency: string;
}

const PRODUCTS: Array<Products> = [
  {
    id: 'P1',
    name: 'Cochinillo',
    sub: 'Sale',
    description: 'With 2 kinds of sauces, Liver Sauce and Pinakurat Sauce',
    imagelink_square: require('../assets/products/cochinillo/square/cochinillo_square.jpg'),
    imagelink_portrait: require('../assets/products/cochinillo/portrait/cochinillo.jpg'),

    prices: [
      {size: 'Regular', price: '7,949', currency: '₱'},
      {size: 'Large', price: '8,949', currency: '₱'},
      {size: 'Grand', price: '9,949', currency: '₱'},
    ],
    average_rating: 5,
    ratings_count: '6,879',
    favourite: false,
    type: 'High-end',
    index: 0,
    pax: '8-14 pax',
    meat: 'Pork',
    delivery: 'Free Delivery',
  },
  {
    id: 'P2',
    name: 'USDA Prime Rib',
    sub: 'Sale',
    description: 'With 2 kinds of sauces, Liver Sauce and Pinakurat Sauce',
    imagelink_square: require('../assets/products/Rib/square/rib_square.jpg'),
    imagelink_portrait: require('../assets/products/Rib/portrait/rib.jpg'),
    prices: [
      {size: 'Medium-Rare', price: '8,499', currency: '₱'},
      {size: 'Medium', price: '8,499', currency: '₱'},
      {size: 'Medium-Welll', price: '8,499', currency: '₱'},
    ],
    average_rating: 4.9,
    ratings_count: '6,879',
    favourite: false,
    type: 'High-end',
    index: 0,
    pax: '8-10 pax',
    meat: 'Beef',
    delivery: 'Free Delivery',
  },
  {
    id: 'P3',
    name: 'Rack of Lamb',
    sub: 'Sale',
    description: 'With two sauces, gravy and special house sauce',
    imagelink_square: require('../assets/products/Lamb/square/lamb_square.jpg'),
    imagelink_portrait: require('../assets/products/Lamb/portrait/lamb.jpg'),
    prices: [
      {size: 'Medium-Rare', price: '4,599', currency: '₱'},
      {size: 'Medium', price: '4,599', currency: '₱'},
      {size: 'Medium-Welll', price: '4,599', currency: '₱'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'High-end',
    index: 0,
    pax: '3-4 pax',
    meat: 'Lamb',
    delivery: 'Free Delivery',
  },
  {
    id: 'P4',
    name: 'Angus Steak',
    sub: 'Sale',
    description: 'With two sauces, gravy and special house sauce',
    imagelink_square: require('../assets/products/Angus/square/angus_square.jpg'),
    imagelink_portrait: require('../assets/products/Angus/portrait/angus.jpg'),
    prices: [
      {size: 'Medium-Rare', price: '3,999', currency: '₱'},
      {size: 'Medium', price: '3,999', currency: '₱'},
      {size: 'Medium-Welll', price: '3,999', currency: '₱'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'High-end',
    index: 0,
    pax: '3-4 pax',
    meat: 'Beef',
    delivery: 'Free Delivery',
  },
  {
    id: 'P5',
    name: 'Roasted Turkey',
    sub: 'Sale',
    description: 'With two sauces, gravy and special house sauce',
    imagelink_square: require('../assets/products/Turkey/square/turkey_square.jpg'),
    imagelink_portrait: require('../assets/products/Turkey/portrait/turkey.jpg'),
    prices: [
      {price: '8,599', currency: '₱'},
      {price: '8,599', currency: '₱'},
      {price: '8,599', currency: '₱'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'High-end',
    index: 0,
    pax: '5-10 pax',
    meat: 'Turkey',
    delivery: 'Free Delivery',
  },
];

export default PRODUCTS;
