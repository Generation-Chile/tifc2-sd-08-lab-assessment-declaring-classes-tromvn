export class Player {
  constructor(name,level) {
    this.name = name;
    this.level = level;
    this.exp = 0
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  
  levelUp() {
      this.level += 1;
      console.log(`${this.name} has reached level ${this.level}!`);
  }

  gainExp(points) {
    this.exp += points;
    const expNeeded = this.level * 100;
    
    if (this.exp >= expNeeded) {
      this.exp -= expNeeded;
      this.levelUp();
    }

    console.log(`Experience +${points}exp\nCurrent: ${this.exp}/${expNeeded}`);
  }
}

class Party {
  constructor(){
    this.player = []
  }

  partyInfo() {
    console.log(this.player)
  }

  addPlayer(player) {
    for (let i=0;i<player.length;i++) {
      let name = player[i];
      this.player.push(name);
    }
  }

  removePlayer(playerName) {
    let removePlayer = this.player.indexOf(playerName);
    if (removePlayer > -1) {
      this.player.splice(removePlayer,1);
    }
  }
}

const player1 = new Player("Tromvn",1);
const player2 = new Player("Mati",1);
const player3 = new Player("Vale",1);

const driada = new Party();

driada.addPlayer([player1,player3]) // Están tromvn y vale
driada.partyInfo()

driada.removePlayer(player1) // queda vale
driada.partyInfo()

driada.addPlayer([player2]) // ahora mati y vale
driada.partyInfo()