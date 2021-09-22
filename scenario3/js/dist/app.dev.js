"use strict";

var data = {
  fullName: "Jennifer Smith",
  position: "UI/UX Designer",
  socials: [{
    id: 'fb',
    service: "Facebook",
    url: "https.//www.facebook.com/jsmith24",
    icon: 'fab fa-facebook'
  }, {
    id: 'ig',
    service: "Instagram",
    url: "https.//www.instagram.com/jsmith24",
    icon: 'fab fa-instagram'
  }, {
    id: 'db',
    service: "Dribble",
    url: "https.//www.dribble.com/jsmith24",
    icon: 'fab fa-dribble'
  }, {
    id: 'gl',
    service: "Google",
    url: "https.//www.google.com/jsmith24",
    icon: 'fab fa-dribble'
  }]
};
var style = document.createElement('style');
var root = document.createElement('div');
var body = document.getElementsByTagName('body')[0];
var card = document.createElement('section');
var html = " \n<div class=\"card__wrapper\">\n<img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg\" class=\"card__user-img\">\n<div class=\"card__info\">\n  <span class=\"card__name\">".concat(data.fullName, "</span>\n  <span class=\"card__title\">").concat(data.position, "</span>\n</div>\n<div class=\"card__socials\">\n \n</div>\n</div>\n");
var cssStyles = " \n.card{\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    backdrop-filter: blur(50px);\n  }\n  .card__wrapper{\n    height: 400px;\n    padding: 20px;\n    max-width: 300px;\n    width: 100%;\n    background: white;\n    box-shadow: 0px 0px 62px 0px rgba(0,0,0,.22);\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .card__user-img{\n    border: 2px solid #2c5eff;\n    height: 70px;\n    width: 70px;\n    margin: 2rem 0 1.5rem;\n    border-radius: 50%;\n    object-fit: cover;\n    object-position: center;\n  }\n  .card-info{\n    margin-bottom: 2rem;\n  }\n  .card__name{\n    text-align: center;\n    display: block;\n    font-weight: 600;\n    font-size: 1.2rem;\n    margin-bottom: .5rem;\n  }\n  .card__title{\n    display: block;\n    font-size: .7rem;\n    margin-bottom: 2rem;\n    text-align: center;\n  }\n  .card__icon{\n    width: 200px;\n    padding: 10px;\n    border-radius: 3px;\n    border: 1px solid #000;\n    margin-bottom: .4rem;\n    overflow: hidden;\n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n    transition: background .3s ease-in-out, color .3s ease-in-out;\n    cursor: pointer;\n  }\n  .card__icon-box{\n    width: 25px;\n    display: inline-block;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .card__icon-title{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n  }\n  .card__icon--fb{\n    color: #2c5eff;\n    border: 1px solid #2c5eff;\n  }\n  .card__icon--fb:hover{\n    background: #2c5eff;\n    color: white;\n  }\n  .card__icon--ig{\n    color: #773fe7;\n    border: 1px solid #773fe7;\n  }\n  .card__icon--ig:hover{\n    background: #773ef7;\n    color: white;\n  }\n  .card__icon--db{\n    color: #f962b1;\n    border: 1px solid #f962b1;\n  }\n  .card__icon--db:hover{\n    background: #f962b1;\n    color: white;\n  }\n";
body.prepend(root);
root.classList.add('root');
card.classList.add('card');
root.prepend(card);
root.style.cssText = "\n    background: url('https://wallpaperaccess.com/full/636909.jpg'); \n    background-size: cover;\n    background-position: center;\n    ";
root.prepend(style);
style.innerHTML = cssStyles;
card.innerHTML = html;
var cardSocials = card.getElementsByClassName('card-socials');
var temp = " \n<div class='card__icon card__icon--fb'> \n    <span class='card__icon-box'>\n        <i class='fab fa-facebook-f></i>\n    </span>\n    <span class='card__icon-title'> \n    Facebook\n    </span> \n</div>\n";