import axios from "axios";
import IntegerValidationError from "../../../utils/errors/IntegerValidationError";


export const handleAddressCEPChange = async (e, setCEP, address, setAddress) => {
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

export const handleAddressNumberChange = (e, address, setAddress) => {
    try {
        if(/^\d*$/.test(e.target.value))
            setAddress({ ...address, addressNumber: e.target.value });
        else
            throw new IntegerValidationError("addressNumber");
    } catch (error) {
        if (error instanceof IntegerValidationError) {
            console.error(`Validation Error: ${error.message}`);
            alert(`Erro: Este campo só permite números inteiros.`);
        } else
            console.error("Unexpected error:", error);
    }
};

export const handleAddressStreetChange = (e, address, setAddress) => {
    setAddress({ ...address, addressStreet: e.target.value });
}

export const handleAddressNeighborhoodChange = (e, address, setAddress) => {
    setAddress({ ...address, addressNeighborhood: e.target.value });
}

export const handleAddressCityChange = (e, address, setAddress) => {
    setAddress({ ...address, addressCity: e.target.value })
}