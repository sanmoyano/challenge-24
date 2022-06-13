import { Button, ListItem, Stack, Text } from "@chakra-ui/react";

const Regalos = ({ name, remove, id }) => {
    const listItemStack = {
        alignItems: "center ",
        direction: "row",
        justifyContent: "space-between",
        spacing: 6,
        width: "100%",
        bgColor: "gray.700",
        borderRadius: "lg",
        p: 2,
    };

    return (
        <ListItem>
            <Stack {...listItemStack}>
                <Text>{name}</Text>
                <Button onClick={() => remove(id)}>x</Button>
            </Stack>
        </ListItem>
    );
};

export default Regalos;
