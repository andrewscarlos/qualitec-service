import {
  Box,
  Paper,
  Typography,
  Button,
  Icon,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

interface IBaseDetailsProps {
  tableHeadRows: string[];
  tableBodyRows: string[];
  register:string
}
const pessoas = [
  {
    nome: "João",
    idade: 30,
    dataNascimento: new Date("1992-01-01"),
    parentesco: "filho",
    cpf: "123.456.789-00",
    pa: "1234",
    banco: "Banco do Brasil",
    agencia: "1234-5",
    conta: "12345-6",
    digito: "7",
  },
  {
    nome: "Maria",
    idade: 45,
    dataNascimento: new Date("1978-05-12"),
    parentesco: "mãe",
    cpf: "987.654.321-00",
    pa: "5678",
    banco: "Caixa Econômica",
    agencia: "5678-9",
    conta: "56789-0",
    digito: "1",
  },
  {
    nome: "Pedro",
    idade: 50,
    dataNascimento: new Date("1973-08-22"),
    parentesco: "pai",
    cpf: "456.789.123-00",
    pa: "9012",
    banco: "Banco do Brasil",
    agencia: "9012-3",
    conta: "90123-4",
    digito: "5",
  },
];


export const BaseDetailsLayout = ({
  tableHeadRows,
  tableBodyRows,
  register
}: IBaseDetailsProps) => {

  const [rows, setRows] = useState<any[]>();
  return (
    <Box
      marginX={1}
      marginTop={2}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      flexDirection="column"
      component={Paper}
    >
      <Box padding={1} display="flex" alignItems="center" gap={1}>
        <Typography
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          <Button
            variant="contained"
            color="primary"
            disableElevation
            startIcon={
              <Icon>
                <AddIcon />
              </Icon>
            }
          >
            Adicionar
          </Button>
        </Typography>
      </Box>
      <Box flex={1} overflow="auto">
        <TableContainer
          sx={{ m: 1, width: "auto" }}
          component={Paper}
          variant="outlined"
        >
          <Table>
            <TableHead>
              <TableRow>
                {tableHeadRows?.map((tableHeadRow) => (
                  <TableCell>{tableHeadRow}</TableCell>
                ))}
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row, index) => (
                <TableRow key={index}>
                  {tableBodyRows.map((el) => (
                    <TableCell>{row[el]}</TableCell>
                  ))}
                  <TableCell>
                    <IconButton size="small">
                      <Icon>
                        <DeleteIcon />
                      </Icon>
                    </IconButton>
                    <IconButton
                    // onClick={() => router.push(`/pessoas/detalhe/${row.id}`)}
                    >
                      <IconButton size="small">
                        <Icon>
                          <EditIcon />
                        </Icon>
                      </IconButton>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
