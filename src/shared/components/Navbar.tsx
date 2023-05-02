import {
  Drawer,
  useTheme,
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
  useMediaQuery,
  Box,
} from "@mui/material";
import DarkMode from "@mui/icons-material/DarkMode";
import People from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";

interface INavBarProps {
  children: React.ReactNode;
}

import { useAppThemeContext } from "../contexts";
import { useRouter } from "next/navigation";

export const Navbar = ({ children }: INavBarProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleTheme } = useAppThemeContext();
  const router = useRouter();
  return (
    <>
      <Drawer open={true} variant="permanent">
        <Box
          width={theme.spacing(28)}
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton onClick={() => router.push("/employees")}>
                <ListItemIcon>
                  <Icon>
                    <People />
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Colaboradores" />
              </ListItemButton>
              <ListItemButton onClick={() => router.push("/order-service")}>
                <ListItemIcon>
                  <Icon>
                    <ArticleIcon />
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Ordem de Serviço" />
              </ListItemButton>
            </List>
          </Box>
          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>
                    <DarkMode />
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Alterar Tema" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
