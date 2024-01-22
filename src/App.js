
import './App.css';


import { motion } from "framer-motion";

function App() {
  const text = "Unveiling the Sweet Symphony of Cornified Elegance – Where Every Kernel Sparks a Taste of Irresistible Allure! 🌽✨ Stay tuned for a corn Extravaganza that Redefines Deliciousness!".split(" ");

  return (
    <div className="App">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default App;