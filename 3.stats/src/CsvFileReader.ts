import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./enums";

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader {
    data: MatchData[] = []
    abstract mapRow(row: string[]): MatchData;

    constructor(public filename: string) { }

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map(this.mapRow)
    }
}