var image = document.querySelector(".img-1");
var reviewerName = document.getElementById("reviewer");
var reviewerTittle = document.getElementById("jobTitle");
var commentDone = document.querySelector(".comment");
var buttonLeft = document.querySelector(".fa-chevron-left");
var buttonRight = document.querySelector(".fa-chevron-right");
var button = document.querySelector(".onlyBtn");


// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// console.log(reviews[0].id);
count = 0;
// reviews.forEach(function(item, index){
  buttonRight.addEventListener("click", function(){
    count++;
    if(count > reviews.length - 1){
      count = 0
      image.src=reviews[0].img}
    // console.log("hi");
    image.src=reviews[count].img;
    reviewerName.innerHTML=reviews[count].name;
    reviewerTittle.innerHTML=reviews[count].job;
    commentDone.innerHTML=reviews[count].text;
    console.log(count);
});


// reviews.forEach(function(item, index){
  buttonLeft.addEventListener("click", function(){
    count--;
    if(count < 0){
      count=3
      image.src=reviews[3].img}
    console.log("hi");
    image.src=reviews[count].img;
    reviewerName.innerHTML=reviews[count].name;
    reviewerTittle.innerHTML=reviews[count].job;
    commentDone.innerHTML=reviews[count].text;
    console.log("minus "+count);

});


button.addEventListener("click", function(){
  var randomNum = Math.floor(Math.random()*reviews.length);
  console.log("random " + randomNum);
  var selectedPerson = reviews[randomNum].name;
  console.log(selectedPerson);
  image.src=reviews[randomNum].img;
  reviewerName.innerHTML=reviews[randomNum].name;
  reviewerTittle.innerHTML=reviews[randomNum].job;
  commentDone.innerHTML=reviews[randomNum].text;
  
})
