import { Button, FormControl, Input, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";

import RegalosList from "./RegalosList";
import Contador from "./Contador";

const ListaDeRegalos = () => {
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
    const [arrayItems, setArrayItems] = useState([]);
    const [input, setInput] = useState("");
    const [cantidad, setCantidad] = useState(0);
    //OBJETO
    const item = {
        id: arrayItems.length + 1,
        name: input,
        cantidad: cantidad,
    };

    //FUNCIONES
    const addItem = (e) => {
        e.preventDefault();
        if (input === "") {
            toast({
                title: "Error",
                description: "El campo no puede estar vacio",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        } else if (arrayItems.find((item) => item.name === input)) {
            toast({
                title: "Error",
                description: "El item ya existe",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
        } else {
            setArrayItems([...arrayItems, item]);
            setInput("");
            toast({
                title: "Exito",
                description: "El item se agrego correctamente",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Stack {...formStack}>
                <FormControl as={"form"} onSubmit={addItem}>
                    <Stack alignItems="center" direction={"row"} spacing={6}>
                        <Input
                            placeholder="Agrega un intem..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Contador cantidad={item.cantidad} setCantidad={setCantidad} />
                        <Button onClick={addItem}>Add</Button>
                    </Stack>
                </FormControl>
            </Stack>
            <RegalosList arrayItems={arrayItems} setArrayItems={setArrayItems} />
        </>
    );
};

export default ListaDeRegalos;
