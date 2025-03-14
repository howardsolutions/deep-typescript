import { MatchData } from "./MathData";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }
}

