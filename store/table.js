export default {
    namespaced : true,
    state : {
        tableData: [],
        tableRefreshID : undefined,
    },

    getters : {
        getTableData:(state) => state.tableData,
        getIntervalID:(state) => state.tableRefreshID,
    },

    mutations : {
        addTableItem(state,{dateTime, id, num})
        {
            state.tableData.push({date:dateTime,UserID: id,diff:num});
        },
        clearTableItems(state)
        {
            state.tableData.splice(0);
        },
        setIntervalID(state, id)
        {
            state.tableRefreshID = id;
        },
        clearIntervalID()
        {
            state.tableRefreshID = undefined;
        }
    },
    

}