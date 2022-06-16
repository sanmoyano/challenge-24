import { Box, Button, Image, ListItem, Stack, Text } from "@chakra-ui/react";

const Regalos = ({ name, remove, id, cantidad, image }) => {
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

    return (
        <ListItem>
            <Stack {...listItemStack}>
                <Image boxSize={"50px"} objectFit="cover" src={image} />
                <Text>{name}</Text>
                <Text>{cantidad}</Text>
                <Button onClick={() => remove(id)}>x</Button>
            </Stack>
        </ListItem>
    );
};

export default Regalos;
