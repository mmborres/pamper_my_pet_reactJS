# Pamper My Pet

This a one-week-only multi-page ReactJS + RailsAPI group project whose main goal is for the developers to practice ReactJS front-end and calling Axios calls to Rails back-end, and then learn the timing/promise concepts in ReactJS. 

Group Members: Rashida Bengali, Purvi Pandya, and Mabeth Borres (Lead)

### LIVE DEMO

[Pamper My Pet - Version 1](https://mmborres.github.io/pamper-my-pet) 

[Pamper My Pet - Version 2](https://mmborres.github.io/pamper_my_pet_deploy) 

Deployed using [GH Instructions](https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom)

![Home Page](./src/img/screenshots/Screen%20Shot%202019-05-17%20at%202.51.57%20am.png "Home Page")

With the huge variety of pet-oriented content on the web, this "best of" list should give you a better idea of where to find anything from trendy haute couture pet creations to the lowest prices on dog, cat, bird and fish products. **Happy Shopping!**

Simply anyone can view our site and browse through the amazing range of products. However, in order to purchase a product, a new ***User*** has to *Create* and account and an existing one has to *Login*

### Login Page

![Login](./src/img/screenshots/login.png "Login")

### Sign Up Page

![Sign Up](./src/img/screenshots/Screen%20Shot%202019-05-17%20at%202.55.56%20am.png "Sign Up")

### Nav Bar Dropdown to Search Products

*Users* can find their favourite product by filtering either through the ***Navbar Dropdown*** or can visit the ***All Products*** pgae and can filter through the search form.

![Nav Dropdown](./src/img/screenshots/navbarfilter.png "navbar")

![Search Filter](./src/img/screenshots/searchfilter.png "searchfilter")

### Item Page

*Users* may select the quantity of each Product from the dropdown option of the page. The options are dependent on the the availibility of the stock of that particular item.

As you can see here, User can select upto 10 **Quantity** of this particular product which means there are only 10 in **Stock**

![Quantity](./src/img/screenshots/quantity.png "Quantity")

Users then can add products in their **Cart** and once they are done filling their Cart, they can click the Cart Icon in Navbar that will redirect them to the Purchasing Process page or they can click directly on **Buy Now** that will redirect the User to the Purchasing Process page.

![Item](./src/img/screenshots/Screen%20Shot%202019-05-17%20at%202.59.06%20am.png "Item")

### Checkout Page

After clicking *Buy Now* button or *Cart Icon* in Navbar. The User can view the **Order Details**. He may **Edit** the quantity of an item or can also **Remove** the product from the buttons provided according to his convenience.

![Checkout](./src/img/screenshots/Screen%20Shot%202019-05-17%20at%202.59.35%20am.png "Checkout")

### Card Payment

Our secure payment method, allows the User to make Payment with ease. (Note: Simulated Card Payment Only)

![Card Payment](./src/img/screenshots/Screen%20Shot%202019-05-17%20at%203.00.39%20am.png "Card Payment")

### Payment Done

![Payment Done](./src/img/screenshots/Screen%20Shot%202019-05-17%20at%203.01.01%20am.png "Payment Done")

Technologies
-----------------------------------------------------
This E-Commerce web application uses mainly **ReactJS** Front-end and **Rails** Back-end with **PostgreSQL** as database and has been deployed on **Heroku**.

***Pamper My Pet*** has the following MVC (Model View Controller) Structure

![MVC](./src/img/screenshots/mvc.png "MVC")

Each **Model** inherits from *ActiveRecord* that does the following in an object oriented fashion:

* Create tables
* Represent associations between Models
* Perform database operations

#### Major Features:

  * ReactJS for Front-end Components
  * Rails API: JSON endpoint rendering in the Controllers
     * JWT for User Authentication  
     * Stripe API for simulated payments      
  * Windows LocalStorage used in handling Session Data
    * Storing session for current user
    * Storing cart items
  * NPM Packages Applied: Alice Carousel for the Carousel Display in the Home Page, React-Stripe-Elements for the Card Payment
  * `Axios.get` `Axios.post` `Axios.put` Method will save the User's Cart in the database if they Log Out without Purchasing them. Later, if they Login even from some other device, they will be able to view the Cart
  * Gems: BCrypt, JWT, Stripe and Rack-Cors to enable API Endpoint
  * Admin Rights
  * Front-end uses HTML utilising Google Fonts and web-sourced images
  * Styling and animations through CSS, Bootstrap and Favicons

  ![Add](./src/img/screenshots/add.png "Add")

  ![Edit](./src/img/screenshots/admin2.png "Edit")

Wishlist
----------------------------------------------------

  * Implement Discount or Sale options
  * Simulate Delivery System
  * Introduce User Review for *Pamper My Pet* Products
  * Enable Price Filter in Search Bar
  * More Animations
  * Site Responsiveness on Mobile
