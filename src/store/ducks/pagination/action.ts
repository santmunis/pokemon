import {PaginitionTypes} from './types'


export const handleChange = (quantPerPage:number) => {
    return {
        type: PaginitionTypes.HANDLE_CHANGE,
        quantPerPage
    }
}

export const handleClick = (currentPage:number) => {
    return {
        type: PaginitionTypes.HANDLE_CLICK,
        currentPage
    }
}