import { Fade, Tooltip } from "@mui/material";

const TodoForm = ({ onAdd, text, setText }) => {

  return (
    <section className="rounded-md pt-10 pb-10 px-3 bg-[#a0a0a0] text-center">
      <span className="relative bottom-4 text-white tracking-wider text-4xl select-none font-medium">
        To do List
      </span>
      <form
        className="grid grid-cols-[1fr,auto]"
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(text);
          setText("");
        }}
      >
        <input
          className="w-full text-base lg:text-lg tracking-widest rounded-md bg-white outline-none placeholder:tracking-wider px-3"
          type="search"
          placeholder="Title..."
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
          title="Please write the text"
        >
          <span>
            <button
              type="submit"
              className="font-medium tracking-wide p-1 bg-white rounded-md duration-300 hover:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed w-120 ml-3 outline-none"
              disabled={!text.trim()}
            >
              Add
            </button>
          </span>
        </Tooltip>
      </form>
    </section>
  );
}

export default TodoForm

