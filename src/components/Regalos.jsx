import { Button, Image, Input, ListItem, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContex, useState } from "react";

import { DataContext } from "../context/DataProvider";

const Regalos = ({ name, remove, id, cantidad, image, destinatario }) => {
    const listItemStack = {
        alignItems: "center",
        direction: "row",
        justifyContent: "space-between",
        spacing: 6,
        width: "100%",
        bgColor: "gray.700",
        borderRadius: "lg",
        p: 4,
    };

    const { arrayItems, setArrayItems, setInput } = useContex(DataContext);

    const [editTrue, setEditTrue] = useState(false);

    const edit = (id) => {
        setEditTrue(!editTrue);
        console.log(name, cantidad, destinatario);
    };

    return (
        <ListItem width={"100%"}>
            <Stack
                {...listItemStack}
                animate={{ opacity: 1 }}
                as={motion.div}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                layoutId={`${id}`}
                transition={{ duration: 1 }}
            >
                <Image boxSize={"50px"} objectFit="cover" src={image} />
                <Stack spacing={0}>
                    <Text fontWeight={"bold"}>{name}</Text>
                    <Text opacity={0.5}>{destinatario}</Text>
                </Stack>
                <Text>x{cantidad}</Text>
                <Button onClick={() => edit(id)}>Edit</Button>
                {editTrue ? (
                    <Input
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => console.log(e.target.value)}
                    />
                ) : null}

                <Button onClick={() => remove(id)}>x</Button>
            </Stack>
        </ListItem>
    );
};

export default Regalos;
