# Yum Trucks

<img width="500" alt="YumTruckLogo" src="https://gcdnb.pbrd.co/images/pj4OuJUAmLTl.png?o=1">

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

### Screenshots (Desktop)

![All Trucks Page (Index)](https://user-images.githubusercontent.com/96318127/188982622-8a5dc85b-99b1-4bdb-bee5-4656ed61410d.png)
![Show Truck Part 1](https://user-images.githubusercontent.com/96318127/188990872-096952d3-482b-4bf8-9b38-26dc1ca93561.png)
![Show Truck Part 2 (Reviews)](https://user-images.githubusercontent.com/96318127/188983403-f5363165-f7d9-4158-9ad8-34ec44c7258a.png)
![Add A Truck Page (Add)](https://user-images.githubusercontent.com/96318127/188983044-7e6e02b8-c093-4e41-a1da-59b00b9c8ea5.png)
![Find A Truck (Map)](https://user-images.githubusercontent.com/96318127/188984213-81c6598f-284f-4bd5-8f92-732ebdbaa020.png)
![About](https://user-images.githubusercontent.com/96318127/188984033-e0b29d39-9848-4132-b0f5-73a2e8d2f5aa.png)

### Screenshots (Mobile)

![All Trucks (Index)](https://user-images.githubusercontent.com/96318127/188989113-42163761-a105-47ba-89b1-927414d78b00.png)
![Show Truck Info](https://user-images.githubusercontent.com/96318127/188988012-d033525f-a9ea-43c0-8c52-6bf7fd340fb8.png)
![Show Reviews](https://user-images.githubusercontent.com/96318127/188988916-5e9a9961-1d67-4c95-a653-413069a6415e.png)
![Find A Truck (Map)](https://user-images.githubusercontent.com/96318127/188988586-728819bb-3eee-44cf-b588-1a76439d9849.png)
![About](https://user-images.githubusercontent.com/96318127/188987639-45701093-cb9d-4e82-b386-a0677e3d2490.png)
