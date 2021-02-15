import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

import configData from "../../config.json";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  React.useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  const classes = useStyles();

  const { ...rest } = props;

  const [username, setUsername] = useState('');
  const [usernameFlag, setUsernameFlag] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogIn = () => {
    {
      if (username === "") {
        setUsernameFlag("error");
      }
      if (password === "") {
        setPassword("error");
      }
      console.log("username-" +username);
      const url = new URL(configData.SERVER_URL+'user/us/' + username);
      fetch(url.toString())
          .then(response => {
            if (!response.ok) {
              console.log('error');
            }
            return response.json();
          })
          .then((data) => {
            if(data.password && data.password === password) {
              let org = data.org;
              document.location.href="/home";
              localStorage.setItem("isAuth", "xS1tnMgfDt");
              localStorage.setItem("user", username);
              localStorage.setItem("org", org);
            } else {
              setUsernameFlag("error");
              setPassword("error");
            }
          })
    }
  }

  const handleChangeName = e => {
    console.log('login' + e.target.value);
    setUsername(e.target.value);
  }

  const  handleChangeEmail = e => {
    console.log('login' + e.target.value);
    setEmail(e.target.value);
  }

  const  handleChangePass = e => {
    console.log('login' + e.target.value);
    setPassword(e.target.value);
  }

  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="rose"
              >
                <h4 className={classes.cardTitle}>Log in</h4>
                <div className={classes.socialLine}>
                  {[
                    "fab fa-facebook-square",
                    "fab fa-twitter",
                    "fab fa-google-plus"
                  ].map((prop, key) => {
                    return (
                      <Button
                        color="transparent"
                        justIcon
                        key={key}
                        className={classes.customButtonClass}
                      >
                        <i className={prop} />
                      </Button>
                    );
                  })}
                </div>
              </CardHeader>
              <CardBody>
                <CustomInput
                  success={usernameFlag === "success"}
                  error={usernameFlag === "error"}
                  labelText="First Name.."
                  id="firstname"
                  onChange={handleChangeName}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => {
                      if (verifyLength(event.target.value, 2)) {
                        setUsernameFlag("success");
                      } else {
                        setUsernameFlag("error");
                      }
                      console.log("event.target.value1-" + event.target.value)
                      setUsername(event.target.value);
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Email..."
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    disabled: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Password"
                  id="password"
                  success={password === "success"}
                  error={password === "error"}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{onChange: event => {
                      if (verifyLength(event.target.value, 2)) {
                        setPassword("success");
                      } else {
                        setPassword("error");
                      }
                      console.log("event.target.value2-" +event.target.value)
                      setPassword(event.target.value);
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off"
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button color="rose" simple size="lg" block onClick={onLogIn}>
                  Let{"'"}s Go
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
