import { Button, Stack, Text, List } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";

import { DataContext } from "../context/DataProvider";

import Regalos from "./Regalos";

const RegalosList = () => {
    //CONFIGURACIONES
    const listStack = {
        alignItems: "center",
        bgColor: "gray.900",
        borderRadius: "lg",
        justifyContent: "center",
        p: 6,
        minWidth: "600px",
        spacing: 6,
    };
    const listMapStack = {
        alignItems: "center",
        maxW: "100%",
        p: 6,
        spacing: 2,
        width: "100%",
    };
    //CONTEXT
    const { arrayItems, setArrayItems } = useContext(DataContext);
    //FUNCIONES
    const removeAll = () => {
        setArrayItems([]);
    };

    return (
        <Stack {...listStack}>
            {arrayItems.length === 0 ? (
                <Text>No hay items</Text>
            ) : (
                <List width={"100%"}>
                    <Stack {...listMapStack}>
                        <AnimatePresence>
                            {arrayItems.map((item) => (
                                <Regalos
                                    key={item.id}
                                    cantidad={item.cantidad}
                                    destinatario={item.destinatario}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    remove={(id) =>
                                        setArrayItems(arrayItems.filter((item) => item.id !== id))
                                    }
                                />
                            ))}
                        </AnimatePresence>
                    </Stack>
                </List>
            )}
            <Button onClick={removeAll}>Eliminar todo</Button>
        </Stack>
    );
};

export default RegalosList;
