import { Button, FormControl, Input, Stack, useToast } from "@chakra-ui/react";
import { useContext } from "react";

import { DataContext } from "../context/DataProvider";

import Contador from "./Contador";

const Drawer = ({ open }) => {
    //CONFIGURACIONES
    const formStack = {
        alignItems: "center",
        backdropFilter: "blur(10px)",
        bgColor: "gray.900",
        borderRadius: "lg",
        borderWidth: "1px",
        justifyContent: "center",
        minWidth: "600px",
        opacity: 0.9,
        p: 6,
    };

    //CONTEXT
    const {
        input,
        setInput,
        destinatario,
        setDestinatario,
        image,
        setImage,
        cantidad,
        setCantidad,
        addItem,
    } = useContext(DataContext);

    return (
        <Stack {...formStack} display={open ? "flex" : "none"}>
            <FormControl as="form" onSubmit={addItem}>
                <Stack alignItems="center">
                    <Input
                        placeholder="Agregar item..."
                        value={input}
                        width={"auto"}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Input
                        placeholder="Destinatario..."
                        value={destinatario}
                        width={"auto"}
                        onChange={(e) => setDestinatario(e.target.value)}
                    />
                    <Input
                        placeholder="Agregar url imagen..."
                        value={image}
                        width={"auto"}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <Stack direction={"row"}>
                        <Contador cantidad={cantidad} setCantidad={setCantidad} />
                        <Button onClick={addItem}>Add</Button>
                    </Stack>
                </Stack>
            </FormControl>
        </Stack>
    );
};

export default Drawer;
