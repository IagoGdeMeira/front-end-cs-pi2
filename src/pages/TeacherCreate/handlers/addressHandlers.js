import axios from "axios";


export const handleAddressCEPChange = async (e, setCEP, address, setAddress) => {
    const cep = e.target.value.replace(/\D/g, "");
    setCEP(cep);

    if (cep.length === 8) {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro)
                alert("CEP não encontrado.");
            else {
                setAddress({
                    ...address,
                    addressNumber: response.data.logradouro,
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
    const { value } = e.target.value;

    if(/^\d*$/.test(value))
        setAddress({...address, addressStreet: value});
    else
        console.error("ERROR: Only integer numbers are allowed in this input.");
};