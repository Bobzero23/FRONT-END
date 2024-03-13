import React, { useEffect } from "react";
import TaskCard from "../task/task-card/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../reduxToolkit/TaskSlice";

const TaskList = () => {
  const { task } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks({}));
  }, []);

  console.log("task: ", task);

  return (
    <div className="w-[67vw]">
      <div className="space-y-3">
        {[1, 1, 1, 1].map((item) => (
          <TaskCard />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
