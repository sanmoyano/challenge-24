import { Button, FormControl, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Contador from "./Contador";

const Drawer = ({ arrayItems, open, setArrayItems }) => {
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
    const toast = useToast();
    //ESTADOS
    const [input, setInput] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [image, setImage] = useState("");
    const [destinatario, setDestinatario] = useState("");

    //OBJETO
    const item = {
        id: Math.floor(Math.random() * 100),
        name: input,
        cantidad: cantidad,
        destinatario: destinatario,
        image: image,
    };
    //FUNCIONES
    const addItem = (e) => {
        e.preventDefault();
        if (input === "") {
            toast({
                title: "Error",
                description: "El nombre del item no puede estar vacio",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        } else if (arrayItems.find((item) => item.name === input)) {
            toast({
                title: "Advertencia",
                description: "El item ya existe",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
        } else {
            setArrayItems([...arrayItems, item]);
            setInput("");
            setCantidad(1);
            setImage("");
            setDestinatario("");
        }
    };

    //SET LOCALSTORAGE -> hay que borrar/comentar el React.StrictMode del main.jsx para que funcione
    useEffect(() => {
        const datos = localStorage.getItem("arrayItems");

        if (datos) {
            setArrayItems(JSON.parse(datos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("arrayItems", JSON.stringify(arrayItems));
    }, [arrayItems]);

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
