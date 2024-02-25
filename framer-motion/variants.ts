export const sectionVariants = ({
  from,
}: {
  from: "left" | "right" | "top" | "bottom";
}) => ({
  hidden: {
    opacity: 0,
    x: from === "left" ? -200 : from === "right" ? 200 : 0,
    y: from === "bottom" ? 200 : from === "top" ? -200 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.2,
    },
  },
});

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    x: -1000,
    y: -500,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.01,
    },
  },
};

export const leftSideVariants = (showSideNav: boolean) => ({
  visible: {
    opacity: 1,
    x: showSideNav ? 0 : -10000,
    transition: {
      type: "spring",
      staggerChildren: 0.01,
      stiffness: 70,
      mass: 0.6,
    },
  },
});

export const rightSideVariants = (showSideNav: boolean) => ({
  visible: {
    opacity: 1,
    x: showSideNav ? 0 : 10000,
    transition: {
      type: "spring",
      staggerChildren: 0.01,
      stiffness: 70,
      mass: 0.6,
    },
  },
});
