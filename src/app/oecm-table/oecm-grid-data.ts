import { GridDataResult } from "@progress/kendo-angular-grid";

export class OecmGridData<T = any> {
    public gridData: GridDataResult = {
        data: [ ],
        total: 0
    }
    private originalData: T[] = [ ]
    public currentPage: number = 1
    public pageCount: number = 1

    constructor(private pageSize: number) { }

    public setData(data: T[]): void {
        this.pageCount = Math.ceil(data.length / this.pageSize)
        this.originalData = data
        this.toFirstPage()
    }

    public nextPage(): void {
        this.currentPage += 1
        this.setGridData()
    }

    public previousPage(): void {
        if (this.currentPage > 1) {
            this.currentPage -= 1
            this.setGridData()
        }
    }

    public toFirstPage(): void {
        this.currentPage = 1
        this.setGridData()
    }

    public toLastPage(): void {
        this.currentPage = this.pageCount
        this.setGridData()
    }

    private setGridData(): void {
        const start: number = this.pageSize * (this.currentPage - 1)
        this.gridData = {
            data: this.originalData.slice(start, start + this.pageSize),
            total: this.originalData.length
        }
    }
}
