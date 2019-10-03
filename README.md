# schl

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

https://www.json-generator.com/
JSON generator : http://www.json-generator.com/api/json/get/cgyaLNkOXm?indent=2

[
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
address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
about: '{{lorem(1, "paragraphs")}}',
registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
latitude: '{{floating(-90.000001, 90)}}',
longitude: '{{floating(-180.000001, 180)}}',
tags: [
'{{repeat(7)}}',
'{{lorem(1, "words")}}'
],
posts: [
'{{repeat(2, 3)}}',
{
id: '{{index()}}',
title:'{{lorem(5, "words")}}',
post: '{{lorem(1, "paragraphs")}}',
likes:'{{integer(0, 400)}}',
comments: [
'{{repeat(1, 5)}}',
{
id: '{{index()}}',
postedBy: '{{firstName()}} {{surname()}}',
comment:'{{lorem(5, "words")}}'
}
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
greeting: function (tags) {
return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
},
favoriteFruit: function (tags) {
var fruits = ['apple', 'banana', 'strawberry'];
return fruits[tags.integer(0, fruits.length - 1)];
}
}
]
