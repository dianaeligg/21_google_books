const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactGoogleBooks"
);

const bookSeed = [
  {
    authors: ["Paul J. Wadell"],
    description: "Inspired by Aristotle, Augustine, and Aquinas, Happiness and the Christian Moral Life argues that the central question of ethics is the meaning and nature of happiness. In the Christian life, happiness is inseparable from goodness, particularly from a way of life that helps us grow together in the goodness of God. This book attempts to show what such a life might look like and how it might change our understanding of Christian ethics.",
    image: "http://books.google.com/books/content?id=_jKXk65jHFIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.ee/books?id=_jKXk65jHFIC&dq=happiness&hl=&source=gbs_api",
    subtitle: "An Introduction to Christian Ethics",
    title: "Happiness and the Christian Moral Life"
  },
  {
    authors: ["Darrin M. McMahon"],
    description: "Happiness: A History draws on a multitude of sources, including art and architecture, poetry and scripture, music and theology, and literature and myth, to offer a sweeping history of man's most elusive yet coveted goal. Ranging from psychology to genetics to the invention of the “smiley face,” McMahon follows the great pursuit of happiness through to the present day, showing how our modern search continues to generate new forms of pleasure, but also new forms of pain. Reprint.",
    image: "http://books.google.com/books/content?id=WDbOfcnXp-AC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.ee/books?id=WDbOfcnXp-AC&dq=happiness&hl=&source=gbs_api",
    subtitle: "A History",
    title: "Happiness"
  },
  {
    authors: ["Blair Lewis"],
    description: "A compelling look at one man's search for happiness through yoga, meditation and holistic methods.",
    image: "http://books.google.com/books/content?id=zjMiK_xetkYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.ee/books?id=zjMiK_xetkYC&dq=happiness&hl=&source=gbs_api",
    subtitle: "The Real Medicine and how it Works",
    title: "Happiness"
  },
  {
    authors: ["Victoria S. Wike"],
    description: "This book provides a comprehensive analysis of Kant's treatment of happiness in ethics. It considers the definition of happiness and the possible roles happiness may serve in ethics. It argues against critics who maintain that Kant's deontological ethic rejects happiness and against critics who assert that Kant's ethic is, in fact, consequential and concerned above all with ends such as happiness. By pointing to a system that organizes Kant's various claims about happiness, the book supports the view that happiness has positive roles to play in Kant's ethic.",
    image: "http://books.google.com/books/content?id=xqAkrB0Hy18C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.ee/books?id=xqAkrB0Hy18C&dq=happiness&hl=&source=gbs_api",
    title: "Kant on Happiness in Ethics"
  },
  {
    authors: ["Raymond A. Belliotti"],
    description: "Happiness Is Overrated highlights the greatest thinking on the concept of happiness from classical philosophers such as Plato, to contemporary sociologists and psychologists. It includes practical advice on how to attain happiness, but argues that happiness is not the greatest personal good. Ultimately, the greatest personal good is realized in leading a robustly meaningful, valuable life.",
    image: "http://books.google.com/books/content?id=ka6h4p61ClsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.ee/books?id=ka6h4p61ClsC&dq=happiness&hl=&source=gbs_api",
    title: "Happiness is Overrated"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
