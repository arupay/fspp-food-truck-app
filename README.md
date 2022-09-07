# Food Truck App

<img width="500" alt="YumTruckLogo" src="https://gcdnb.pbrd.co/images/n6OGseS8H1Wl.png">

Food connects us no matter who we are, and the best food in the
world can be found right here in New York City. YumTrucks brings
together foodies and food truck endors to to celebrate the food
trucks they love. Whether is veggie momo, al pastor tacos, or
spicy lamb over rice, you can always find what you're looking
for here at Yum Trucks -- your spot for the best food trucks in
the 5 boroughs.

## Important Links

- [Deployed Api Server](https://yum-trucks.herokuapp.com/)
- [Deployed FrontEnd](https://yum-trucks.netlify.app/)
- [Trello Board](https://trello.com/b/DsRA3t2k/truck-app)
- [ERD](https://dbdiagram.io/d/63069ffdf1a9b01b0fd9aa1b)
- [Wireframe]()

## Local Set Up

If you'd like to run the project locally, please read the following stems

### Frontend Setup

Prerequisites are Git and Node.js & Google Maps API Developer Key.

```bash

# clone the repository to your local machine.

git clone git@github.com:arupay/fspp-food-truck-app.git

# navigate to the front-end directory

cd fspp-food-truck-app/front-end

# create a .env file to allow the front-end to access the back-end locally & add a GOOGLE MAPS API KEY for the necessary geocode API calls.

echo "REACT_APP_API_URL=http://localhost:8080" >>.env

echo "REACT_APP_MAP_API_KEY=INSERTKEYHERE">> .env


# install the required node modules

npm install

# start the server

npm start
```

### Backend Setup

Prerequisites are Git, Node.js, and Postgres, & Google Maps API Developer Key.

```bash

# navigate to the back-end directory
cd fspp-food-truck-app/front-end

# create a .env file to access the database locally & add a google maps api key var to the same .env file
echo "PORT=3333\nPG_HOST=localhost\nPG_PORT=5432\nPG_DATABASE=saucesource" >> .env

echo "MAP_API_KEY=INSERTKEYHERE">> .env

# install the required node modules
npm i
npm i -g nodemon

# initialize and seed the database
npm run db:init
npm run db:seed

# start the server
nodemon server.js
```

### Screenshots
