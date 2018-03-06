<template>
  <div>
    <h1 class="title">Tic Tac Toe</h1>
    <div class="info">
      <div>
        <h4>Player 1:</h4>
        <p>{{ player1Wins }}</p>
      </div>
      <div>
        <button v-on:click="togglePlayer">Toggle First Player</button>
      </div>
      <div>
        <h3>Player {{ playersTurn }}'s Turn</h3>
      </div>
      <div>
        <h4>Player 2:</h4>
        <p>{{ player2Wins }}</p>
      </div>
    </div>
    <div class="game">
      <div v-on:click="mark(1)" class="board" id="top-left">{{ boardSpot1 }}</div>
      <div v-on:click="mark(2)" class="board" id="top-mid">{{ boardSpot2 }}</div>
      <div v-on:click="mark(3)" class="board" id="top-right">{{ boardSpot3 }}</div>
      <div v-on:click="mark(4)" class="board" id="mid-left">{{ boardSpot4 }}</div>
      <div v-on:click="mark(5)" class="board" id="mid-mid">{{ boardSpot5 }}</div>
      <div v-on:click="mark(6)" class="board" id="mid-right">{{ boardSpot6 }}</div>
      <div v-on:click="mark(7)" class="board" id="bot-left">{{ boardSpot7 }}</div>
      <div v-on:click="mark(8)" class="board" id="bot-mid">{{ boardSpot8 }}</div>
      <div v-on:click="mark(9)" class="board" id="bot-right">{{ boardSpot9 }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TicTacToe",
    data() {
      return {
        player1Games: 0,
        player2Games: 0,
        playersTurn: 1,
        player1Wins: 0,
        player2Wins: 0,
        boardSpot1: '',
        boardSpot2: '',
        boardSpot3: '',
        boardSpot4: '',
        boardSpot5: '',
        boardSpot6: '',
        boardSpot7: '',
        boardSpot8: '',
        boardSpot9: '',
      }
    },
    methods: {
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
        if (this.playersTurn === 1) {
          temp = x;
          this.togglePlayer();
        }
        else {
          temp = 0;
          this.togglePlayer();
        }
        switch (value) {
          case 1:
            this.boardSpot1 = temp;
          case 2:
            this.boardSpot2 = temp;
            break;
          case 3:
            this.boardSpot3 = temp;
            break;
          case 4:
            this.boardSpot4 = temp;
            break;

          case 5:
            this.boardSpot5 = temp;
            break;

          case 6:
            this.boardSpot6 = temp;
            break;

          case 7:
            this.boardSpot7 = temp;
            break;

          case 8:
            this.boardSpot8 = temp;
            break;

          case 9:
            this.boardSpot9 = temp;
            break;

        }
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
  .board {
    font-size: 200px;
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
</style>
