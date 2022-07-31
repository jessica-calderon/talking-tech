const { Post } = require("../models");

const postdata = [
  {
    title: "Testing....",
    post_text: "This is a test post!",
    user_id: 10,
  },
  {
    title: "Another one",
    post_text: "This is another test!",
    user_id: 8,
  },
  {
    title: "Blah blah blah ",
    post_text: "I'm just here to blog...",
    user_id: 1,
  },
  {
    title: "Hello",
    post_text: "Typing typing typing",
    user_id: 4,
  },
  {
    title: "Hi",
    post_text: "What's going on",
    user_id: 7,
  },
  {
    title: "Hey hey",
    post_text: "Thanks for reading!",
    user_id: 4,
  },
  {
    title: "A bunch of tests",
    post_text: "Tests tests tests and more",
    user_id: 1,
  },
  {
    title: "Some more",
    post_text: "Hi!!!!",
    user_id: 1,
  },
  {
    title: "A bunch of tests",
    post_text: "Tests tests tests and more",
    user_id: 9,
  },
  {
    title: "Some more",
    post_text: "Hi!!!!",
    user_id: 5,
  },
  {
    title: "A bunch of tests",
    post_text: "Tests tests tests and more",
    user_id: 3,
  },
  {
    title: "Some more",
    post_text: "Hi!!!!",
    user_id: 10,
  },
  {
    title: "A bunch of tests",
    post_text: "Tests tests tests and more",
    user_id: 8,
  },
  {
    title: "Some more",
    post_text: "Hi!!!!",
    user_id: 3,
  },
  {
    title: "A bunch of tests",
    post_text: "Tests tests tests and more",
    user_id: 3,
  },
  {
    title: "Some more",
    post_text: "Hi!!!!",
    user_id: 7,
  },
  {
    title: "A bunch of tests",
    post_text: "Tests tests tests and more",
    user_id: 6,
  },
  {
    title: "Some more",
    post_text: "Hi!!!!",
    user_id: 4,
  },
  {
    title: "A bunch of tests",
    post_text: "Tests tests tests and more",
    user_id: 6,
  },
  {
    title: "Last test",
    post_text: "Thanks for stopping by!",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
