import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = "service_xuwewu6";
const TEMPLATE_ID = "template_azduex5";
const PUBLIC_KEY = "p34ma_2agC9U-xDYS";

const contact = () => {
  function handleOnSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Nachricht erfolgreich gesendet",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ups, da ist ein Fehler aufgetreten",
          text: error.text,
        });
      }
    );
    e.target.reset();
  }

  return (
    <div >
      <div className="box">
        <p>Nicole Dutschmann</p>
        <p>Bauhofstr. 1</p>
        <p>03130 Spremberg</p>
        <p>
          <FontAwesomeIcon icon={faPhone} beat /> 0176/82435652
        </p>
      </div>
      <div className="form">
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="from_name"
            placeholder="Name…"
            required
            icon="Benutzerkreis"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Message…"
            required
          />

          <Button className="glow-on-hover" type="submit" color="green ">
            Senden
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default contact;
