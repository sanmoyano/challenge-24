import { Button, Image, ListItem, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

import EditRegalo from "./EditRegalo";

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

    const [isOpen, setIsOpen] = useState(false);

    const openEdit = () => {
        setIsOpen(!isOpen);
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
                <Button onClick={openEdit}>Edit</Button>
                <Stack display={isOpen ? "flex" : "none"} position={"absolute"} heigth={"100%"}>
                    <EditRegalo
                        cantidad={cantidad}
                        destinatario={destinatario}
                        img={image}
                        name={name}
                    />
                </Stack>
                <Button onClick={() => remove(id)}>x</Button>
            </Stack>
        </ListItem>
    );
};

export default Regalos;
