<template>
  <div>
    <h1 class="title">Tic Tac Toe</h1>
    <div class="info">
      <div>
        <h4>Player 1:</h4>
        <p>{{ player1Wins }}</p>
      </div>
      <div>
        <button v-on:click="togglePlayer" v-bind:disabled="gameStart">Toggle First Player</button>
        <button v-on:click="reset">Reset</button>
      </div>
      <div>
        <h3>Player {{ playersTurn }}'s Turn</h3>
      </div>
      <div>
        <h4>Player 2:</h4>
        <p>{{ player2Wins }}</p>
      </div>
    </div>
    <div>
      <h1 class="message">{{ gameMessage }}</h1>
    </div>
    <div class="game">
      <button v-on:click="mark(1)" v-bind:disabled="disable1" class="board" id="top-left">{{ boardSpot1 }}</button>
      <button v-on:click="mark(2)" v-bind:disabled="disable2" class="board" id="top-mid">{{ boardSpot2 }}</button>
      <button v-on:click="mark(3)" v-bind:disabled="disable3" class="board" id="top-right">{{ boardSpot3 }}</button>
      <button v-on:click="mark(4)" v-bind:disabled="disable4" class="board" id="mid-left">{{ boardSpot4 }}</button>
      <button v-on:click="mark(5)" v-bind:disabled="disable5" class="board" id="mid-mid">{{ boardSpot5 }}</button>
      <button v-on:click="mark(6)" v-bind:disabled="disable6" class="board" id="mid-right">{{ boardSpot6 }}</button>
      <button v-on:click="mark(7)" v-bind:disabled="disable7" class="board" id="bot-left">{{ boardSpot7 }}</button>
      <button v-on:click="mark(8)" v-bind:disabled="disable8" class="board" id="bot-mid">{{ boardSpot8 }}</button>
      <button v-on:click="mark(9)" v-bind:disabled="disable9" class="board" id="bot-right">{{ boardSpot9 }}</button>
    </div>
    <footer>
      <a href="https://github.com/yakcmnoslen/creative3">GitHub</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "TicTacToe",
    data () {
      return {
        playersTurn: 1,
        player1Wins: 0,
        player2Wins: 0,
        player1guess: [],
        player2guess: [],
        boardSpot1: '',
        boardSpot2: '',
        boardSpot3: '',
        boardSpot4: '',
        boardSpot5: '',
        boardSpot6: '',
        boardSpot7: '',
        boardSpot8: '',
        boardSpot9: '',
        disable1: false,
        disable2: false,
        disable3: false,
        disable4: false,
        disable5: false,
        disable6: false,
        disable7: false,
        disable8: false,
        disable9: false,
        gameStart: false,
        gameTurns: 0,
        gameMessage: '',
        winConditions: [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]],
      }
    },
    methods: {
      reset: function () {
          this.player1guess = [];
          this.player2guess = [];
          this.boardSpot1 = '';
          this.boardSpot2 = '';
          this.boardSpot3 = '';
          this.boardSpot4 = '';
          this.boardSpot5 = '';
          this.boardSpot6 = '';
          this.boardSpot7 = '';
          this.boardSpot8 = '';
          this.boardSpot9 = '';
          this.disable1 = false;
          this.disable2 = false;
          this.disable3 = false;
          this.disable4 = false;
          this.disable5 = false;
          this.disable6 = false;
          this.disable7 = false;
          this.disable8 = false;
          this.disable9 = false;
          this.gameStart = false;
          this.gameTurns = 0;
          this.gameMessage = '';
      },
      togglePlayer: function () {
        if (this.playersTurn === 1) {
          this.playersTurn = 2;
        }
        else {
          this.playersTurn = 1;
        }
      },
      mark: function (value) {
        let temp = "";
        this.gameStart = true;
        if (this.playersTurn === 1) {
          temp = "X";
          this.player1guess.push(value);
        }
        else {
          temp = "O";
          this.player2guess.push(value);
        }
        switch (value) {
          case 1:
            this.boardSpot1 = temp;
            this.disable1 = true;
            break;
          case 2:
            this.boardSpot2 = temp;
            this.disable2 = true;
            break;
          case 3:
            this.boardSpot3 = temp;
            this.disable3 = true;
            break;
          case 4:
            this.boardSpot4 = temp;
            this.disable4 = true;
            break;
          case 5:
            this.boardSpot5 = temp;
            this.disable5 = true;
            break;
          case 6:
            this.boardSpot6 = temp;
            this.disable6 = true;
            break;
          case 7:
            this.boardSpot7 = temp;
            this.disable7 = true;
            break;
          case 8:
            this.boardSpot8 = temp;
            this.disable8 = true;
            break;
          case 9:
            this.boardSpot9 = temp;
            this.disable9 = true;
            break;
        }
        this.gameTurns++;
        this.draw();
        this.win(value);
        this.togglePlayer();
      },
      draw: function () {
        if (this.gameTurns === 9) {
          this.gameMessage = "DRAW";
        }
      },
      win: function(value) {
        let checkValue = '';
        let player = 0;
        let playerArray = '';
        if (this.playersTurn === 1) {
          checkValue = 'X';
          player = 1;
        }
        else {
          checkValue = 'O';
          player = 2;
        }
        for (let i = 0; i < this.winConditions.length; i++) {
          if (this.winConditions[i].indexOf(value) !== -1) {
            let inRow = 0;
            for (let j = 0; j < this.winConditions[i].length; j++) {
              if (player === 1) {
                playerArray = this.player1guess;
              }
              else {
                playerArray = this.player2guess;
              }
              if (playerArray.indexOf(this.winConditions[i][j]) === -1) {
                break;
              }
              inRow++;
            }
            if (inRow === 3) {
              if (player === 1) {
                this.gameMessage = 'Player 1 Wins!';
                this.player1Wins++;
                this.disableAll();
              }
              else {
                this.gameMessage = 'Player 2 Wins!';
                this.player2Wins++;
                this.disableAll();
              }
            }
          }
        }
      },
      disableAll: function () {
        this.disable1 = true;
        this.disable2 = true;
        this.disable3 = true;
        this.disable4 = true;
        this.disable5 = true;
        this.disable6 = true;
        this.disable7 = true;
        this.disable8 = true;
        this.disable9 = true;
      }
    }
  }
</script>

<style scoped>
  p {
    display: inline;
  }
  h3 {
    display: inline;
  }
  h4 {
    display: inline;
  }
  div {
    color: #000000;
  }
  .message {
    color: #ff0000;
    font-size: 100px;
  }
  .board {
    font-size: 200px;
    background-color: #ffffff;
    border: none;
  }
  .board:disabled {
    color: #000000;
  }
  .board:focus {
    outline: none;
  }
  .title {
    margin: 1%;
  }
  .game {
    width: 800px;
    height: 800px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 60%;
    margin: auto;
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 2%;
  }
  #top-left {
    border-right-color: #000000;
    border-right-style: solid;
    border-right-width: 2px;
    border-bottom-color: #000000;
    border-bottom-style: solid;
    border-bottom-width: 2px;
  }
  #top-mid {
    border-right-color: #000000;
    border-right-style: solid;
    border-right-width: 2px;
    border-bottom-color: #000000;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-left-color: #000000;
    border-left-style: solid;
    border-left-width: 2px;
  }
  #top-right {
    border-left-color: #000000;
    border-left-style: solid;
    border-left-width: 2px;
    border-bottom-color: #000000;
    border-bottom-style: solid;
    border-bottom-width: 2px;
  }
  #mid-left {
    border-right-color: #000000;
    border-right-style: solid;
    border-right-width: 2px;
    border-top-color: #000000;
    border-top-style: solid;
    border-top-width: 2px;
    border-bottom-color: #000000;
    border-bottom-style: solid;
    border-bottom-width: 2px;
  }
  #mid-mid {
    border-color: #000000;
    border-style: solid;
    border-width: 2px;
  }
  #mid-right {
    border-left-color: #000000;
    border-left-style: solid;
    border-left-width: 2px;
    border-top-color: #000000;
    border-top-style: solid;
    border-top-width: 2px;
    border-bottom-color: #000000;
    border-bottom-style: solid;
    border-bottom-width: 2px;
  }
  #bot-left {
    border-right-color: #000000;
    border-right-style: solid;
    border-right-width: 2px;
    border-top-color: #000000;
    border-top-style: solid;
    border-top-width: 2px;
  }
  #bot-mid {
    border-right-color: #000000;
    border-right-style: solid;
    border-right-width: 2px;
    border-left-color: #000000;
    border-left-style: solid;
    border-left-width: 2px;
    border-top-color: #000000;
    border-top-style: solid;
    border-top-width: 2px;
  }
  #bot-right {
    border-left-color: #000000;
    border-left-style: solid;
    border-left-width: 2px;
    border-top-color: #000000;
    border-top-style: solid;
    border-top-width: 2px;
  }

  footer {
    width: 95%;
    bottom: 1%;
    position: fixed;
    margin-top: 50%;
  }

  .footer-filler {
    height: 1%;
  }
</style>
