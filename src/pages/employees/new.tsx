import { useRef } from "react";
import { UnFormTextField } from "@/shared/components/ UnFormTextField";
import { BaseLayout } from "@/shared/layouts";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

export default function NewEmployee() {
  const formRef = useRef<FormHandles>(null);
  const sexo = [
    {
      label: "Masculino",
    },
    {
      label: "Feminino",
    },
  ];
  const estadoCivil = [
    {
      label: "Casado",
    },
    {
      label: "Solteiro",
    },
  ];
  const grauInstrucao = [
    {
      label: "Ensino Médio Completo",
    },
    {
      label: "Ensino Médio Incompleto",
    },
    {
      label: "Ensino Superior Completo",
    },
    {
      label: "Ensino Superior Incompleto",
    },
  ];
  const cutis = [{ label: "Branco" }, { label: "Negro" }, { label: "Pardo" }];
  const carteiraCHN = [
    { label: "A" },
    { label: "B" },
    { label: "C" },
    { label: "D" },
    { label: "E" },
  ];
  return (
    <BaseLayout titulo="Adicionar Colaborador">
      <Form ref={formRef} onSubmit={(e) => console.log(e)}>
        <Box
          component={Paper}
          margin={2}
          padding={2}
          display="flex"
          flexDirection="column"
          variant="outlined"
        >
          <Grid container direction="column" padding={2} spacing={2}>
            <Grid item>
              <Typography variant="h5">Ficha do funcionário</Typography>
            </Grid>
          </Grid>
          <Box marginBottom={1}>
            <Divider>
              <Typography variant="h6">Dados Pessoais</Typography>
            </Divider>
          </Box>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Nome Completo"
                name="nomeCompleto"
              />
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Data de Nascimento"
                InputLabelProps={{
                  shrink: true,
                }}
                name="dataNascimento"
                type="date"
              />
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Sexo" name="sexo" select>
                {sexo.map((option) => (
                  <MenuItem>{option.label}</MenuItem>
                ))}
              </UnFormTextField>
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Estado Civil"
                name="estadoCivil"
                select
              >
                {estadoCivil.map((option) => (
                  <MenuItem>{option.label}</MenuItem>
                ))}
              </UnFormTextField>
            </Grid>
          </Grid>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <UnFormTextField fullWidth label="Cpf" name="cpf" />
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={4} xl={4}>
              <UnFormTextField
                fullWidth
                label="Naturalidade"
                name="naturalidade"
              />
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={4} xl={4}>
              <UnFormTextField
                fullWidth
                label="Nacionalidade"
                name="nacionalidade"
              ></UnFormTextField>
            </Grid>
          </Grid>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <UnFormTextField fullWidth label="Nome do Pai" name="nomeDoPai" />
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={6} xl={6}>
              <UnFormTextField fullWidth label="Nome Da Mãe" name="nomeDaMae" />
            </Grid>
          </Grid>
          <Box marginTop={5} marginBottom={1}>
            <Divider>
              <Typography variant="h6">Documentos</Typography>
            </Divider>
          </Box>

          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <UnFormTextField fullWidth label="Rg" name="rg" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <UnFormTextField
                fullWidth
                label="Orgão Emissor"
                name="orgão Emissor"
              />
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={4} xl={4}>
              <UnFormTextField
                fullWidth
                label="Data Expedição"
                InputLabelProps={{
                  shrink: true,
                }}
                name="dataExpedicao"
                type="date"
              />
            </Grid>
          </Grid>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <UnFormTextField
                fullWidth
                label="Número do Titulo de Eleitor"
                name="numeroTitulo"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <UnFormTextField fullWidth label="Zona" name="zona" />
            </Grid>
          </Grid>
          <Box marginTop={5} marginBottom={1}>
            <Divider>
              <Typography variant="h6">Dados de Contato</Typography>
            </Divider>
          </Box>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <UnFormTextField fullWidth label="Email" name="email" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <UnFormTextField fullWidth label="Telefone" name="telefone" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <UnFormTextField fullWidth label="Celular" name="celular" />
            </Grid>
          </Grid>
          <Box marginTop={5} marginBottom={1}>
            <Divider>
              <Typography variant="h6">Dados Profissionais</Typography>
            </Divider>
          </Box>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Codigo Contabil"
                name="codContabil"
              />
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Grau de Instrução"
                name="grauDeInstrucao"
                select
              >
                {grauInstrucao.map((option) => (
                  <MenuItem>{option.label}</MenuItem>
                ))}
              </UnFormTextField>
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Cútis" name="cutis" select>
                {cutis.map((option) => (
                  <MenuItem>{option.label}</MenuItem>
                ))}
              </UnFormTextField>
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Carteira CNH"
                name="carteiraCNH"
                select
              >
                {carteiraCHN.map((option) => (
                  <MenuItem>{option.label}</MenuItem>
                ))}
              </UnFormTextField>
            </Grid>
          </Grid>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Número CNH" name="numeroCNH" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Data Vencimento"
                name="dataVencimentoCNH"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Carteira de Trabalho"
                name="cprof"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Série" name="serie" />
            </Grid>
          </Grid>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Data Expedição"
                name="dataExpedicao"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Data Aso"
                name="dataAso"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Ponto de Embarque"
                name="pontoEmbarque"
              />
            </Grid>
          </Grid>
          <Box marginTop={5} marginBottom={1}>
            <Divider>
              <Typography variant="h6">Endereço</Typography>
            </Divider>
          </Box>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <UnFormTextField fullWidth label="Endereço" name="endereco" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <UnFormTextField fullWidth label="Número" name="numero" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <UnFormTextField
                fullWidth
                label="Complemento"
                name="complemento"
              />
            </Grid>
          </Grid>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Bairro" name="bairro" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Cidade" name="cidade" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Estado" name="estado" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="CEP" name="cep" />
            </Grid>
          </Grid>
          <Box marginTop={5} marginBottom={1}>
            <Divider>
              <Typography variant="h6">Dados Trabalhistas</Typography>
            </Divider>
          </Box>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="C.A Número" name="canumero" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="cat" name="cat" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Fat.RH" name="fatRH" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Número PIS" name="numeroPis" />
            </Grid>
          </Grid>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Data Cadastro PIS"
                name="dataCadastroPIS"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Data Opção"
                name="dataOpcao"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={1} xl={1}>
              <FormControlLabel
                label="FGTS"
                control={<Checkbox name="Fgts" />}
              />
            </Grid>
          </Grid>
          <Box marginTop={5} marginBottom={1}>
            <Divider>
              <Typography variant="h6">Dados Trabalhistas</Typography>
            </Divider>
          </Box>
          <Grid container item direction="row" padding={1} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField
                fullWidth
                label="Nome Do Banco"
                name="nomeBanco"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Agência" name="agencia" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Conta" name="conta" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <UnFormTextField fullWidth label="Dígito" name="digito" />
            </Grid>
          </Grid>
          <Box display="flex" flex={1} marginTop={2} marginBottom={1} justifyContent="end" padding={2}>
            <Button size="large" variant="contained" color="primary" disableElevation>
              Salvar
            </Button>
          </Box>
        </Box>
      </Form>
    </BaseLayout>
  );
}
