const whatsMyAge = (): number => {
  return Math.floor(Math.random()*120 + 1);
};

console.log(`I am ${whatsMyAge()} years old today!`);



function repeatSyllableSong(syllable: string, repeatNumber: number): void {
  let song: string = '';
  for (let i = 0; i <= repeatNumber ; i++) {
    song += syllable; 
  } 
  console.log(song);
}

repeatSyllableSong('la', 4);