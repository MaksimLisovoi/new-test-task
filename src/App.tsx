import { Box } from "@mui/system";
import "./App.css";
import { Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const App = () => {
  const [userText, setUserText] = useState("");
  const [uniqueSymbol, setUniqueSymbol] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserText(e.target.value);
  };

  const SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const unique = firstSymbolFunc(userText);

    if (!unique) {
      setUserText("");
      return setUniqueSymbol("There is no unique symbol");
    }
    setUserText("");
    return setUniqueSymbol(unique);
  };

  const firstSymbolFunc = (text: string): any => {
    // Check is text isempty string
    if (text.length === 0) {
      return "This string is empty!";
    }

    const checkIsNonRepeated = (string: string) => {
      let index = -1;
      let firstUnique = "";

      for (let i of string) {
        if (string.split(i).length - 1 === 1) {
          firstUnique = i;
          break;
        } else {
          index += 1;
        }
      }
      if (index === string.length - 1) {
        return;
      } else {
        return firstUnique;
      }
    };

    const filteredArr = text.split(" ");

    const resultArr = filteredArr.map((el) => {
      return checkIsNonRepeated(el);
    });

    const firstResultStr = resultArr.join("");
    const finallyResultStr = checkIsNonRepeated(firstResultStr);

    console.log(finallyResultStr);
    return finallyResultStr;
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex ",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: " 100%", lg: " 50%" },
        }}
      >
        <Typography className="header" component="h1" variant="h5">
          If you want to find non-repeated unique symbol
        </Typography>
        <Typography
          className="header"
          component="h1"
          variant="h5"
          sx={{ paddingBottom: " 12px" }}
        >
          Enter text here:
        </Typography>

        <form onSubmit={SubmitHandler}>
          <TextField
            onChange={onChangeHandler}
            fullWidth
            value={userText}
            name="userText"
            id="outlined-basic"
            label="text for unique symbols searching"
            variant="outlined"
            sx={{ m: " auto 0" }}
          />
        </form>

        <Typography sx={{ mt: "12px" }}>
          Your unique symbol is: {uniqueSymbol}
        </Typography>
      </Box>
    </Container>
  );
};
