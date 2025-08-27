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

const tromvn = new Player("Tromvn",1)
tromvn.gainExp(105)
tromvn.gainExp(195)
