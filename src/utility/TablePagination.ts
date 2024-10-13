class TablePaginationUtils {
    static handlePagination = (
        mode: string,
        tableData: any[] | null | undefined,
        paginationTableList: { start: number; end: number },
        setPaginationTableListInbound: (val: { start: number; end: number }) => void
    ) => {
        if (tableData == null) {
            return;
        }
        if (
            (paginationTableList.start + 15 > tableData?.length && mode === "right") ||
            (paginationTableList.start - 15 < 0 && mode === "left")
        ) {
            return;
        }

        const newPagination = {
            start: paginationTableList.start + (mode === "right" ? 15 : -15),
            end: paginationTableList.end + (mode === "right" ? 15 : -15),
        };

        setPaginationTableListInbound(newPagination);
    };
}

export default TablePaginationUtils;
