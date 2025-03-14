import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./enums";
import { MatchData } from "./MathData";
import { dateStringToDate } from "./utils";

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    matches: MatchData[] = []

    constructor(public reader: DataReader) { }

    static fromCsv(fileName: string): MatchReader {
        return new MatchReader(new CsvFileReader(fileName))
    }

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
            ]
        })
    }
}