import { motion } from 'framer-motion';

const Modal = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        {/* Modal content here */}
    </motion.div>
);

export default Modal;
