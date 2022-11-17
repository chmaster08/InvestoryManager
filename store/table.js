export default {
    namespaced : true,
    state : {
        tableData: [],
    },

    getters : {
        getTableData:(state) => state.tableData,
    },

    mutations : {
        addTableItem(state,{dateTime, id, num})
        {
            state.tableData.push({date:dateTime,UserID: id,diff:num});
        }
    },
    

}