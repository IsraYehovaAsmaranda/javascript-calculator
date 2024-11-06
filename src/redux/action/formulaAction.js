import { DISPLAY_FORMULA } from "../const"

const displayFormula = (formula) => {
    return {
        type: DISPLAY_FORMULA,
        formula: formula,
    }
}

export default displayFormula;