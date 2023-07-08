import { HumanTaskDef, TaskType } from "../types"
import { nameTaskNameGenerator } from "./common"

export const generateHumanTask = (
    overrides: Partial<HumanTaskDef> = {}
): HumanTaskDef => ({
    ...nameTaskNameGenerator("human"),
    ...overrides,
    type: TaskType.HUMAN
})
