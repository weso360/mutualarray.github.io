// Write your code below
const bobsFollowers = ['sam', 'katie', 'ella', 'daniela'];
const tinasFollowers = ['dave', 'katie', 'daniela'];
const mutualFollowers =[];

for(let a = 0; a < bobsFollowers.length; a++){
for(let b = 0; b < tinasFollowers.length; b++){

  if(bobsFollowers[a] === tinasFollowers[b]){
    mutualFollowers.push(tinasFollowers[b]);
  }
}
}
console.log(mutualFollowers)