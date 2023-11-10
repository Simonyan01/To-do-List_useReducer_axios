import { Button } from "@mui/material";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

const DeleteAlert = ({ onComplete, onCancel }) => {

    const modalStyles = {
        position: 'fixed',
        bottom: 0,
        right: 0,
        background: "rgb(0,0,0,0.6)",
        borderRadius: "15px",
        width: "320px",
        padding: "0 20px",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        margin: "20px",
        letterSpacing: "1px",
        fontSize: "13px"
    }
    return (
        <motion.div
            initial={{ y: '200%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: 'linear' }}
            style={modalStyles}
        >
            <CountdownCircleTimer
                size={25}
                strokeWidth={2.5}
                isPlaying
                duration={5}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[5, 3, 2, 0]}
                onComplete={onComplete}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
            Чат удалён.
            <Button
                variant="text"
                sx={{
                    marginLeft: "46px",
                    padding: "3px 10px",
                    borderRadius: "25px",
                    color: "skyblue",
                }
                }
                onClick={onCancel} >
                <FontAwesomeIcon icon={faArrowRotateLeft} style={{
                    marginRight: "8px",
                }} />
                Отмена
            </Button>
        </motion.div>
    )
}

export default DeleteAlert