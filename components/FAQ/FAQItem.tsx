"use client";

import { motion, AnimatePresence } from "framer-motion";

type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;
  const isActive = activeFaq === id;

  return (
    <div className="flex flex-col border-b border-stroke last-of-type:border-none dark:border-strokedark">
      <button
        onClick={() => handleFaqToggle(id)}
        className="flex cursor-pointer items-center justify-between px-6 py-5 text-metatitle3 font-medium text-black dark:text-white lg:px-9 lg:py-7.5"
      >
        {quest}
        {isActive ? (
          <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1666 0.833374H0.833313V3.16671H17.1666V0.833374Z" fill="currentColor" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z" fill="currentColor" />
          </svg>
        )}
      </button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.p
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-stroke px-6 py-5 text-gray-700 dark:border-strokedark dark:text-manatee lg:px-9 lg:py-7.5"
          >
            {ans}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;