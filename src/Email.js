import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import { resetWarningCache } from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "grid",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  form: {
    marginTop: "4vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
  name: {
    marginBottom: "1%",
    "& .MuiTextField-root": {
      width: "52ch",
    },
  },
  contact: {
    marginBottom: "1%",
  },
  message: {
    marginBottom: "1%",
    "& .MuiTextField-root": {
      width: "52ch",
    },
  },
  btn: {
    display: "flex",
    "& .MuiButton-root": {
      marginLeft: "auto",
    },
  },
  green: {
    color: "#49C144",
    borderColor: "#49C144",
  },
  red: {
    color: "#ff1744",
    borderColor: "#ff1744",
  },
}));

export default function MultilineTextFields() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const classes = useStyles();

  const submit = () => {
    if (name && message) {
      if (email || phone) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your email is on the way... we'll be in touch soon!",
          showConfirmButton: false,
          timer: 3500,
        }).then(() => reset());
      } else if (!email || !phone) {
        Swal.fire({
          icon: "error",
          title: "Missing Email or Phone",
          text: "How are we supposed to get in touch?",
          cancelButtonText: "Check Message",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Missing Some Info",
        text: "Tell us who you are and how we can help.",
        cancelButtonText: "Check Message",
      });
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.form}>
        <div className={classes.name}>
          <TextField
            error={name.length === 0 ? false : name.length === 1 ? true : false}
            required
            id="NAME"
            label="Name Or Title"
            variant="outlined"
            placeholder="Full Name Or Title"
            helperText={
              name.length === 0
                ? "How can I greet you?"
                : name.length === 1
                ? "Spell your name out... one letter at a time."
                : "How can I greet you?"
            }
            onChange={(e) => setName(e.target.value)}
            className={classes.NAME}
            value={name}
          />
        </div>
        <div className={classes.contact}>
          <TextField
            id="EMAIL"
            label="Email"
            variant="outlined"
            placeholder="Email"
            helperText="Don't want to talk on the phone?"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            id="PHONE"
            label="Phone"
            variant="outlined"
            placeholder="Phone"
            helperText="Can't spell big words real good?"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div className={classes.message}>
          <TextField
            required
            multiline
            rows={5}
            id="MESSAGE"
            label="Message"
            variant="outlined"
            placeholder="Message"
            helperText={
              message.length === 0
                ? "How can I help you? Feel free to be as detailed or as vague as you need to be."
                : message.length < 15
                ? "I'm going to need more than that if you want my help bud..."
                : "How can I help you? Feel free to be as detailed or as vague as you need to be."
            }
            error={
              message.length === 0 ? false : message.length < 15 ? true : false
            }
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className={classes.btn}>
          <Button
            variant="outlined"
            className={message.length < 15 ? classes.red : classes.green}
            disabled={message.length < 15 ? true : false}
            onClick={() => submit()}
          >
            Send Message
          </Button>
        </div>
      </div>
    </form>
  );
}
