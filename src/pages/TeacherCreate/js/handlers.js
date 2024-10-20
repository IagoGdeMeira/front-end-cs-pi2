import axios from "axios";

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