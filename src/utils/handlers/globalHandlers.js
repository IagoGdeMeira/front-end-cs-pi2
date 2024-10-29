import { v4 as uuidv4 } from 'uuid';


export const handleFieldChange = (e, ...args) => {
    const name = e.target ? e.target.name : e.name;
    const value = e.target ? e.target.value : e.value;

    if (Array.isArray(args[1])) {
        const [id, objects, setObjects] = args;
        setObjects(objects.map(obj => obj.id === id ? { ...obj, [name]: value } : obj));
    } else {
        const [object, setObject] = args;
        setObject({ ...object, [name]: value });
    }
};

export const handleAddObject = (objects, setObjects, objectTemplate) =>
    setObjects([...objects, { id: uuidv4(), ...objectTemplate }]);

export const handleRemoveObject = (id, objects, setObjects) =>
    setObjects(objects.filter(obj => obj.id !== id));