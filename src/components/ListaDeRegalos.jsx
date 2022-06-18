import { Button, ScaleFade, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

import RegalosList from "./RegalosList";
import Drawer from "./Drawer";

const ListaDeRegalos = () => {
    //ESTADOS
    const [isOpen, setIsOpen] = useState(false);
    const [arrayItems, setArrayItems] = useState([]);

    const openDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Stack
            animate={{ scale: 1 }}
            as={motion.div}
            initial={{ scale: 0 }}
            p={12}
            transition="1s ease-in-out"
        >
            <Button onClick={openDrawer}>Agregar items</Button>
            <ScaleFade in={isOpen} initialScale={0.9}>
                <Drawer arrayItems={arrayItems} open={isOpen} setArrayItems={setArrayItems} />
            </ScaleFade>
            <RegalosList arrayItems={arrayItems} setArrayItems={setArrayItems} />
        </Stack>
    );
};

export default ListaDeRegalos;
