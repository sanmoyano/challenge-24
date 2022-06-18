import { Button, FormControl, Input, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";

import RegalosList from "./RegalosList";
import Drawer from "./Drawer";

const ListaDeRegalos = () => {
    const [isOpen, setIsOpen] = useState(false);
    //ESTADOS
    const [arrayItems, setArrayItems] = useState([]);
    const [input, setInput] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [image, setImage] = useState("");

    const openDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Stack>
            <Button onClick={openDrawer}>Agregar items</Button>
            <Drawer
                arrayItems={arrayItems}
                cantidad={cantidad}
                image={image}
                input={input}
                open={isOpen}
                setArrayItems={setArrayItems}
                setCantidad={setCantidad}
                setImage={setImage}
                setInput={setInput}
            />
            <RegalosList arrayItems={arrayItems} setArrayItems={setArrayItems} />
        </Stack>
    );
};

export default ListaDeRegalos;
