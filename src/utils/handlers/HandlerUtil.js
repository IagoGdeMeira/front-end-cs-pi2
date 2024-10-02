export const handleFieldChange = (e, ...args) => {
    const { name, value } = e.target ? e.target : e;

    if (Array.isArray(args[1])) {
        const [index, objects, setObjects] = args;
        const updatedObjects = [...objects];
        updatedObjects[index] = { ...objects[index], [name]: value };
        setObjects(updatedObjects);
    } else {
        const [object, setObject] = args;
        setObject({ ...object, [name]: value });
    }
};

export const handleAddObject = (objects, setObjects, objectTemplate) => {
    const newObject = { ...objectTemplate };
    setObjects([...objects, newObject]);
};

export const handleRemoveObject = (index, objects, setObjects) => {
    const updatedObjects = objects.filter((_, i) => i !== index);
    setObjects(updatedObjects);
};