import { MatchResult } from './enums';
import { MatchReader } from './inheritance abstract class/MatchReader';

const csvFileReader = new MatchReader('football.csv');
csvFileReader.read();

let manUnitedWins = 0;

for (let match of csvFileReader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);
