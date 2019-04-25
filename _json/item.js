/*

Molotov Cocktail
----------------
half a bottle of X
full bottle of X
quarter bottle of X

empty bottle
vase
jar
cup
water bottle

vodka
whiskey
brandy
white spirit
nail polish
petrol can
paint thinner
alcohol hand sanitizer

empty bottle + full bottle of X = 2 half a bottle of X

*/


var JSONitem = [

  { //0
    "name"              : "empty bottle"
  	,"description"      : "itemIngredient1desc"
    ,"image"            : "_images/item/bottle1.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
  },{ //1
    "name"          : "full bottle of X"
    ,"description"  : "item3desc"
    ,"image"        : "_images/item/bottle1.png"
    ,"itemIngredient1"         : []
    ,"itemIngredient2"         : []
  },{ //1
    "name"          : "Two half bottles of X"
    ,"description"  : "item3desc"
    ,"image"        : "_images/item/bottle2.png"
    ,"itemIngredient1"         : [0]
    ,"itemIngredient2"         : [1]
    ,"quantity"         : 2
  }





  // { //0
  //   "name"              : "Full vodka bottle"
  // 	,"description"      : "itemIngredient1desc"
  //   ,"image"            : "_images/item/bottle1.png"
  //   ,"itemIngredient1"  : []
  //   ,"itemIngredient2"  : []
  // },{ //1
  //   "name"          : "T-shirt"
  //   ,"description"  : "item3desc"
  //   ,"image"        : "_images/item/tshirt.png"
  //   ,"itemIngredient1"         : []
  //   ,"itemIngredient2"         : []
  // },{ //2
  //   "name"          : "Full whiskey bottle"
  // 	,"description"  : "itemIngredient2desc"
  //   ,"image"        : "_images/item/bottle2.png"
  //   ,"itemIngredient1"         : []
  //   ,"itemIngredient2"         : []
  // },{ //3
  //   "name"          : "Tea Towel"
  //   ,"description"  : "item4desc"
  //   ,"image"        : "_images/item/towel.png"
  //   ,"itemIngredient1"         : []
  //   ,"itemIngredient2"         : []
  // },{ //4
  //   "name"          : "Wooden stick"
  //   ,"description"  : "item5desc"
  //   ,"image"        : "_images/item/stick.png"
  //   ,"itemIngredient1"         : []
  //   ,"itemIngredient2"         : []
  // },{ //5
  //   "name"          : "Kitchen knife"
  //   ,"description"  : "item6desc"
  //   ,"image"        : "_images/item/knife-kitchen.png"
  //   ,"itemIngredient1"         : []
  //   ,"itemIngredient2"         : []
  // },{ //6   ***CRAFTABLE***
  //   "name"          : "Molotov Cocktail"
  //   ,"description"  : "A throwing weapon"
  //   ,"image"        : "_images/item/cocktail.png"
  //   ,"itemIngredient1"         : [0,2]
  //   ,"itemIngredient2"         : [1,3]
  // },{ //7   ***CRAFTABLE***
  //   "name"          : "Spear"
  // 	,"description"  : "Long reach"
  //   ,"image"        : "_images/item/spear.png"
  //   ,"itemIngredient1"         : [4]
  //   ,"itemIngredient2"         : [5]
  // },{ //8
  //   "name"          : "Map"
  // 	,"description"  : "Reveals map"
  //   ,"image"        : "_images/item/map.png"
  //   ,"itemIngredient1"         : []
  //   ,"itemIngredient2"         : []
  // }

];
