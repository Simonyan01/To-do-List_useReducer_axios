import { useState } from "react";
import { Grow, Tooltip } from "@mui/material";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import DeleteAlert from "../../modal_alert/DeleteAlert";

const TodoItem = ({ todo, onChange, onDelete, i }) => {
  const [isDelete, setIsDelete] = useState(false)

  return (
    <>
      {!isDelete &&
        <motion.section
          className={`${todo.isCompleted
            ? 'bg-gray-600 text-white border-l'
            : 'hover:text-gray-950 hover:border-l-neutral-700 text-gray-500'
            }  grid grid-cols-[auto,30px] items-center justify-between whitespace-pre-line break-all py-4 px-2 text-xl duration-300 border-2 rounded-2xl mt-3 mx-3`}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ delay: i * 0.11, duration: 0.1, type: 'linear' }}
        >
          <label className={`${todo.isCompleted ? 'line-through' : 'none'} cursor-pointer select-none`}>
            <input
              className="invisible"
              variant="filled"
              type="checkbox"
              checked={todo.isCompleted}
              onChange={(e) => {
                onChange({
                  ...todo,
                  isCompleted: e.target.checked,
                });
              }}
            />
            {todo.text}
          </label>
          <span className="flex mr-6 my-auto items-center justify-center text-[1.1rem] bg-transparent">
            <Tooltip
              TransitionComponent={Grow}
              TransitionProps={{ timeout: 400 }}
              title="Delete"
            >
              <button
                checked={isDelete}
                className="transition-all duration-400 ease-in-out hover:rotate-180"
                style={{
                  color: todo.isCompleted ? '#fff' : '#888',
                }}
                onClick={() => todo.isCompleted && setIsDelete(true)}
              >
                <FontAwesomeIcon icon={faRemove} />
              </button>
            </Tooltip>
          </span>
        </motion.section>
      }
      {
        isDelete &&
        <DeleteAlert
          onComplete={() => onDelete(todo)}
          onCancel={() => setIsDelete(false)}
        />
      }
    </>
  )
}
export default TodoItem

