import { Button, Stack, UnorderedList } from "@chakra-ui/react";

import Regalos from "./Regalos";

const RegalosList = ({ arrayItems, setArrayItems }) => {
    const listStack = {
        alignItems: "center",
        bgColor: "gray.900",
        borderRadius: "lg",
        justifyContent: "center",
        p: 6,
    };
    const listMapStack = {
        alignItems: "center",
        minW: "600px",
        p: 6,
    };

    const removeItem = (id) => {
        setArrayItems(arrayItems.filter((item) => item.id !== id));
    };

    const removeAll = () => {
        setArrayItems([]);
    };

    return (
        <Stack {...listMapStack}>
            <Stack {...listStack}>
                <UnorderedList spacing={6}>
                    {arrayItems.map((item) => (
                        <Regalos key={item.id} id={item.id} name={item.name} remove={removeItem} />
                    ))}
                </UnorderedList>
            </Stack>
            <Button onClick={removeAll}>Eliminar todo</Button>
        </Stack>
    );
};

export default RegalosList;
