import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="enter your tasks"
          className="input__box"
        ></input>
        <button type="submit" className="input__submit">
          Go
        </button>
      </form>
    </div>
  );
};
