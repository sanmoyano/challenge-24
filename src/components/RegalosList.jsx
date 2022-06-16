import { Button, Stack, Text, UnorderedList } from "@chakra-ui/react";

import Regalos from "./Regalos";

const RegalosList = ({ arrayItems, setArrayItems }) => {
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
        maxW: "600px",
        p: 6,
        spacing: 2,
        width: "100%",
    };

    //FUNCIONES
    const removeAll = () => {
        setArrayItems([]);
    };

    return (
        <Stack {...listStack}>
            {arrayItems.length === 0 ? (
                <Text>No hay items</Text>
            ) : (
                <UnorderedList {...listMapStack}>
                    {arrayItems.map((item) => (
                        <Regalos
                            key={item.id}
                            cantidad={item.cantidad}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            remove={(id) =>
                                setArrayItems(arrayItems.filter((item) => item.id !== id))
                            }
                        />
                    ))}
                </UnorderedList>
            )}
            <Button onClick={removeAll}>Eliminar todo</Button>
        </Stack>
    );
};

export default RegalosList;
