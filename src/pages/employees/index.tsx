import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { BaseLayout } from "@/shared/layouts";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Icon,
  IconButton,
  LinearProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { EmployeeService } from "@/shared/services/api/employee/employeeService";
import { Ficha } from "@/shared/types";
import { useDebounce } from "@/shared/hooks";

import prisma from "@/lib/prisma";

export default function EmployeeList() {
  const [rows, setRows] = useState<Ficha[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState("1");
  const router = useRouter();

  const handleSearchChange = (event: any) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);
    router.push(`/employees?search=${searchText}`);
  };

  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  console.log("Math.ceil(totalCount / 7)", Math.ceil(totalCount / 7));
  const theme = useTheme();
  const { debounce } = useDebounce();

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      EmployeeService.getAll(Number(page), searchTerm).then((result) => {
        console.log("result", result);
        setIsLoading(false);
        if (result instanceof Error) {
          return;
        }
        setRows(result.data);
        setTotalCount(result.totalCount);
      });
    });
  }, [searchTerm, page]);

  return (
    <BaseLayout titulo="Colaboradores">
      <Box
        height={theme.spacing(7)}
        marginX={1}
        padding={1}
        paddingX={2}
        display="flex"
        gap={1}
        alignItems="center"
        component={Paper}
      >
        <TextField
          size="small"
          placeholder="Pesquisar..."
          onChange={handleSearchChange}
        />
        <Box flex={1} display="flex" justifyContent="end">
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => router.push("/employees/new")}
            endIcon={
              <Icon>
                <AddIcon />
              </Icon>
            }
          >
            Adicionar
          </Button>
        </Box>
      </Box>

      <TableContainer
        sx={{ m: 1, width: "auto" }}
        component={Paper}
        variant="outlined"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id </TableCell>
              <TableCell>Nome </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nome}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.cpf}</TableCell>
                <TableCell>
                  <IconButton size="small">
                    <Icon>
                      <DeleteIcon />
                    </Icon>
                  </IconButton>
                  <IconButton onClick={() => router.push(`/employees/details`)}>
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
          {totalCount === 0 && !isLoading && <caption>Lista Vazia</caption>}

          <TableFooter>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={4}>
                  <LinearProgress variant="indeterminate" />
                </TableCell>
              </TableRow>
            )}
            {totalCount > 0 && totalCount > 7 && (
              <TableRow>
                <TableCell colSpan={3}>
                  <Pagination
                    page={1}
                    count={Math.ceil(totalCount / 7)}
                    onChange={(_, newPage) => {
                      setPage(newPage.toString());
                    }}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </TableContainer>
    </BaseLayout>
  );
}
