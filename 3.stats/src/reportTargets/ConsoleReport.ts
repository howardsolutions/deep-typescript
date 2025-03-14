import { OutputTarget } from "../Summary";

class ConsoleReport implements OutputTarget {
    print(report: string): void {
        console.log(report)
    }
}