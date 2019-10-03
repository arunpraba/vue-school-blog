import Vue from 'vue';
import App from './App.vue';
import './assets/styles/styles.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

const name = [
  '{{repeat(15, 7)}}',
  {
    id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/200x200',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address:
      '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: ['{{repeat(7)}}', '{{lorem(1, "words")}}'],
    posts: [
      '{{repeat(2, 3)}}',
      {
        id: '{{index()}}',
        title: '{{lorem(5, "words")}}',
        post: '{{lorem(1, "paragraphs")}}',
        likes: '{{integer(0, 400)}}',
        comments: [
          '{{repeat(2, 5)}}',
          { id: '{{index()}}', title: '{{lorem(5, "words")}}' }
        ]
      }
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function(tags) {
      return (
        'Hello, ' +
        this.name +
        '! You have ' +
        tags.integer(1, 10) +
        ' unread messages.'
      );
    },
    favoriteFruit: function(tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }
];
