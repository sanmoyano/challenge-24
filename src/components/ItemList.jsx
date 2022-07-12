import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Item from "./Item";

const ItemList = ({ items, setArrayItems }) => {
    //crear hooks de editar el primer valor va ser el id del item que estoy editando igual a null
    const [todoEditing, setTodoEditing] = useState(null);
    //hooks del input que quiero editar y el valor que quiero editar igual a un empty string
    const [editingInput, setEditingInput] = useState("");

    const handleClickRemoveAll = () => {
        setArrayItems([]);
    };

    const removeItem = (id) => {
        setArrayItems(items.filter((item) => item.id !== id));
    };

    const handleClickEdit = (id) => {
        setTodoEditing(id);
    };

    return (
        <Stack bgColor={"gray.900"} borderRadius={"lg"} p={6} width="100%">
            {items.length === 0 ? (
                <Text>Aun no hay items agregados</Text>
            ) : (
                <AnimatePresence>
                    {items.map((item) => (
                        <Stack key={item.id}>
                            {todoEditing === item.id ? (
                                // Esto es un nuevo componente para crear EditItemComponent
                                <Input
                                    type={"text"}
                                    value={editingInput}
                                    onChange={(e) => setEditingInput(e.target.value)}
                                />
                            ) : (
                                <Item
                                    cantidad={item.cantidad}
                                    destinatario={item.destinatario}
                                    editItem={handleClickEdit}
                                    id={item.id}
                                    img={item.img}
                                    name={item.nombre}
                                    removeItem={removeItem}
                                />
                            )}
                        </Stack>
                    ))}
                </AnimatePresence>
            )}
            <Button onClick={handleClickRemoveAll}>Eliminar todo</Button>
        </Stack>
    );
};

export default ItemList;
