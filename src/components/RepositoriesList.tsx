import React, { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTerm(event.target.value)
          }
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
