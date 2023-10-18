import FaceIcon from "@mui/icons-material/Face";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

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
    title: "New Recipe Uploaded: Spaghetti Carbonara",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "2",
    title: "Cooking Tips: How to Grill the Perfect Steak",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "3",
    title: "Dessert Ideas: Chocolate Fondue Night",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "4",
    title: "Healthy Eating: Nutritional Benefits of Avocado",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "5",
    title: "New Recipe Uploaded: Tasty Vegetarian Stir-fry",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "6",
    title: "Cooking Tips: How to Bake the Perfect Bread",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "7",
    title: "Special Event: Wine Tasting Night at Our Restaurant",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "8",
    title: "Food Festival Alert: Taste of the World - Coming Soon!",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "9",
    title: "New Food Blog Post: Top 10 Breakfast Recipes",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "10",
    title: "Cooking Class Reminder: Italian Cuisine Workshop",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "11",
    title: "Featured Chef of the Month: Meet Chef Julia",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "12",
    title: "Healthy Eating Challenge: Week 1 - Eat More Greens",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "13",
    title: "New Food Delivery Service: Delicious Meals to Your Door",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "14",
    title: "Cooking Competition: Join and Win Exciting Prizes!",
    avatar: <RestaurantMenuIcon />,
  },

  {
    id: "15",
    title: "Foodie's Paradise: Explore the Best Eateries in Town",
    avatar: <RestaurantMenuIcon />,
  },
];
export const sideDrawerItmes = [
  { id: "1", title: "Home", icon: <HomeIcon /> },
  { id: "2", title: "Random", icon: <ElectricBoltIcon /> },
  { id: "3", title: "Library", icon: <LibraryBooksIcon /> },
  { id: "4", title: "History", icon: <HistoryIcon /> },
  { id: "5", title: "Save later", icon: <WatchLaterIcon /> },
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
    procedure: [
      "1. Boil a pot of water and cook the spaghetti according to package instructions.",
      "2. While the spaghetti is cooking, heat a pan over medium heat and add diced pancetta. Cook until crispy.",
      "3. In a bowl, whisk together eggs, grated pecorino cheese, and black pepper.",
      "4. Drain the cooked spaghetti and immediately add it to the pan with crispy pancetta. Toss to combine.",
      "5. Remove the pan from heat and quickly pour in the egg and cheese mixture. Stir continuously to create a creamy sauce.",
      "6. Serve the Carbonara immediately, garnished with extra cheese and black pepper.",
    ],
    ingredients: [
      "spaghetti",
      "eggs",
      "pancetta",
      "pecorino cheese",
      "black pepper",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
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
    procedure: [
      "1. Prepare all the vegetables by chopping them into bite-sized pieces.",
      "2. In a wok or large skillet, heat oil over high heat.",
      "3. Add minced garlic and ginger, and stir-fry for about 30 seconds until fragrant.",
      "4. Add the vegetables and stir-fry for 3-5 minutes until they start to become tender.",
      "5. Pour in the stir-fry sauce and continue to cook for another 2-3 minutes until the sauce thickens and coats the vegetables.",
      "6. Serve the Vegetable Stir-Fry hot over cooked rice or noodles.",
    ],

    ingredients: [
      "bell peppers",
      "broccoli",
      "carrots",
      "soy sauce",
      "ginger",
      "garlic",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "3",
    liked: false,
    avatar: "RR",
    title: "Spaghetti Carbonara",
    subheader: "September 20, 2022",
    image: require("./Images/spaghetti.jpg"),
    description:
      "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper. It's rich, creamy, and incredibly delicious.",
    procedure: [
      "1. Boil a pot of water and cook the spaghetti according to package instructions.",
      "2. While the spaghetti is cooking, heat a pan over medium heat and add diced pancetta. Cook until crispy.",
      "3. In a bowl, whisk together eggs, grated pecorino cheese, and black pepper.",
      "4. Drain the cooked spaghetti and immediately add it to the pan with crispy pancetta. Toss to combine.",
      "5. Remove the pan from heat and quickly pour in the egg and cheese mixture. Stir continuously to create a creamy sauce.",
      "6. Serve the Carbonara immediately, garnished with extra cheese and black pepper.",
    ],

    ingredients: [
      "spaghetti",
      "eggs",
      "pancetta",
      "pecorino cheese",
      "black pepper",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "4",
    liked: false,
    avatar: "SK",
    title: "Vegetable Stir-Fry",
    subheader: "October 5, 2022",
    image: require("./Images/stir-fry.jpg"),
    description:
      "Vegetable Stir-Fry is a quick and healthy dish made with a variety of colorful vegetables and a flavorful stir-fry sauce. It's perfect for a quick weeknight dinner.",
    procedure: [
      "1. Prepare all the vegetables by chopping them into bite-sized pieces.",
      "2. In a wok or large skillet, heat oil over high heat.",
      "3. Add minced garlic and ginger, and stir-fry for about 30 seconds until fragrant.",
      "4. Add the vegetables and stir-fry for 3-5 minutes until they start to become tender.",
      "5. Pour in the stir-fry sauce and continue to cook for another 2-3 minutes until the sauce thickens and coats the vegetables.",
      "6. Serve the Vegetable Stir-Fry hot over cooked rice or noodles.",
    ],
    ingredients: [
      "bell peppers",
      "broccoli",
      "carrots",
      "soy sauce",
      "ginger",
      "garlic",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "5",
    liked: false,
    avatar: "MG",
    title: "Homemade Pizza",
    subheader: "November 10, 2022",
    image: require("./Images/pizza.jpg"),
    description:
      "Homemade Pizza is a customizable delight! Top your pizza dough with your favorite ingredients, sauce, and cheese for a personalized pizza experience.",
    procedure: [
      "1. Preheat your oven to the highest temperature setting (usually around 500°F or 260°C).",
      "2. Roll out the pizza dough on a floured surface to your desired thickness.",
      "3. Transfer the dough to a pizza stone or baking sheet.",
      "4. Spread tomato sauce evenly over the dough, leaving a small border for the crust.",
      "5. Sprinkle mozzarella cheese over the sauce and add your favorite toppings, such as pepperoni and bell peppers.",
      "6. Bake the pizza in the preheated oven for 10-15 minutes or until the crust is golden and the cheese is bubbly.",
      "7. Remove from the oven, slice, and enjoy your Homemade Pizza!",
    ],

    ingredients: [
      "pizza dough",
      "tomato sauce",
      "mozzarella cheese",
      "pepperoni",
      "bell peppers",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "6",
    liked: false,
    avatar: "MG",
    title: "Homemade Pizza",
    subheader: "November 10, 2022",
    image: require("./Images/pizza.jpg"),
    description:
      "Homemade Pizza is a customizable delight! Top your pizza dough with your favorite ingredients, sauce, and cheese for a personalized pizza experience.",
    procedure: [
      "1. Preheat your oven to the highest temperature setting (usually around 500°F or 260°C).",
      "2. Roll out the pizza dough on a floured surface to your desired thickness.",
      "3. Transfer the dough to a pizza stone or baking sheet.",
      "4. Spread tomato sauce evenly over the dough, leaving a small border for the crust.",
      "5. Sprinkle mozzarella cheese over the sauce and add your favorite toppings, such as pepperoni and bell peppers.",
      "6. Bake the pizza in the preheated oven for 10-15 minutes or until the crust is golden and the cheese is bubbly.",
      "7. Remove from the oven, slice, and enjoy your Homemade Pizza!",
    ],

    ingredients: [
      "pizza dough",
      "tomato sauce",
      "mozzarella cheese",
      "pepperoni",
      "bell peppers",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "7",
    liked: false,
    avatar: "RR",
    title: "Chicken Alfredo",
    subheader: "December 2, 2022",
    image: require("./Images/chicken-alfredo.jpg"),
    description:
      "Chicken Alfredo is a creamy pasta dish made with tender chicken breast, fettuccine pasta, and a rich Alfredo sauce. It's comfort food at its best.",
    procedure: [
      "1. Season chicken breast with salt and pepper.",
      "2. In a large skillet, heat butter over medium-high heat and cook chicken until no longer pink, about 5 minutes per side. Remove and set aside.",
      "3. In the same skillet, add heavy cream and bring to a simmer. Add grated parmesan cheese and stir until the sauce thickens.",
      "4. Cook fettuccine pasta according to package instructions and drain.",
      "5. Slice the cooked chicken breast and add it to the sauce.",
      "6. Serve the Chicken Alfredo over cooked fettuccine pasta, garnished with more parmesan cheese.",
    ],
    ingredients: [
      "chicken breast",
      "fettuccine pasta",
      "heavy cream",
      "parmesan cheese",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "8",
    liked: false,
    avatar: "SK",
    title: "Greek Salad",
    subheader: "January 15, 2023",
    image: require("./Images/greek-salad.jpg"),
    description:
      "Greek Salad is a refreshing salad made with cucumbers, tomatoes, olives, red onions, and feta cheese, drizzled with a Greek vinaigrette.",
    procedure: [
      "1. In a large salad bowl, combine sliced cucumbers, diced tomatoes, kalamata olives, and thinly sliced red onions.",
      "2. Crumble feta cheese over the vegetables.",
      "3. In a small bowl, whisk together olive oil, red wine vinegar, dried oregano, salt, and pepper to make the dressing.",
      "4. Drizzle the dressing over the salad and toss to combine.",
      "5. Serve the Greek Salad immediately as a refreshing side dish.",
    ],
    ingredients: [
      "cucumbers",
      "tomatoes",
      "kalamata olives",
      "red onions",
      "feta cheese",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "9",
    liked: false,
    avatar: "RR",
    title: "Spaghetti Carbonara",
    subheader: "September 20, 2022",
    image: require("./Images/spaghetti.jpg"),
    description:
      "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper. It's rich, creamy, and incredibly delicious.",
    procedure: [
      "1. Boil a pot of water and cook the spaghetti according to package instructions.",
      "2. While the spaghetti is cooking, heat a pan over medium heat and add diced pancetta. Cook until crispy.",
      "3. In a bowl, whisk together eggs, grated pecorino cheese, and black pepper.",
      "4. Drain the cooked spaghetti and immediately add it to the pan with crispy pancetta. Toss to combine.",
      "5. Remove the pan from heat and quickly pour in the egg and cheese mixture. Stir continuously to create a creamy sauce.",
      "6. Serve the Carbonara immediately, garnished with extra cheese and black pepper.",
    ],
    ingredients: [
      "spaghetti",
      "eggs",
      "pancetta",
      "pecorino cheese",
      "black pepper",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },

  {
    id: "10",
    liked: false,
    avatar: "SK",
    title: "Vegetable Stir-Fry",
    subheader: "October 5, 2022",
    image: require("./Images/stir-fry.jpg"),
    description:
      "Vegetable Stir-Fry is a quick and healthy dish made with a variety of colorful vegetables and a flavorful stir-fry sauce. It's perfect for a quick weeknight dinner.",
    procedure: [
      "1. Prepare all the vegetables by chopping them into bite-sized pieces.",
      "2. In a wok or large skillet, heat oil over high heat.",
      "3. Add minced garlic and ginger, and stir-fry for about 30 seconds until fragrant.",
      "4. Add the vegetables and stir-fry for 3-5 minutes until they start to become tender.",
      "5. Pour in the stir-fry sauce and continue to cook for another 2-3 minutes until the sauce thickens and coats the vegetables.",
      "6. Serve the Vegetable Stir-Fry hot over cooked rice or noodles.",
    ],

    ingredients: [
      "bell peppers",
      "broccoli",
      "carrots",
      "soy sauce",
      "ginger",
      "garlic",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
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
    procedure: [
      "1. Boil a pot of water and cook the spaghetti according to package instructions.",
      "2. While the spaghetti is cooking, heat a pan over medium heat and add diced pancetta. Cook until crispy.",
      "3. In a bowl, whisk together eggs, grated pecorino cheese, and black pepper.",
      "4. Drain the cooked spaghetti and immediately add it to the pan with crispy pancetta. Toss to combine.",
      "5. Remove the pan from heat and quickly pour in the egg and cheese mixture. Stir continuously to create a creamy sauce.",
      "6. Serve the Carbonara immediately, garnished with extra cheese and black pepper.",
    ],

    ingredients: [
      "spaghetti",
      "eggs",
      "pancetta",
      "pecorino cheese",
      "black pepper",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
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
    procedure: [
      "1. Prepare all the vegetables by chopping them into bite-sized pieces.",
      "2. In a wok or large skillet, heat oil over high heat.",
      "3. Add minced garlic and ginger, and stir-fry for about 30 seconds until fragrant.",
      "4. Add the vegetables and stir-fry for 3-5 minutes until they start to become tender.",
      "5. Pour in the stir-fry sauce and continue to cook for another 2-3 minutes until the sauce thickens and coats the vegetables.",
      "6. Serve the Vegetable Stir-Fry hot over cooked rice or noodles.",
    ],
    ingredients: [
      "bell peppers",
      "broccoli",
      "carrots",
      "soy sauce",
      "ginger",
      "garlic",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
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
    procedure: [
      "1. Preheat your oven to the highest temperature setting (usually around 500°F or 260°C).",
      "2. Roll out the pizza dough on a floured surface to your desired thickness.",
      "3. Transfer the dough to a pizza stone or baking sheet.",
      "4. Spread tomato sauce evenly over the dough, leaving a small border for the crust.",
      "5. Sprinkle mozzarella cheese over the sauce and add your favorite toppings, such as pepperoni and bell peppers.",
      "6. Bake the pizza in the preheated oven for 10-15 minutes or until the crust is golden and the cheese is bubbly.",
      "7. Remove from the oven, slice, and enjoy your Homemade Pizza!",
    ],

    ingredients: [
      "pizza dough",
      "tomato sauce",
      "mozzarella cheese",
      "pepperoni",
      "bell peppers",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "14",
    liked: false,
    avatar: "MG",
    title: "Homemade Pizza",
    subheader: "November 10, 2022",
    image: require("./Images/pizza.jpg"),
    description:
      "Homemade Pizza is a customizable delight! Top your pizza dough with your favorite ingredients, sauce, and cheese for a personalized pizza experience.",
    procedure: [
      "1. Preheat your oven to the highest temperature setting (usually around 500°F or 260°C).",
      "2. Roll out the pizza dough on a floured surface to your desired thickness.",
      "3. Transfer the dough to a pizza stone or baking sheet.",
      "4. Spread tomato sauce evenly over the dough, leaving a small border for the crust.",
      "5. Sprinkle mozzarella cheese over the sauce and add your favorite toppings, such as pepperoni and bell peppers.",
      "6. Bake the pizza in the preheated oven for 10-15 minutes or until the crust is golden and the cheese is bubbly.",
      "7. Remove from the oven, slice, and enjoy your Homemade Pizza!",
    ],

    ingredients: [
      "pizza dough",
      "tomato sauce",
      "mozzarella cheese",
      "pepperoni",
      "bell peppers",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "15",
    liked: false,
    avatar: "RR",
    title: "Chicken Alfredo",
    subheader: "December 2, 2022",
    image: require("./Images/chicken-alfredo.jpg"),
    description:
      "Chicken Alfredo is a creamy pasta dish made with tender chicken breast, fettuccine pasta, and a rich Alfredo sauce. It's comfort food at its best.",
    procedure: [
      "1. Season chicken breast with salt and pepper.",
      "2. In a large skillet, heat butter over medium-high heat and cook chicken until no longer pink, about 5 minutes per side. Remove and set aside.",
      "3. In the same skillet, add heavy cream and bring to a simmer. Add grated parmesan cheese and stir until the sauce thickens.",
      "4. Cook fettuccine pasta according to package instructions and drain.",
      "5. Slice the cooked chicken breast and add it to the sauce.",
      "6. Serve the Chicken Alfredo over cooked fettuccine pasta, garnished with more parmesan cheese.",
    ],
    ingredients: [
      "chicken breast",
      "fettuccine pasta",
      "heavy cream",
      "parmesan cheese",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "16",
    liked: false,
    avatar: "SK",
    title: "Greek Salad",
    subheader: "January 15, 2023",
    image: require("./Images/greek-salad.jpg"),
    description:
      "Greek Salad is a refreshing salad made with cucumbers, tomatoes, olives, red onions, and feta cheese, drizzled with a Greek vinaigrette.",
    procedure: [
      "1. In a large salad bowl, combine sliced cucumbers, diced tomatoes, kalamata olives, and thinly sliced red onions.",
      "2. Crumble feta cheese over the vegetables.",
      "3. In a small bowl, whisk together olive oil, red wine vinegar, dried oregano, salt, and pepper to make the dressing.",
      "4. Drizzle the dressing over the salad and toss to combine.",
      "5. Serve the Greek Salad immediately as a refreshing side dish.",
    ],
    ingredients: [
      "cucumbers",
      "tomatoes",
      "kalamata olives",
      "red onions",
      "feta cheese",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "17",
    liked: false,
    avatar: "SK",
    title: "Greek Salad",
    subheader: "January 15, 2023",
    image: require("./Images/greek-salad.jpg"),
    description:
      "Greek Salad is a refreshing salad made with cucumbers, tomatoes, olives, red onions, and feta cheese, drizzled with a Greek vinaigrette.",
    procedure: [
      "1. In a large salad bowl, combine sliced cucumbers, diced tomatoes, kalamata olives, and thinly sliced red onions.",
      "2. Crumble feta cheese over the vegetables.",
      "3. In a small bowl, whisk together olive oil, red wine vinegar, dried oregano, salt, and pepper to make the dressing.",
      "4. Drizzle the dressing over the salad and toss to combine.",
      "5. Serve the Greek Salad immediately as a refreshing side dish.",
    ],
    ingredients: [
      "cucumbers",
      "tomatoes",
      "kalamata olives",
      "red onions",
      "feta cheese",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "18",
    liked: false,
    avatar: "SK",
    title: "Greek Salad",
    subheader: "January 15, 2023",
    image: require("./Images/greek-salad.jpg"),
    description:
      "Greek Salad is a refreshing salad made with cucumbers, tomatoes, olives, red onions, and feta cheese, drizzled with a Greek vinaigrette.",
    procedure: [
      "1. In a large salad bowl, combine sliced cucumbers, diced tomatoes, kalamata olives, and thinly sliced red onions.",
      "2. Crumble feta cheese over the vegetables.",
      "3. In a small bowl, whisk together olive oil, red wine vinegar, dried oregano, salt, and pepper to make the dressing.",
      "4. Drizzle the dressing over the salad and toss to combine.",
      "5. Serve the Greek Salad immediately as a refreshing side dish.",
    ],
    ingredients: [
      "cucumbers",
      "tomatoes",
      "kalamata olives",
      "red onions",
      "feta cheese",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "19",
    liked: false,
    avatar: "SK",
    title: "Greek Salad",
    subheader: "January 15, 2023",
    image: require("./Images/greek-salad.jpg"),
    description:
      "Greek Salad is a refreshing salad made with cucumbers, tomatoes, olives, red onions, and feta cheese, drizzled with a Greek vinaigrette.",
    procedure: [
      "1. In a large salad bowl, combine sliced cucumbers, diced tomatoes, kalamata olives, and thinly sliced red onions.",
      "2. Crumble feta cheese over the vegetables.",
      "3. In a small bowl, whisk together olive oil, red wine vinegar, dried oregano, salt, and pepper to make the dressing.",
      "4. Drizzle the dressing over the salad and toss to combine.",
      "5. Serve the Greek Salad immediately as a refreshing side dish.",
    ],
    ingredients: [
      "cucumbers",
      "tomatoes",
      "kalamata olives",
      "red onions",
      "feta cheese",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
  {
    id: "20",
    liked: false,
    avatar: "SK",
    title: "Greek Salad",
    subheader: "January 15, 2023",
    image: require("./Images/greek-salad.jpg"),
    description:
      "Greek Salad is a refreshing salad made with cucumbers, tomatoes, olives, red onions, and feta cheese, drizzled with a Greek vinaigrette.",
    procedure: [
      "1. In a large salad bowl, combine sliced cucumbers, diced tomatoes, kalamata olives, and thinly sliced red onions.",
      "2. Crumble feta cheese over the vegetables.",
      "3. In a small bowl, whisk together olive oil, red wine vinegar, dried oregano, salt, and pepper to make the dressing.",
      "4. Drizzle the dressing over the salad and toss to combine.",
      "5. Serve the Greek Salad immediately as a refreshing side dish.",
    ],
    ingredients: [
      "cucumbers",
      "tomatoes",
      "kalamata olives",
      "red onions",
      "feta cheese",
    ],
    comments: ["Very Delicious", "Okay Okay", "Vahh Vahh"],
  },
];

export const initialFieldValues = {
  id: "",
  liked: false,
  recipeName: "",
  avatar: "",
  title: "",
  subheader: "",
  image: "",
  description: "",
  procedure: [],
};

export const shareIcons = [
  {
    icon: <WhatsAppIcon fontSize="large" />,
    name: "WhatsApp",
    url: "whatsapp://send?text= Please Visit https://siddarthinme1.github.io/Monster/",
  },
  {
    icon: <TwitterIcon fontSize="large" />,
    name: "Twitter",
    url: "https://twitter.com",
  },
  {
    icon: <FacebookIcon fontSize="large" />,
    name: "Facebook",
    url: "https://facebook.com",
  },
  {
    icon: <InstagramIcon fontSize="large" />,
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    icon: <GitHubIcon fontSize="large" />,
    name: "Github",
    url: "https://github.com",
  },
];
