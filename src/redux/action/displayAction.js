import { DISPLAY_NUMBER } from "../const"

const displayNumber = (number) => {
    return {
        type: DISPLAY_NUMBER,
        payload: number
    }
}

export default displayNumber;