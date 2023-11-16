//trying to make MongoDB Atlas database for webpage
use('itemtraker');

db.items.insertMany([{
    "item": "PS3 Console",
    "stock": "5",
    "price": 20,
    "model": "CECHA1000",
    "condition": "used",
    "description": "Slightly scratched, the console included with cord, tested and working"
},
{
  "item": "PS3 Controller",
  "stock": "15",
  "price": 5,
  "model": "CECHZC2",
  "condition": "used",
  "description": "Joystick slightly scratched, thumbgrips included"
},
{
  "item": "PS3 Call of Duty",
  "stock": "1",
  "price": 20,
  "model": "N/A",
  "condition": "in-box sealed",
  "description": "Includes case, manual, game, artwork, and promo codes"
},
{
  "item": "Xbox Console",
  "stock": "2",
  "price": 35,
  "model": "1",
  "condition": "used",
  "description": "No scratches, wear on top of console, tested and working"
}
])