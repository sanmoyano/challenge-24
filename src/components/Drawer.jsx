import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

const Drawer = ({ open }) => {
    return (
        <Box bg="tomato" color="white" display={open ? "none" : "flex"} p={4} w="100%">
            This is the Box
        </Box>
    );
};

export default Drawer;
