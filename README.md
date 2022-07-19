Note: This project is a part of Online Hackathon https://hackbenchers.hackerearth.com/

# A Game Searching portal

Searching Games was never so easy and interactive, with this app you just need to search and go..

## Prerequisites

 - A modern browser
 - Node Installed
 - Git (Optional)

## Getting Started 

1. Clone the directory using git
```sh
$ git clone https://github.com/skbro/Games-Arena.git
```
or, Just download the directory as a zip file
2. Install all required Dependencies
```sh
$ npm install
```
3. Start node server 
```sh
$ node server.js
```
4. Go to localhost:3000

## Features
This section will walk you through the navigation in the webpage

### Fixed nav

The first thing that opens up is a navbar which is fixed on top, it contains a search bar and a link 'Explore Games'

#### Search box 

1. Enter the game you want to search( minimum characters: 3 ) and press enter or click the search icon
2. Use autocomplete feature if required else continue

#### Explore Games

 - After searching click 'EXPLORE GAMES' to jump to games where you will find games along with filters

###  Filters

 - The filter section contains many dropdown buttons with differnet functionality

#### RESET filter

 - Enter this button to reset every filter or search result

#### Filter By 

1. You can filter the data by clicking all you want:
	Based on Rating
	Based on Platform
	Based on Genre
	Based on Editor's choice
2. Once done click the filter Icon to display results
3. Also, you can use search box but it will show you results on the basis of filtered data
4. You can always reset filter 

### Games 

This section consists of games shown using css cards:

1. Firstly, the card contains information about Genre(using icon and text below it)
2. Then a star is made on right if it is editor's choice
3. Then it consists Game name, Ratings in Star, Ratings in Number, Platform, and lastly Release year


## End

Enjoy Exploring Games!!! 