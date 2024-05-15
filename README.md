# DunkWatchAPI

Dunk Watch provides real time NBA Scores and team standings directly in your command line interface. 
Dunk Watch prides itself on not relying on expensive external API's while still delivering game stats in real time. 

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/RWalling21/Dunk-Watch.git
    cd Dunk-Watch
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

Simple as that! 

## Usage

Currently Dunk Watch is in early alpha and acts as an API. Soon Dunk Watch will be updated as a easy to use command line tool. Please check back for updates! 

### Fetch Current Games

Fetch games today with real time scores

```javascript
const DunkWatchAPI = require('./dunkWatch.js');
const dunkWatchAPI = new DunkWatchAPI();

dunkWatchAPI.currentScore();
