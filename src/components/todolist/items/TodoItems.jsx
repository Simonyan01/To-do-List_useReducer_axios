import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpShortWide } from "@fortawesome/free-solid-svg-icons";
import { Button, Slide } from "@mui/material";
import TodoItem from "./TodoItem";


const TodoItems = ({ todos, onDelete, onChange }) => {
  const [isShowButton, setIsShowButton] = useState(false);
  const ref = useRef(null)

  const startingPosition = () => (
    (ref.current) && (ref.current.scrollTop = 0)
  )

  const checkScroll = () => {
    if (ref.current) {
      setIsShowButton(ref.current.scrollTop > 80);
    }
  };

  return (
    <section className="relative">
      <div ref={ref}
        onScroll={checkScroll}
        className="overflow-y-auto h-60 scroll-smooth">
        {todos?.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              todo={todo}
              onChange={onChange}
              onDelete={onDelete}
              i={i}
            />
          );
        })}
      </div>
      <div className={`absolute transition-all bottom-2 right-24 ${isShowButton ? 'opacity-100' : 'opacity-0'}`}>
        <Slide
          direction="up"
          in={isShowButton}
          container={ref.current}
        >
          <Button variant="contained"
            onClick={startingPosition}
            sx={{
              fontSize: "20px",
              borderRadius: "50%",
              padding: "17px 0",
            }}>
            <FontAwesomeIcon icon={faArrowUpShortWide} />
          </Button>
        </Slide>
      </div>
    </section>
  );
}

export default TodoItems
