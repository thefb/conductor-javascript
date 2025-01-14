import { TaskType, JsonJQTransformTaskDef } from "../types";

export const jsonJqTask = (
  taskReferenceName: string,
  script: string
): JsonJQTransformTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  type: TaskType.JSON_JQ_TRANSFORM,
  inputParameters: {
    queryExpression: script,
  },
});
