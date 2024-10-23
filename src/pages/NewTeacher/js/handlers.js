import axios from "axios";
import { handleFieldChange } from "../../../utils/handlers/globalHandlers";
import { validateEmail, validateRG } from "./validators";


export const handleCEPChange = async (e, setCEP, address, setAddress) => {
    const cep = e.target.value.replace(/\D/g, "");

    if (cep.length === 8) {
        setCEP(cep);
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.data.erro) {
                setAddress({
                    ...address,
                    addressStreet: response.data.logradouro,
                    addressNeighborhood: response.data.bairro,
                    addressCity: `${response.data.localidade} - ${response.data.uf}`
                });
            }
        } catch (error) {
            console.error("Erro ao buscar o CEP:", error)
        };
    }
};

export const handleFileUpload = (e, id, objects, setObjects) => {
    const uploadedFiles = e.files;

    if (!Array.isArray(objects)) {
        console.error("The 'objects' parameter is not an array:", objects);
        return;
    }

    setObjects(objects.map(obj => obj.id === id ? { ...obj, uploadedFiles } : obj));
};

export const handlePhoneNumberChange = (e, fieldName, object, setObject) => {
    let phoneNumber = e.target.value.replace(/\D/g, '');
    
    if (phoneNumber.length > 10)
        phoneNumber = phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    else if (phoneNumber.length > 6)
        phoneNumber = phoneNumber.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    else if (phoneNumber.length > 2)
        phoneNumber = phoneNumber.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');

    handleFieldChange({ target: { name: fieldName, value: phoneNumber } }, object, setObject);
};