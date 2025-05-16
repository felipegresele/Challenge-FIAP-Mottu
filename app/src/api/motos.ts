export type Moto = {
    id: number,
    entregador?: string,
    chassi?: string,
    status: "Disponivel" | "Investigação" | "Em trânsito",
    horarioSaida?: string,
    motivoIndisponivel?: string;
};
