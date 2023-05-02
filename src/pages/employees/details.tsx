import { BaseDetailsLayout, BaseLayout } from "@/shared/layouts";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useState } from "react";

interface IRegister {
  label: string;
  headTableName: string[];
  nameInTheDataBase?: any[];
}
export default function EmployeeEdit() {
  const [register, setRegister] = useState<string>("Ficha");
  const [headRows, setHeadRows] = useState<string[]>([
    "Livro Número",
    "Número Folha",
    "Admissão",
    "Demissão",
    "1° Vencimento",
    "2° Vencimento",
  ]);
  const [tableBodyRows, setTableBodyRows] = useState<string[]>([""]);
  const registerInfo: IRegister[] = [
    {
      label: "Ficha",
      headTableName: [""],
    },
    {
      label: "Registro",
      headTableName: [
        "Livro Número",
        "Número Folha",
        "Admissão",
        "Demissão",
        "1° Vencimento",
        "2° Vencimento",
      ],
      nameInTheDataBase: [
        "numLivro",
        "numFolha",
        "dataAdmissao",
        "dataDemissao",
        "primeiroVencimento",
        "segundoVencimento",
      ],
    },
    {
      label: "Dependentes",
      headTableName: [
        "Nome",
        "Idade",
        "Data Nascimento",
        "Parentesco",
        "Cpf",
        "PA",
        "Banco",
        "Agencia",
        "Conta",
        "Digito",
      ],
    },
    { label: "Cargo/Salario", headTableName: ["Data", "Cargo", "Salario"] },
    {
      label: "Contrato Sindical",
      headTableName: ["Sindicato", "Data", "Valor"],
    },
    {
      label: "Ferias",
      headTableName: [
        "PA Inicio",
        "PA Final",
        "Dias",
        "Inicio Ferias",
        "Fim Ferias",
        "Decimo Terceiro",
        "Colet",
      ],
    },
    {
      label: "Afastamentos",
      headTableName: ["Afastado Em", "Motivo", "Alta Em", "Qtd Dias"],
    },
    {
      label: "Notas",
      headTableName: ["Data", "Tipo", "Descrição", "Digitado Por"],
    },
    {
      label: "Integração",
      headTableName: [
        "Planta",
        "Validade",
        "Integração",
        "Numero",
        "Cracha",
        "Validade",
        "Cracha",
        "Locação Principal",
      ],
    },
    { label: "Aso", headTableName: ["Data", "Tipo"] },
    {
      label: "Epi",
      headTableName: [
        "Data",
        "Nome",
        "Tipo",
        "Tamanho",
        "Quantidade",
        "Usuario",
      ],
    },
  ];

  const handleButtonClick = (nameButton: string) => {
    const register = registerInfo.filter((el) => el.label === nameButton)[0];
    setRegister(nameButton);
    setHeadRows(register.headTableName);
    setTableBodyRows(register.nameInTheDataBase || [""]);
  };

  return (
    <BaseLayout titulo="Colaboradores">
      <Box
        component={Paper}
        marginX={1}
        padding={1}
        paddingX={2}
        display="flex"
        gap={1}
        justifyContent="inherit"
      >
        {registerInfo.map((el) => (
          <Button
            variant={register === el.label ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleButtonClick(el.label)}
            disableElevation
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              {el.label}
            </Typography>
          </Button>
        ))}
      </Box>
      {register === "Ficha" ? null : (
        <BaseDetailsLayout
          tableHeadRows={headRows}
          tableBodyRows={tableBodyRows}
          register={register}
        />
      )}
    </BaseLayout>
  );
}
