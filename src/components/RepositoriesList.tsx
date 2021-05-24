import React, { useState, FormEvent, ChangeEvent } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
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
