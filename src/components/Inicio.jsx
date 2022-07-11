import { Button, ScaleFade, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ItemList from "./ItemList";
import FormularioDrawer from "./FormularioDrawer";

const Inicio = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickDrawer = () => {
        setIsOpen(!isOpen);
    };

    const [arrayItems, setArrayItems] = useState([]);

    const [input, setInput] = useState("");
    const [destinatario, setDestinatario] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [img, setImg] = useState("");

    useEffect(() => {
        const items = localStorage.getItem("items");

        if (items) {
            setArrayItems(JSON.parse(items));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(arrayItems));
    }, [arrayItems]);

    return (
        <Stack
            animate={{ scale: 1 }}
            as={motion.div}
            initial={{ scale: 0 }}
            p={12}
            transition="1s ease-in-out"
        >
            <Button onClick={handleClickDrawer}>Agregar Items</Button>
            <Stack display={isOpen ? "block" : "none"}>
                <ScaleFade in={isOpen} initialScale={0.1} unmountOnExit={true}>
                    <FormularioDrawer
                        arrayItems={arrayItems}
                        cantidad={cantidad}
                        destinatario={destinatario}
                        img={img}
                        input={input}
                        open={isOpen}
                        setArrayItems={setArrayItems}
                        setCantidad={setCantidad}
                        setDestinatario={setDestinatario}
                        setImg={setImg}
                        setInput={setInput}
                    />
                </ScaleFade>
            </Stack>
            <ItemList items={arrayItems} setArrayItems={setArrayItems} />
        </Stack>
    );
};

export default Inicio;
