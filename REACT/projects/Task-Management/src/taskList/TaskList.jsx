import React, { useEffect } from "react";
import TaskCard from "../task/task-card/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, fetchUsersTasks } from "../reduxToolkit/TaskSlice";
import { useLocation } from "react-router-dom";

const TaskList = () => {
  const { task, auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterValue = queryParams.get("filter");

  useEffect(() => {
    if (auth.user?.role === "ROLE_ADMIN") {
      dispatch(fetchTasks({ status: filterValue }));
    } else {
      dispatch(fetchUsersTasks({ status: filterValue }));
    }
  }, [filterValue]);

  return (
    <div className="w-[67vw]">
      <div className="space-y-3">
        {auth.user.role === "ROLE_ADMIN"
          ? task.tasks.map((item) => <TaskCard item={item} />)
          : task.usersTask.map((item) => <TaskCard item={item} />)}
      </div>
    </div>
  );
};

export default TaskList;
