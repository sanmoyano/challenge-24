import { Button, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const Item = ({ name, destinatario, cantidad, img, id, removeItem, editItem }) => {
    return (
        <Stack
            alignItems={"center"}
            animate={{ opacity: 1 }}
            as={motion.div}
            bgColor={"gray.900"}
            borderRadius={"lg"}
            direction="row"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            justifyContent={"space-between"}
            layoutId={`${id}`}
            transition={{ duration: 1 }}
            width="100%"
        >
            <Stack
                bgColor={"gray.800"}
                borderRadius={"lg"}
                direction={"row"}
                justifyContent={"space-between"}
                p={4}
                spacing={6}
                w="100%"
            >
                <Image boxSize={"50px"} objectFit={"cover"} src={img} />
                <Stack spacing={2}>
                    <Text fontWeight={"bold"}>{name}</Text>
                    <Text color={"gray.500"}>{destinatario}</Text>
                </Stack>
                <Text>x{cantidad}</Text>
                <Button onClick={() => editItem(id)}>
                    <Icon as={AiFillEdit} h={6} w={6} />
                </Button>
                <Button onClick={() => removeItem(id)}>
                    <Icon as={MdDeleteForever} h={6} w={6} />
                </Button>
            </Stack>
        </Stack>
    );
};

export default Item;
