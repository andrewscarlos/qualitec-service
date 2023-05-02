import { FichaTotalCount } from "@/shared/types/totalCount";
import { Api } from "../../axios-config";

const getAll = async (
    page: number = 1,
    filter: string = ""
  ): Promise<FichaTotalCount | Error> => {
    try {
      const { data, headers } = await Api.get(
        `/employees?_page=${page}&_limit=7&nome_like=${filter}`
      );
      if (data) {
        return {
          data,
          totalCount: headers["x-total-count"],
        };
      }
      return new Error("Error ao listar os registros");
    } catch (error) {
      console.error(error);
      return new Error(
        (error as { message: string }).message || "Error ao listar os registros"
      );
    }
  };
//   const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
//     try {
//       const { data } = await Api.get(`/employees/${id}`);
  
//       if (data) {
//         return data;
//       }
  
//       return new Error("Erro ao consultar o registro.");
//     } catch (error) {
//       console.error(error);
//       return new Error(
//         (error as { message: string }).message || "Erro ao consultar o registro."
//       );
//     }
//   };
//   const create = async (
//     dados: Omit<IDetalhePessoa, "id">
//   ): Promise<number | Error> => {
//     try {
//       const { data } = await Api.post<IDetalhePessoa>("/employees", dados);
  
//       if (data) {
//         return data.id;
//       }
  
//       return new Error("Erro ao criar o registro.");
//     } catch (error) {
//       console.error(error);
//       return new Error(
//         (error as { message: string }).message || "Erro ao criar o registro."
//       );
//     }
//   };
//   const updateById = async (
//     id: number,
//     dados: IDetalhePessoa
//   ): Promise<void | Error> => {
//     try {
//       await Api.put(`/employees/${id}`, dados);
//     } catch (error) {
//       console.error(error);
//       return new Error(
//         (error as { message: string }).message || "Erro ao atualizar o registro."
//       );
//     }
//   };
//   const deleteById = async (id: number): Promise<void | Error> => {
//     try {
//       await Api.delete(`/employees/${id}`);
//     } catch (error) {
//       console.error(error);
//       return new Error(
//         (error as { message: string }).message || "Erro ao apagar o registro."
//       );
//     }
//   };
  
export const EmployeeService = {
    getAll
};
