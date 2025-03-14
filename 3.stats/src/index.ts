import { WinAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

// Create an object that satisfies the 'DataReader' Interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader, and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load()

// const summary = new Summary(
//     new WinAnalysis('Man United'),
//     new ConsoleReport()
// );

const summary = new Summary(
    new WinAnalysis('Man United'),
    new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);