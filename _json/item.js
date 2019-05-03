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


ITEMS
Tier 0 item - Can't be crafted
Tier 1 item - Crafted from Tier 0 item ONLY
Tier 2 item - Crafted from a Tier 0 AND Tier 1
Tier 3 item - Crafted from a Tier 1 AND Tier 2

*/

var JSONitem = [

  { //0
    "name"              : "Map" //IMPORTANT ITEM
  	,"description"      : "Reveals map"
    ,"image"            : "_images/item/map.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //1
    "name"              : "Full bottle of whiskey"
    ,"description"      : "An unopened bottle of 12 year old whiskey"
    ,"image"            : "_images/item/bottle-whiskey-full.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //2
    "name"              : "Half bottle of whiskey"
    ,"description"      : "A half bottle of 12 year old whiskey"
    ,"image"            : "_images/item/bottle-whiskey-half.png"
    ,"itemIngredient1"  : [21]
    ,"itemIngredient2"  : [1]
    ,"quantity"         : 2 //only if crafted
  },{ //3
    "name"              : "Full bottle of vodka"
    ,"description"      : "An unopened bottle of Russian vodka"
    ,"image"            : "_images/item/bottle-vodka-full.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //4
    "name"              : "Half bottle of vodka"
    ,"description"      : "A half bottle of Russian vodka"
    ,"image"            : "_images/item/bottle-vodka-half.png"
    ,"itemIngredient1"  : [21]
    ,"itemIngredient2"  : [3]
    ,"quantity"         : 2 //only if crafted
  },{ //5
    "name"              : "Full bottle of brandy"
    ,"description"      : "An unopened bottle of expensive brandy"
    ,"image"            : "_images/item/bottle-brandy-full.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //6
    "name"              : "Half bottle of brandy"
    ,"description"      : "A half bottle of expensive brandy"
    ,"image"            : "_images/item/bottle-brandy-half.png"
    ,"itemIngredient1"  : [21]
    ,"itemIngredient2"  : [5]
    ,"quantity"         : 2 //only if crafted
  },{ //7
    "name"              : ""
    ,"description"      : ""
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //8
    "name"              : ""
    ,"description"      : ""
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //9
    "name"              : ""
    ,"description"      : ""
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //10
    "name"              : ""
    ,"description"      : ""
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //11
    "name"              : "Bedsheets"
    ,"description"      : "Clean bedsheets"
    ,"image"            : "_images/item/bedsheets.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //12
    "name"              : "Dishcloth"
    ,"description"      : "A dirty dishcloth"
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //13
    "name"              : "Rag"
    ,"description"      : "An oily rag"
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //14
    "name"              : "Socks"
    ,"description"      : "A pair of sports socks"
    ,"image"            : "_images/item/socks.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //15
    "name"              : "Underwear"
    ,"description"      : "Some soiled underwear"
    ,"image"            : "_images/item/underwear.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //16
    "name"              : "Towel"
    ,"description"      : "A bathroom towel"
    ,"image"            : "_images/item/towel.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //17
    "name"              : "T-Shirt"
    ,"description"      : "A clean white t-shirt"
    ,"image"            : "_images/item/tshirt.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //18
    "name"              : "Newspaper"
    ,"description"      : "Yesterday's newspaper"
    ,"image"            : "_images/item/newspaper.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //19
    "name"              : "Tea towel"
    ,"description"      : "A kitchen tea towel"
    ,"image"            : "_images/item/teatowel.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //20
    "name"              : ""
    ,"description"      : ""
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //21
    "name"              : "Empty bottle"
  	,"description"      : "An empty glass bottle"
    ,"image"            : "_images/item/bottle-empty.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //22
    "name"              : "Vase"
    ,"description"      : "An flowerless vase"
    ,"image"            : "_images/item/vase.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //23
    "name"              : "Empty Jar"
    ,"description"      : "Someone has eaten all of the jam from this jar"
    ,"image"            : "_images/item/jar.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //24
    "name"              : "Empty water bottle"
    ,"description"      : "An empty water bottle"
    ,"image"            : "_images/item/bottle-water.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //25
    "name"              : "Glass cup"
    ,"description"      : "An empty glass cup"
    ,"image"            : "_images/item/cup-glass.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //26
    "name"              : ""
    ,"description"      : ""
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //27
    "name"              : ""
    ,"description"      : ""
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //28
    "name"              : ""
    ,"description"      : ""
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //29
    "name"              : ""
    ,"description"      : ""
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //30
    "name"              : ""
    ,"description"      : ""
    ,"image"            : "_images/image.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"quantity"         : 1
  },{ //31
    "name"              : "Molotov Cocktail"
    ,"description"      : "A throwing weapon"
    ,"image"            : "_images/item/cocktail.png"
    ,"itemIngredient1"  : [1,2,3,4,5,6] //flammable fluids
    ,"itemIngredient2"  : [0,11,12,13,14,15,16,17,18,19] //materials
    ,"itemUse"          : 32
    ,"quantity"         : 1
  },{ //32
    "name"              : "Lighter"
    ,"description"      : "A zippo"
    ,"image"            : "_images/item/lighter.png"
    ,"itemIngredient1"  : []
    ,"itemIngredient2"  : []
    ,"itemUse"          : false
    ,"quantity"         : 1
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
