# DunkWatchAPI

DunkWatchAPI is a CLI tool for checking current NBA game scores, player stats, and team information using the [Ball Don't Lie API](https://www.balldontlie.io/#introduction). This tool is still in early development, more to come soon.

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

3. Create a `.env` file in the root directory and add your API key:
    ```env
    API_KEY=your_api_key_here
    ```

## Usage

### Fetch Current Games

Fetch player stats for a specified date range:

```javascript
const DunkWatchAPI = require('./dunkWatchAPI');
const dunkWatchAPI = new DunkWatchAPI(process.env.API_KEY);

// By default the start_date and end_date are set to today's date (EST)
dunkWatchAPI.fetchGames();
