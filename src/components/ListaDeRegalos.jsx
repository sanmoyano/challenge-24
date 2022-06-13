import { Button, FormControl, Input, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

import RegalosList from "./RegalosList";

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

    //ESTADOS
    const [arrayItems, setArrayItems] = useState([]);
    const [input, setInput] = useState("");

    //FUNCIONES
    const addItem = (e) => {
        e.preventDefault();
        setArrayItems([...arrayItems, { name: input, id: arrayItems.length }]);
        setInput("");
    };

    return (
        <>
            <Stack {...formStack}>
                <FormControl as="form" onSubmit={addItem}>
                    <Stack direction={"row"} spacing={6}>
                        <Input
                            placeholder="Agregar item..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button onClick={addItem}>Agregar</Button>
                    </Stack>
                </FormControl>
            </Stack>

            <RegalosList arrayItems={arrayItems} setArrayItems={setArrayItems} />
        </>
    );
};

export default ListaDeRegalos;
