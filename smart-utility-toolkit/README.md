# Smart Utility Toolkit

Node.js project built using only core/built-in modules (`process`, `http`, `fs`, `crypto`) — no external packages or frameworks used.

## Structure
calculator.js → CLI calculator (process.argv)
app.js → Demonstrates isEven module reuse
server.js → HTTP server with routing
fileManager.js → File CRUD using fs module
dice.js → Random dice roller using crypto module
execution.js → Console.log execution order demo
modules/isEven.js → Custom module to check even numbers
modules/logger.js → Custom logger with timestamps + colors

## How to Run
node calculator.js add 10 5 # add, subtract, multiply, divide, modulus, power
node app.js # isEven module demo
node server.js # visit localhost:3000, /about, /contact
node fileManager.js # create → read → update → delete
node dice.js # rolls 5 dice, saves to dice-history.txt
node execution.js # execution order demo

## Bonus Features
- Colored terminal output (ANSI codes)
- Timestamped logs via `logger.js`
- Extra calculator operations: modulus, power
- Dice roll history saved to text file

## Author
Siya Singh