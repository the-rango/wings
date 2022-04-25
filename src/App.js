import "./App.css";
import {
  Box,
  TextField,
  Autocomplete,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Modal,
  Typography
} from "@mui/material";
import * as React from "react";

function App() {
  const [code, setCode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [teacher, setTeacher] = React.useState("");
  const [wings, setWings] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [result, setResult] = React.useState("");

  const hangleWingsLetter = (event) => {
    setWings(event.target.value);
  };

  const submit = () => {
    setSubmitted(true);
    if (code !== "" && email !== "" && teacher !== "" && wings === "") {
      if (code === "111111111") {
        setResult("won");
      } else if (code === "222222222") {
        setResult("invalid");
      }
    }
  };

  const handleClose = () => {
    setResult("");
  };

  return (
    <div className="App">
      <Modal open={result !== ""} onClose={handleClose}>
        {result === "won" ? (
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Congrats!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              You had the golden ticket! Here's a gift card
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Invalid WINGS Ticket
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Your WINGS ticket code has already been claimed. If you believe
              this was a mistake, please submit the ticket to the box outside
              D7.
            </Typography>
          </Box>
        )}
      </Modal>

      <Box component="form">
        <p className="Title">Validate your WINGS ticket</p>

        <div className="Row" style={{ margin: 25 }}>
          <p>Enter the 9 digit code on your WINGS ticket</p>
          <TextField
            required
            error={submitted && code === ""}
            label="WINGS Ticket Code"
            defaultValue="XXX-XXX-XXX"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <FormControl>
          <FormLabel id="wings-choice">You demonstrated</FormLabel>
          <RadioGroup
            aria-labelledby="wings-choice"
            defaultValue=""
            error={submitted && code === ""}
            name="wings-choice"
            value={wings}
            onChange={hangleWingsLetter}
          >
            <FormControlLabel
              value="w"
              control={<Radio />}
              label="Willing to take a risk"
            />
            <FormControlLabel
              value="i"
              control={<Radio />}
              label="Integrity in action"
            />
            <FormControlLabel
              value="n"
              control={<Radio />}
              label="Nobility in thought"
            />
            <FormControlLabel
              value="g"
              control={<Radio />}
              label="Generous in spirit"
            />
            <FormControlLabel
              value="s"
              control={<Radio />}
              label="Self-directed"
            />
          </RadioGroup>
        </FormControl>

        <div className="Row" style={{ margin: 25 }}>
          <p>Teacher</p>
          <Autocomplete
            disablePortal
            id="teacher-select"
            value={teacher}
            onChange={(event, newValue) => {
              setTeacher(newValue);
            }}
            options={staff}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                error={submitted && teacher === ""}
                label="Type in your teacher's name on the WINGS ticket"
              />
            )}
          />
        </div>

        <div className="Row" style={{ margin: 25 }}>
          <p>Please enter your IUSD email</p>
          <TextField
            error={submitted && email === ""}
            required
            label="IUSD Email"
            defaultValue=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button onClick={submit} variant="contained">
          submit
        </Button>
      </Box>
    </div>
  );
}

const staff = [
  { label: "ANGEL" },
  { label: "LELLIOTT" },
  { label: "BOSSHART" },
  { label: "WARE" },
  { label: "HALL" },
  { label: "VREELAND" },
  { label: "SURJONO" },
  { label: "BEEMAN" },
  { label: "MASCIEL" },
  { label: "PATTON" },
  { label: "ALLEN" },
  { label: "HOUGH" },
  { label: "FLEMING" },
  { label: "GARCIA" },
  { label: "HARRISON" },
  { label: "MELGOZA" },
  { label: "CLAPPER" },
  { label: "DI FRANCESCO" },
  { label: "FORD" },
  { label: "IGNACIO" },
  { label: "JONG" },
  { label: "TATERI" },
  { label: "SHIMAMOTO" },
  { label: "LEAVEY" },
  { label: "LAMPERT" },
  { label: "LEVENSAILOR" },
  { label: "PATRICK" },
  { label: "SOLIDAY" },
  { label: "PIPP" },
  { label: "BARCENAS" },
  { label: "CETINELIAN" },
  { label: "HONG" },
  { label: "PENG" },
  { label: "BABE" },
  { label: "COLLINS" },
  { label: "GEORGINO" },
  { label: "TRAPP" },
  { label: "KUBO" },
  { label: "GU" },
  { label: "RAU" },
  { label: "REYNGOLD" },
  { label: "MONTGOMERY" },
  { label: "SEILHAN" },
  { label: "BIRCHLER" },
  { label: "EISMAN" },
  { label: "BUTLER" },
  { label: "KAHELIN" },
  { label: "ADAMS" },
  { label: "MUNOZ" },
  { label: "BYRNE" },
  { label: "NGUYEN" }
];

export default App;
