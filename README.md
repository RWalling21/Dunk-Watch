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

Dunk watch is a simple CLI tool that displays current NBA scores or upcoming games.

### Print current scoreboard

Print the current score

```bash
> dunk

---------------------------------------
| Mavericks - 60 vs Timberwolves - 52 |
---------------------------------------

```

Print the current score with all info
```bash
> dunk

---------------------------------------
| Mavericks - 60 vs Timberwolves - 52 |
| 2nd period - Series: DAL leads 2-0  |
---------------------------------------

```