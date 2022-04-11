import React from "react";
import { ReactComponent as ActionIcon } from "../../Assets/Images/action.svg";
import { ReactComponent as DeleteIcon } from "../../Assets/Images/delete.svg";
import MButton from "../MButton/MButton";
import "./TypeList.css";

const TypeList = ({ jobTypes, deleteJobType, isDisabled }) => {
	return (
		<div className="typeList block">
			<h1>Job type</h1>
			<hr />
			<div className="static default">
				<div className="item">№</div>
				<div className="item">Label</div>
				<div className="item">
					<ActionIcon className="item action action__btn" />
				</div>
			</div>
			{jobTypes &&
				jobTypes?.map((jobType) => (
					<div className="default" key={jobType?.id}>
						<div className="item">{jobType?.id}</div>
						<div className="item">{jobType?.label} </div>
						<MButton
							onClick={() => {
								deleteJobType(jobType?.id)
							}}
							BClass="item action action__delete"
							BType={isDisabled ? "loading" : "light"}
							BIcon={<DeleteIcon />}
						/>
					</div>
				))}
		</div>
	);
};

export default TypeList;
