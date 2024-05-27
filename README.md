# DunkWatchAPI

Dunk Watch provides real time NBA Scores and team standings directly in your command line interface. 
Dunk Watch prides itself on not relying on expensive external API's while still delivering reliable real time game stats . 

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
> dunk -a

---------------------------------------
| Mavericks - 60 vs Timberwolves - 52 |
| 2nd period - Series: DAL leads 2-0  |
---------------------------------------

```

## Motivation

As an avid NBA fan and a developer, I often found myself wanting to watch the night's NBA game and code at the same time. However, the limitation of a single monitor made it challenging to keep track of game scores without interrupting my workflow. Dunkwatch was conceived as a solution to this problem, providing real-time NBA game statistics directly in the command line.

Dunkwatch may appear as a simple application, but it embodies the principle famously stated by Dolly Parton, "It costs a lot to look this cheap." The application underwent significant refinement and optimization to achieve its current state of simplicity and efficiency.

Initially, Dunkwatch was built as a wrapper around an unreliable API that provided scores with a ten-minute delay and imposed strict rate limits of thirty requests per hour. This limitation was unacceptable for real-time updates. To overcome this, I explored alternative methods and eventually succeeded in extracting real-time scores directly from the NBA website.

The early versions of Dunkwatch were hampered by slow performance and inefficient data retrieval methods. However, through persistent learning and experimentation, I optimized the data-fetching process to achieve real-time updates. The initial implementation was based on a fragile skeleton, heavily reliant on long if-else chains.

Recognizing the need for a more robust and maintainable codebase, I refactored Dunkwatch using Object-Oriented Programming (OOP) SOLID design principles.

- **Single Responsibility Principle (SRP):** Subsystems were developed to break coupling between different functions (printing scores, formatting data, fetching data).
- **Open-Closed Principle (OCP):** The system is designed to be extendable, allowing new features to be developed without impacting any other subsystems.

The result of these efforts is Dunkwatch, a deceptively simple yet highly refined application. I'm a student at the Rochester Institute of Technology, but I'm always interested in talking about potential job opportunities. Please feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/rwalling/).
