const faker = require('faker');
const fs = require('fs');

const sampleLength = 100;
const possibleFacilities = ['car park', 'pool', 'gym', 'spa'];
const dataDir = './public/data';

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

const facilitiesList = (possibleFacilitiesLength => () => {
  let currentIndex = -1 + Math.floor(Math.random() * (possibleFacilitiesLength + 1));
  const randomList = [];
  while (currentIndex > -1 && currentIndex < possibleFacilitiesLength) {
    randomList.push(possibleFacilities[currentIndex]);
    currentIndex += Math.floor(Math.random() * (possibleFacilitiesLength - 1)) + 1;
  }
  return randomList;
})(possibleFacilities.length);

const data = Array(sampleLength).fill(0).map(() => ({
  name: faker.company.companyName(),
  rating: Math.floor(Math.random() * 5) + 1,
  facilities: facilitiesList(),
}));

fs.writeFileSync(`${dataDir}/test.json`, JSON.stringify(data, null, 2));
console.log(`Test data generated to ${dataDir}/test.json`);
