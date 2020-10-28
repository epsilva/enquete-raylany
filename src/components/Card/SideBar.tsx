import * as React from "react";
import { useRef } from "react";
import { SidebarContainer } from './styles';
import { motion } from "framer-motion";
import Description from './Description';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const SideBar = ({isOpen, description}) => {
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
        <SidebarContainer variants={sidebar} style={{left: isOpen ? '0' : '-80px'}} >
            <Description description={description}/>
        </SidebarContainer>
    </motion.nav>

  );
};

export default SideBar
