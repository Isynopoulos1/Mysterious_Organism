// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  const result =  dnaBases[Math.floor(Math.random() * 4)];
  return result
  
};

returnRandBase()
// console.log('BASE',returnRandBase())

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
mockUpStrand()
// console.log('RANDOM DNA',mockUpStrand())

const newStrand = mockUpStrand();

//pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.
const pAequorFactory = (numParam, basesParam , pAequor)=>{

  return {
    specimenNum: numParam,
    dna: basesParam,
    compare: pAequor,
    mutate() {
      console.log('OBJECT', this.dna)
      return 
    },
    compareDNA() {
      console.log('COMPARE', this.compare)
      return 
    }
  }

}
const newDna = pAequorFactory(1, newStrand);

newDna.mutate('cacaDNA');
// const newMutation = pAequorFactory(1, newStrand);
// newMutation.mutate();
// console.log(newMutation === newStrand[0])




