import { TaskType, HumanTaskDef } from "../types"

export const humanTask = (taskReferenceName:string): HumanTaskDef => ({
    name: taskReferenceName,
    taskReferenceName,
    type: TaskType.HUMAN
})
