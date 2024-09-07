import axios from "axios";
import IntegerValidationError from "../../../utils/errors/IntegerValidationError";


export const handleAddressCEPChange = async (e, setCEP, address, setAddress) => {
    const cep = e.target.value.replace(/\D/g, "");

    if (cep.length === 8) {
        setCEP(cep);
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro)
                alert("CEP não encontrado.");
            else {
                setAddress({
                    ...address,
                    addressStreet: response.data.logradouro,
                    addressNeighborhood: response.data.bairro,
                    addressCity: response.data.cidade
                });
            }
        } catch (error) {
            console.error("Erro ao buscar o CEP:", error)
        };
    }
};

export const handleAddressNumberChange = (e, address, setAddress) => {
    if(/^\d*$/.test(e.target.value))
        setAddress({...address, addressStreet: e.target.value});
    else
        throw new IntegerValidationError("addressNumber");
};