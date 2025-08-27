export class Player {
  constructor(name,level) {
    this.name = name;
    this.level = level;
    this.exp = 0
    this.inventory = {}
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

  addItem(name,amount) {
    if (this.inventory[name]) {
      this.inventory[name] += amount
    } else {
      this.inventory[name] = amount
    }
  }

  removeItem(name,amount) {
    if (!(this.inventory[name])) {
      console.log(`No tienes ${name}`);
      return false;
    } 

    if (this.inventory[name] < amount) {
      console.log(`Cantidad insuficiente de ${name}`);
      return false;

    } 
    
    this.inventory[name] -= amount;

    if (this.inventory[name] === 0) {
      delete this.inventory[name];
    } 
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

const player1 = new Player("tromvn",1);
const driada = new Party();

// driada.addPlayer([player1]);
player1.addItem("poción",5);
player1.addItem("fruta",3);
console.log(player1)

player1.removeItem("poción",2);
console.log(player1)