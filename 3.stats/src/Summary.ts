import { WinAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MathData";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

    static winsAnalysisWithHtmlReport(team: string) {
        return new Summary(
            new WinAnalysis(team),
            new HtmlReport()
        )
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output)
    }
}

