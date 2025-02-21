import { motion } from "motion/react";

function LandingPage() {
  return (
    <>
      <div className="text-5xl text-left align-middle bg-[url('/NierPattern.png')] h-[48rem] w-full">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ ease: "backOut", duration: 0.5 }}>
          <h1>Hi, Im Jacob</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ ease: "backOut", duration: 0.5, delay: 0.1 }}>
          <h1>Welcome to my web dev portfolio</h1>
        </motion.div>
      </div>
      <div>
        <a
          target="_blank"
          href="https://github.com/justexisting1"
          rel="noopener noreferrer">
          Github
        </a>
      </div>
    </>
  );
}

export default LandingPage;
