let titles = ['Hello!', 'How it is going?', 'I am doing great!'];

let counter = 0;

setInterval(() => {
  document.title = titles[counter % titles.length];

  counter++;
}, 2000);