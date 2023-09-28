import FaceIcon from "@mui/icons-material/Face";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HomeIcon from "@mui/icons-material/Home";

import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MonochromePhotosRoundedIcon from "@mui/icons-material/MonochromePhotosRounded";

// import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
// import SaveIcon from "@mui/icons-material/Save";
// import PrintIcon from "@mui/icons-material/Print";
// import ShareIcon from "@mui/icons-material/Share";

export const profileItems = [
  { id: "1", title: "Profile", photo: <FaceIcon /> },
  { id: "2", title: "My Account", photo: <ManageAccountsIcon /> },
  { id: "3", title: "Settings", photo: <SettingsIcon /> },
  { id: "4", title: "Location: India", photo: <LanguageIcon /> },
  { id: "5", title: "Help", photo: <HelpIcon /> },
  { id: "6", title: "Send Feedback", photo: <FeedbackIcon /> },
];

export const notifications = [
  {
    id: "1",
    title: "CareerRide uploaded: 7 Common Interview Myths - Jobs Interview",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "2",
    title: "Sadhguru uploaded: 4 Common Food You Must Avoid",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "3",
    title:
      "ElectroBOOM uploaded: Wireless Communication with a Cup of Balls, Coherer Effect",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "4",
    title:
      "CareerRide uploaded: Data Analyst Interview : Top 5 Common rs for nd Experienced",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "5",
    title: "CareerRide uploaded: 7 Common Interview Myths - Jobs Interview",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  { id: "6", title: "Sadhguru uploaded: 4 Common Food You Must Avoid" },

  {
    id: "7",
    title: "ElectroBOOM uploaded: Wireless Communication ",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "8",
    title: "CareerRide uploaded: Data Analyst Interview : Top 5 ",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "9",
    title: "New video uploaded: How to Succeed in Your Career",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "10",
    title: "You have a new message from John Doe",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "11",
    title: "Reminder: Team Meeting at 2 PM",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "12",
    title: "New friend request from Jane Smith",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "13",
    title: "Weather update: Sunny day ahead",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "14",
    title: "New video uploaded: Cooking Tips and Recipes",
    avatar: <MonochromePhotosRoundedIcon />,
  },

  {
    id: "15",
    title: "You've earned a new badge: Super Viewer",
    avatar: <MonochromePhotosRoundedIcon />,
  },
];

export const sideDrawerItmes = [
  { id: "1", title: "Home", icon: <HomeIcon /> },
  { id: "2", title: "Shorts", icon: <ElectricBoltIcon /> },
  { id: "3", title: "Library", icon: <LibraryBooksIcon /> },
  { id: "4", title: "History", icon: <HistoryIcon /> },
  { id: "5", title: "Watch later", icon: <WatchLaterIcon /> },
  { id: "6", title: "Show more", icon: <ExpandMoreIcon /> },
];

export const cardData = [
  {
    id: "1",
    liked: false,
    avatar: "RR",
    title: "Spaghetti Carbonara",
    subheader: "September 20, 2022",
    image: require("./Images/spaghetti.jpg"),
    description:
      "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper. It's rich, creamy, and incredibly delicious.",
    procedure: "Cook",
    ingredients: [
      "spaghetti",
      "eggs",
      "pancetta",
      "pecorino cheese",
      "black pepper",
    ],
  },

  {
    id: "2",
    liked: false,
    avatar: "SK",
    title: "Vegetable Stir-Fry",
    subheader: "October 5, 2022",
    image: require("./Images/stir-fry.jpg"),
    description:
      "Vegetable Stir-Fry is a quick and healthy dish made with a variety of colorful vegetables and a flavorful stir-fry sauce. It's perfect for a quick weeknight dinner.",
    procedure: "Stir-fry",
    ingredients: [
      "bell peppers",
      "broccoli",
      "carrots",
      "soy sauce",
      "ginger",
      "garlic",
    ],
  },

  {
    id: "3",
    liked: false,
    avatar: "MG",
    title: "Homemade Pizza",
    subheader: "November 10, 2022",
    image: require("./Images/pizza.jpg"),
    description:
      "Homemade Pizza is a customizable delight! Top your pizza dough with your favorite ingredients, sauce, and cheese for a personalized pizza experience.",
    procedure: "Bake",
    ingredients: [
      "pizza dough",
      "tomato sauce",
      "mozzarella cheese",
      "pepperoni",
      "bell peppers",
    ],
  },

  {
    id: "4",
    liked: false,
    avatar: "RR",
    title: "Chicken Alfredo",
    subheader: "December 2, 2022",
    image: require("./Images/chicken-alfredo.jpg"),
    description:
      "Chicken Alfredo is a creamy pasta dish made with tender chicken breast, fettuccine pasta, and a rich Alfredo sauce. It's comfort food at its best.",
    procedure: "Cook",
    ingredients: [
      "chicken breast",
      "fettuccine pasta",
      "heavy cream",
      "parmesan cheese",
    ],
  },

  {
    id: "5",
    liked: false,
    avatar: "SK",
    title: "Greek Salad",
    subheader: "January 15, 2023",
    image: require("./Images/greek-salad.jpg"),
    description:
      "Greek Salad is a refreshing salad made with cucumbers, tomatoes, olives, red onions, and feta cheese, drizzled with a Greek vinaigrette.",
    procedure: "Prepare",
    ingredients: [
      "cucumbers",
      "tomatoes",
      "kalamata olives",
      "red onions",
      "feta cheese",
    ],
  },

  {
    id: "6",
    liked: false,
    avatar: "MG",
    title: "Chocolate Brownies",
    subheader: "February 5, 2023",
    image: require("./Images/brownies.jpg"),
    description:
      "Chocolate Brownies are rich and fudgy dessert bars made with cocoa powder and chocolate chips. They are the perfect treat for chocolate lovers.",
    procedure: "Bake",
    ingredients: ["cocoa powder", "chocolate chips", "butter", "sugar", "eggs"],
  },

  {
    id: "7",
    liked: false,
    avatar: "RR",
    title: "Sushi Rolls",
    subheader: "March 20, 2023",
    image: require("./Images/sushi.jpg"),
    description:
      "Sushi Rolls are a Japanese delicacy made with vinegared rice, fresh fish, vegetables, and seaweed. They are served with soy sauce and wasabi.",
    procedure: "Roll",
    ingredients: [
      "sushi rice",
      "fresh fish",
      "seaweed sheets",
      "cucumber",
      "avocado",
    ],
  },

  {
    id: "8",
    liked: false,
    avatar: "SK",
    title: "Chicken Tacos",
    subheader: "April 10, 2023",
    image: require("./Images/tacos.jpg"),
    description:
      "Chicken Tacos are a Tex-Mex favorite! Seasoned grilled chicken is served in soft tortillas with toppings like salsa, lettuce, and cheese.",
    procedure: "Grill",
    ingredients: ["chicken thighs", "tortillas", "salsa", "lettuce", "cheese"],
  },

  {
    id: "9",
    liked: false,
    avatar: "MG",
    title: "Caprese Salad",
    subheader: "May 5, 2023",
    image: require("./Images/caprese-salad.jpg"),
    description:
      "Caprese Salad is a simple Italian salad made with fresh mozzarella, tomatoes, basil leaves, and drizzled with balsamic glaze and olive oil.",
    procedure: "Prepare",
    ingredients: [
      "mozzarella cheese",
      "tomatoes",
      "basil leaves",
      "balsamic glaze",
    ],
  },

  {
    id: "10",
    liked: false,
    avatar: "RR",
    title: "Pancakes",
    subheader: "June 15, 2023",
    image: require("./Images/pancakes.jpg"),
    description:
      "Pancakes are a breakfast favorite! These fluffy and golden pancakes are perfect with maple syrup and a pat of butter.",
    procedure: "Cook",
    ingredients: ["flour", "milk", "eggs", "baking powder", "maple syrup"],
  },
  {
    id: "11",
    liked: false,
    avatar: "RR",
    title: "Spaghetti Carbonara",
    subheader: "September 20, 2022",
    image: require("./Images/spaghetti.jpg"),
    description:
      "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper. It's rich, creamy, and incredibly delicious.",
    procedure: "Cook",
    ingredients: [
      "spaghetti",
      "eggs",
      "pancetta",
      "pecorino cheese",
      "black pepper",
    ],
  },

  {
    id: "12",
    liked: false,
    avatar: "SK",
    title: "Vegetable Stir-Fry",
    subheader: "October 5, 2022",
    image: require("./Images/stir-fry.jpg"),
    description:
      "Vegetable Stir-Fry is a quick and healthy dish made with a variety of colorful vegetables and a flavorful stir-fry sauce. It's perfect for a quick weeknight dinner.",
    procedure: "Stir-fry",
    ingredients: [
      "bell peppers",
      "broccoli",
      "carrots",
      "soy sauce",
      "ginger",
      "garlic",
    ],
  },

  {
    id: "13",
    liked: false,
    avatar: "MG",
    title: "Homemade Pizza",
    subheader: "November 10, 2022",
    image: require("./Images/pizza.jpg"),
    description:
      "Homemade Pizza is a customizable delight! Top your pizza dough with your favorite ingredients, sauce, and cheese for a personalized pizza experience.",
    procedure: "Bake",
    ingredients: [
      "pizza dough",
      "tomato sauce",
      "mozzarella cheese",
      "pepperoni",
      "bell peppers",
    ],
  },

  {
    id: "14",
    liked: false,
    avatar: "RR",
    title: "Chicken Alfredo",
    subheader: "December 2, 2022",
    image: require("./Images/chicken-alfredo.jpg"),
    description:
      "Chicken Alfredo is a creamy pasta dish made with tender chicken breast, fettuccine pasta, and a rich Alfredo sauce. It's comfort food at its best.",
    procedure: "Cook",
    ingredients: [
      "chicken breast",
      "fettuccine pasta",
      "heavy cream",
      "parmesan cheese",
    ],
  },

  {
    id: "15",
    liked: false,
    avatar: "SK",
    title: "Greek Salad",
    subheader: "January 15, 2023",
    image: require("./Images/greek-salad.jpg"),
    description:
      "Greek Salad is a refreshing salad made with cucumbers, tomatoes, olives, red onions, and feta cheese, drizzled with a Greek vinaigrette.",
    procedure: "Prepare",
    ingredients: [
      "cucumbers",
      "tomatoes",
      "kalamata olives",
      "red onions",
      "feta cheese",
    ],
  },

  {
    id: "16",
    liked: false,
    avatar: "MG",
    title: "Chocolate Brownies",
    subheader: "February 5, 2023",
    image: require("./Images/brownies.jpg"),
    description:
      "Chocolate Brownies are rich and fudgy dessert bars made with cocoa powder and chocolate chips. They are the perfect treat for chocolate lovers.",
    procedure: "Bake",
    ingredients: ["cocoa powder", "chocolate chips", "butter", "sugar", "eggs"],
  },

  {
    id: "17",
    liked: false,
    avatar: "RR",
    title: "Sushi Rolls",
    subheader: "March 20, 2023",
    image: require("./Images/sushi.jpg"),
    description:
      "Sushi Rolls are a Japanese delicacy made with vinegared rice, fresh fish, vegetables, and seaweed. They are served with soy sauce and wasabi.",
    procedure: "Roll",
    ingredients: [
      "sushi rice",
      "fresh fish",
      "seaweed sheets",
      "cucumber",
      "avocado",
    ],
  },

  {
    id: "18",
    liked: false,
    avatar: "SK",
    title: "Chicken Tacos",
    subheader: "April 10, 2023",
    image: require("./Images/tacos.jpg"),
    description:
      "Chicken Tacos are a Tex-Mex favorite! Seasoned grilled chicken is served in soft tortillas with toppings like salsa, lettuce, and cheese.",
    procedure: "Grill",
    ingredients: ["chicken thighs", "tortillas", "salsa", "lettuce", "cheese"],
  },

  {
    id: "19",
    liked: false,
    avatar: "MG",
    title: "Caprese Salad",
    subheader: "May 5, 2023",
    image: require("./Images/caprese-salad.jpg"),
    description:
      "Caprese Salad is a simple Italian salad made with fresh mozzarella, tomatoes, basil leaves, and drizzled with balsamic glaze and olive oil.",
    procedure: "Prepare",
    ingredients: [
      "mozzarella cheese",
      "tomatoes",
      "basil leaves",
      "balsamic glaze",
    ],
  },

  {
    id: "20",
    liked: false,
    avatar: "RR",
    title: "Pancakes",
    subheader: "June 15, 2023",
    image: require("./Images/pancakes.jpg"),
    description:
      "Pancakes are a breakfast favorite! These fluffy and golden pancakes are perfect with maple syrup and a pat of butter.",
    procedure: "Cook",
    ingredients: ["flour", "milk", "eggs", "baking powder", "maple syrup"],
  },
];
