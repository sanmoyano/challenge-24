import { Button, Stack, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import Item from "./Item";

const ItemList = ({ items, setArrayItems }) => {
    //crear hooks de editar el primer valor va ser el id del item que estoy editando igual a null
    const [editing, setEditing] = useState(null);
    //hooks del input que quiero editar y el valor que quiero editar igual a un empty string
    const [editInput, setEditInput] = useState("");
    //crear funcion que reciba el id del item que quiero editar y me devuelva el item que quiero editar

    const handleClickRemoveAll = () => {
        setArrayItems([]);
    };

    const removeItem = (id) => {
        setArrayItems(items.filter((item) => item.id !== id));
    };

    return (
        <Stack bgColor={"gray.900"} borderRadius={"lg"} p={6} width="100%">
            {items.length === 0 ? (
                <Text>Aun no hay items agregados</Text>
            ) : (
                <AnimatePresence>
                    {items.map((item) => (
                        <Item
                            key={item.id}
                            cantidad={item.cantidad}
                            destinatario={item.destinatario}
                            id={item.id}
                            img={item.img}
                            name={item.nombre}
                            removeItem={removeItem}
                        />
                    ))}
                </AnimatePresence>
            )}
            <Button onClick={handleClickRemoveAll}>Eliminar todo</Button>
        </Stack>
    );
};

export default ItemList;
