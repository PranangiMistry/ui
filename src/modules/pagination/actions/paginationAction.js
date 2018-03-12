import { GET_PAGE_DATA } from '../../../constants';

export const getPage = (activePage,allData) => dispatch=>{
    let rows = allData.length
    let totalPages=0,first = 0,last = 6,data = []

    if (allData.length % 7 != 0)
        totalPages = (Math.floor(rows / 7)) + 1
    else
        totalPages = Math.floor(rows / 7)
        
    
    if (activePage != 1) {
        if (activePage === totalPages) {
            last = last + (7 * (activePage - 1))
            first = last - 6
            last = rows - 1

        } else {
            last = last + (7 * (activePage - 1))
            first = last - 6
        }
    } if (activePage == 1) {
        if (rows < 7) {
            first = 0
            last = rows - 1
        }
        else {
            last = 6
            first = 0
        }
    }
    for (let i = first; i <= last; i++) {
        data.push(allData[i])
    }
    dispatch(getPageData(data))

}

export const getPageData = page => ({
    type: GET_PAGE_DATA,
    payload: page
})