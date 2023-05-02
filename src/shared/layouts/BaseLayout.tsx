import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";

interface ILayoutBasePageProps {
  children: React.ReactNode;
  titulo: string;
}

export const BaseLayout = ({ children, titulo }: ILayoutBasePageProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        display="flex"
        alignItems="center"
        gap={1}
      >
        <Typography
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {titulo}
        </Typography>
      </Box>

      <Box flex={1} overflow="auto">
      {children}
      </Box>
    </Box>
  );
};
