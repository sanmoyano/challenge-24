import { Button, FormControl, Input, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

const ListaDeRegalos = () => {
    const [itemList, setItemList] = useState([]);
    const [itemInput, setItemInput] = useState("");

    const addItem = (e) => {
        e.preventDefault();
        setItemList([...itemList, { name: itemInput, id: itemList.length }]);
        setItemInput("");
    };

    const removeItem = (id) => {
        setItemList(itemList.filter((item) => item.id !== id));
    };

    return (
        <>
            <Stack
                alignItems={"center"}
                backdropFilter={"blur(10px)"}
                bgColor={"gray.900"}
                borderRadius={"lg"}
                borderWidth={"1px"}
                justifyContent={"center"}
                minWidth={"600px"}
                opacity={0.9}
                p={6}
            >
                <FormControl as="form" onSubmit={addItem}>
                    <Stack direction={"row"} spacing={6}>
                        <Input
                            placeholder="Add item.."
                            value={itemInput}
                            onChange={(e) => setItemInput(e.target.value)}
                        />
                        <Button onClick={addItem}>Add</Button>
                    </Stack>
                </FormControl>
            </Stack>

            <Stack alignItems="center" minW="600px" p={6}>
                {itemList.length === 0 ? (
                    <Text>No hay items </Text>
                ) : (
                    <Stack
                        alignItems="center"
                        bgColor={"gray.900"}
                        borderRadius={"lg"}
                        justifyContent="center"
                        p={6}
                    >
                        <UnorderedList spacing={6}>
                            {itemList.map((item) => (
                                <ListItem key={item.id}>
                                    <Stack
                                        alignItems="center "
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        spacing={6}
                                        width="100%"
                                    >
                                        <Text>{item.name}</Text>
                                        <Button onClick={() => removeItem(item.id)}>X</Button>
                                    </Stack>
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Stack>
                )}
            </Stack>
        </>
    );
};

export default ListaDeRegalos;
